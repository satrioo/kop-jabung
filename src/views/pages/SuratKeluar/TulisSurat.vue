<template>
  <validation-observer ref="simpleRules">
    <b-card-code title="Tulis Surat Masuk">
      <b-row class="match-height">
        <b-col md="6">
          <validation-provider
            #default="{ errors }"
            name="No.Surat Keluar"
            rules="required"
          >
            <b-form-group
              label="No.Surat Keluar"
              label-for="No.Surat Keluar"
            >
              <b-form-input
                id="No.Surat Keluar"
                v-model="NoSurat"
                placeholder="Input No. Surat Keluar"
              />
            </b-form-group>
            <small class="text-danger">{{ errors[0] }}</small>
          </validation-provider>
        </b-col>
        <b-col md="6">
          <validation-provider
            #default="{ errors }"
            name="Kategori"
            rules="required"
          >
            <b-form-group
              label="Kategori"
              label-for="Kategori"
            >
              <b-form-input
                id="Kategori"
                v-model="Kategori"
                placeholder="Input Kategori"
              />
            </b-form-group>
            <small class="text-danger">{{ errors[0] }}</small>
          </validation-provider>
        </b-col>
      </b-row>

      <b-row class="match-height">
        <b-col md="6">
          <validation-provider
            #default="{ errors }"
            name="Kepada"
            rules="required"
          >
            <b-form-group
              label="Kepada"
              label-for="Kepada"
            >
              <b-form-input
                id="Kepada"
                v-model="Kepada"
                placeholder="Input Kepada"
              />
            </b-form-group>
            <small class="text-danger">{{ errors[0] }}</small>
          </validation-provider>
        </b-col>
        <b-col md="6">
          <validation-provider
            #default="{ errors }"
            name="Perihal"
            rules="required"
          >
            <b-form-group
              label="Perihal"
              label-for="Perihal"
            >
              <b-form-input
                id="Perihal"
                v-model="Perihal"
                placeholder="Input Perihal"
              />
            </b-form-group>
            <small class="text-danger">{{ errors[0] }}</small>
          </validation-provider>
        </b-col>
      </b-row>

      <b-row class="match-height">
        <b-col md="6">
          <validation-provider
            #default="{ errors }"
            name="Instansi"
            rules="required"
          >
            <b-form-group
              label="Instansi"
              label-for="Instansi"
            >
              <b-form-input
                id="Instansi"
                v-model="Instansi"
                placeholder="Input Instansi"
              />
            </b-form-group>
            <small class="text-danger">{{ errors[0] }}</small>
          </validation-provider>
        </b-col>

        <b-col md="6">
          <validation-provider
            #default="{ errors }"
            name="Tempat Berkas"
            rules="required"
          >
            <b-form-group
              label="Tempat Berkas"
              label-for="Tempat Berkas"
            >
              <b-form-input
                id="TempatBerkas"
                v-model="TempatBerkas"
                placeholder="Input Tempat Berkas"
              />
            </b-form-group>
            <small class="text-danger">{{ errors[0] }}</small>
          </validation-provider>

        </b-col>
      </b-row>

      <b-row class="match-height">
        <b-col md="12 mb-3">
          <b-form-group
            label="Isi surat"
          >
            <quill-editor
              v-model="content"
              :options="snowOption"
              style="height: 250px"
            />
          </b-form-group>
        </b-col>
      </b-row>

      <b-button
        variant="outline-primary"
        class="bg-gradient-primary "
        type="submit"
        @click.prevent="validationForm"
      >
        <span class="align-middle">Simpan</span>
      </b-button>

    </b-card-code>

    <b-card-code title="Validasi Surat Masuk">
      <b-form-group
        class="mb-5"
      >
        <quill-editor
          v-model="content"
          :options="snowOption"
          style="height: 250px"
        />
      </b-form-group>

      <b-button
        variant="outline-primary"
        class="bg-gradient-primary "
        type="submit"
        @click.prevent="validationForm"
      >
        <span class="align-middle">Validasi</span>
      </b-button>
    </b-card-code>

    <b-card-code title="Status Surat Keluar">
      <b-row
        class="match-height"
        style="margin:0"
      >
        <b-col md="4">
          <b-form-group
            label="Status"
            label-for="Status"
            class="mb-2"
          >
            <b-form-select
              v-model="Status"
              :options="optionsStatus"
              placeholder=""
            />
          </b-form-group>

          <b-form-group
            label="Catatan"
            label-for="Catatan"
          >
            <b-form-textarea
              id="textarea-default"
              v-model="Deskripsi"
              placeholder="Textarea"
              rows="3"
            />
          </b-form-group>
        </b-col>
        <b-col
          offset-md="1"
          md="7"
        >
          <div class="tanggapan">
            <div class="avatar">
              <img :src="require('@/assets/images/icons/user.png')">
            </div>
            <div class="text">
              <h2> Ketua I </h2>
              <h4> 12-03-2021 09:00 WIB </h4>
              <h3> Belum ada keputusan disposisi. </h3>
            </div>
          </div>
        </b-col>

        <b-button
          variant="outline-primary"
          class="bg-gradient-primary mt-2"
          style="margin-left: 15px"
          type="submit"
          @click.prevent="validationForm"
        >
          <span class="align-middle">Validasi</span>
        </b-button>
      </b-row>
    </b-card-code>
  </validation-observer>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import {
  BAvatar, BBadge, BPagination, BFormGroup, BFormInput, BFormSelect, BDropdown, BDropdownItem,
  BButton, BRow, BCol, BFormFile, BFormTags, BFormCheckboxGroup, BFormTextarea,
} from 'bootstrap-vue'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { required, email } from '@validations'
import axios from '@axios'
import useJwt from '@/auth/jwt/useJwt'
import { quillEditor } from 'vue-quill-editor'

import 'quill/dist/quill.core.css'
// eslint-disable-next-line
import 'quill/dist/quill.snow.css'
// eslint-disable-next-line
import 'quill/dist/quill.bubble.css'

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
    required,
    email,
    BFormFile,
    BRow,
    BCol,
    BCardCode,
    BAvatar,
    BBadge,
    BPagination,
    BFormGroup,
    BFormInput,
    BFormSelect,
    BDropdown,
    BDropdownItem,
    BButton,
    BFormTags,
    BFormCheckboxGroup,
    BFormTextarea,
    quillEditor,
  },
  data() {
    return {
      NoSurat: '',
      Deadline: '',
      Perihal: '',
      Kategori: '',
      Pengirim: '',
      Deskripsi: '',
      Catatan: '',
      Status: '',
      file: null,
      fileName: '',
      value: ['apple', 'orange'],
      tags: ['apple', 'orange'],
      optionsStatus: [
        { value: '', text: 'Proses' },
        { value: 'OneDay', text: 'Disetujui' },
        { value: 'TwoDay', text: 'Ditolak' },
      ],
    }
  },
  methods: {

    async fileChange(e) {
      const file = e.target.files[0]
      const image = new FormData()
      image.append('file_id', file)
      this.file = URL.createObjectURL(file)
      const { data } = await axios.post('/api/v1/file/upload', image)
      this.fileName = data
      console.log(this.fileName)
    },

    validationForm() {
      this.$refs.simpleRules.validate().then(success => {
        if (success) {
          this.addDispo()
        }
      })
    },

    async addDispo() {
      await axios.post('api/v1/siap/disposition/add', {
        cat_name: this.Kategori,
        title: this.Perihal,
        from: this.Pengirim,
        dateline: this.Deadline,
        file: this.fileName.file,
        desc: this.Deskripsi,
        note: this.Catatan,
        tags: this.tags,
        forward_to: {
          responders: [
            this.selected,
          ],
        },

      }, {
        headers:
        { token: localStorage.getItem(useJwt.jwtConfig.storageTokenKeyName) },
      })
        .then(response => {
          console.log(response.data.data)
        })
        .catch(error => {
          console.log(error)
        })
    },
  },
}
</script>

<style lang="scss" >
.row{
  margin-bottom: 20px;
}
.form-group{
  margin-bottom: 5px;
}
.nopad{
    padding: 0;
}
.labelfull{
  .custom-checkbox{
    width: 100%;
  }
}
.labelfull .custom-checkbox {
    width: 100%;
}
.tanggapan{
  display: flex;
  align-items: center;
  .avatar{
    width: 80px;
    margin-right: 20px;
    img{
      width: 100%;
    };
  }
  h2{
    font-size: 16px;
  }
  h3{
    font-size: 14px;
    font-weight: 400;
  }
  h4{
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 5px;
  }
  .input{
    margin-left: 25px;
    flex-grow: 1;
  }
  .input-group-append{
    cursor: pointer;
  }
}
</style>
