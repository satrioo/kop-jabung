<template>
  <validation-observer ref="simpleRules">
    <b-card-code title="Tulis Surat Masuk">
      <b-row class="match-height">
        <b-col md="6">
          <validation-provider
            #default="{ errors }"
            name="No. Surat"
            rules="required"
          >
            <b-form-group
              label="No. Surat"
              label-for="NoSurat"
            >
              <b-form-input
                id="NoSurat"
                v-model="NoSurat"
                placeholder="Input No. Surat"
              />
            </b-form-group>
            <small class="text-danger">{{ errors[0] }}</small>
          </validation-provider>
        </b-col>
        <b-col md="6">
          <validation-provider
            #default="{ errors }"
            name="Deadline"
            rules="required"
          >
            <b-form-group
              label="Deadline"
              label-for="Deadline"
            >
              <b-form-select
                v-model="Deadline"
                :options="optionsDeadline"
                placeholder="as"
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
              <b-form-select
                v-model="Kategori"
                :options="optionsKategori"
                placeholder="as"
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
            name="Pengirim"
            rules="required"
          >
            <b-form-group
              label="Pengirim"
              label-for="Pengirim"
            >
              <b-form-input
                id="Pengirim"
                v-model="Pengirim"
                placeholder="Input Pengirim"
              />
            </b-form-group>
            <small class="text-danger">{{ errors[0] }}</small>
          </validation-provider>

          <validation-provider
            #default="{ errors }"
            name="FileSurat"
            rules="required"
          >
            <b-form-group
              class="mt-2"
              label="Divisi/ Bagian/Unit Terkait"
              label-for="divisi"
            >
              <!-- <label for="tags-basic">Tekan Enter untuk tag baru</label> -->
              <b-form-tags
                v-model="value"
                input-id="tags-basic"
                placeholder="Tambah Tag"
              />
            </b-form-group>
            <small class="text-danger">{{ errors[0] }}</small>
          </validation-provider>

          <b-row
            class="match-height mt-2"
            style="padding: 0px 20px 0px;"
          >
            <b-form-group
              label="Manajer Divisi Intit"
            >
              <b-form-checkbox-group
                v-model="selected"
                :options="options"
                value-field="item"
                text-field="name"
                disabled-field="notEnabled"
                class="demo-inline-spacing labelfull"
              />
            </b-form-group>
          </b-row>
        </b-col>
        <b-col md="6">
          <label for="textarea-default">Deskripsi</label>
          <b-form-textarea
            id="textarea-default"
            v-model="Deskripsi"
            placeholder="Textarea"
            rows="3"
          />

          <label
            for="textarea-default"
            class="mt-2"
          >Catatan</label>
          <b-form-textarea
            id="textarea-default"
            v-model="Catatan"
            placeholder="Textarea"
            rows="3"
          />

          <validation-provider
            #default="{ errors }"
            name="FileSurat"
            rules="required"
            class="mt-2"
          >
            <b-form-group
              label="Tag"
              label-for="tag"
            >
              <!-- <label for="tags-basic">Tekan Enter untuk tag baru</label> -->
              <b-form-tags
                v-model="tags"
                input-id="tags-basic"
                placeholder="Tambah Tag"
              />
            </b-form-group>
            <small class="text-danger">{{ errors[0] }}</small>
          </validation-provider>

        </b-col>
      </b-row>

      <b-row class="match-height">
        <b-col md="6">
          <b-form-group
            label="File Surat"
            label-for="FileSurat"
          >
            <!-- Styled -->
            <b-form-file
              id="FileSurat"
              v-model="file"
              placeholder="Input File Surat"
              drop-placeholder="Drop file here..."
              @change="fileChange"
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
        <feather-icon
          icon="PlusIcon"
          class="mr-50"
        />
        <span class="align-middle">Simpan</span>
      </b-button>

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
      file: null,
      fileName: '',
      value: ['apple', 'orange'],
      tags: ['apple', 'orange'],
      optionsDeadline: [
        { value: '', text: 'Pilih Deadline' },
        { value: 'OneDay', text: 'OneDay' },
        { value: 'TwoDay', text: 'TwoDay' },
        { value: 'ThreeDay', text: 'ThreeDay' },
      ],
      optionsKategori: [
        { value: '', text: 'Pilih Kategori' },
        { value: 'a', text: 'Undangan' },
        { value: 'b', text: 'Permohonan' },
        { value: 'e', text: 'CSR' },
        { value: 'd', text: 'Instansi Pendidikan' },
        { value: 'e', text: 'Pemberitahuan' },
        { value: 'd', text: 'ILain-lain' },
      ],
      selected: [],
      options: [
        { item: '1', name: 'Kabag Produksi' },
        { item: '2', name: 'Manajer Umum' },
        { item: '3', name: 'Manajer Divisi Inti' },
        { item: '4', name: 'Kabag Keuangan' },
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
</style>
