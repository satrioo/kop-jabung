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
            name="No. Surat"
            rules="required"
          >
            <b-form-group
              label="Deadline"
              label-for="Deadline"
            >
              <b-form-input
                id="Deadline"
                v-model="Deadline"
                placeholder="Input Deadline"
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

          <!-- <validation-provider
            #default="{ errors }"
            name="FileSurat"
            rules="required"
          >
            <b-form-group
              class="mt-2"
              label="Divisi/ Bagian/Unit Terkait"
              label-for="divisi"
            >
              <b-form-tags
                v-model="value"
                input-id="tags-basic"
                placeholder="Tambah Tag"
              />
            </b-form-group>
            <small class="text-danger">{{ errors[0] }}</small>
          </validation-provider> -->

          <b-row
            class="match-height mt-2"
            style="padding: 0px 20px 0px;"
          >
            <b-form-group
              label="Divisi/ Bagian/Unit Terkait"
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

      <b-card-code
        title="Keputusan"
        style="margin: 0 -15px;"
      >
        <b-row class="match-height">
          <b-col md="6">
            <!-- <div class="tanggapan">
              <div class="avatar">
                <img :src="require('@/assets/images/icons/user.png')">
              </div>
              <div class="text">
                <h2> Ketua I </h2>
                <h3> Belum ada keputusan disposisi. </h3>
              </div>
              <div>
                <b-button
                  variant="outline-primary"
                  class="bg-gradient-primary "
                  size="sm"
                  @click.prevent="lala"
                >
                  <span class="align-middle">Tulis</span>
                </b-button>
              </div>
            </div> -->

            <div class="tanggapan">
              <div class="avatar">
                <img :src="require('@/assets/images/icons/user.png')">
              </div>
              <div class="input">
                <h2> Ketua I </h2>
                <b-input-group
                  append="Tulis"
                  @click="lala"
                >
                  <b-form-input placeholder="Recipient's username" />
                </b-input-group>
              </div>
            </div>

          </b-col>
        </b-row>

        <b-row>
          <b-col md="6">
            <b-card-code
              title="Tanggapan"
              style="margin: 0 -15px;"
            >
              <div class="tanggapan">
                <div class="avatar">
                  <img :src="require('@/assets/images/icons/user.png')">
                </div>
                <div class="input">
                  <h2> Kabag Produksi </h2>
                  <b-input-group
                    append="Tulis"
                    @click="lala"
                  >
                    <b-form-input placeholder="Recipient's username" />
                  </b-input-group>
                </div>
              </div>
            </b-card-code>
          </b-col>
        </b-row>
      </b-card-code>

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

    <b-card-code title="Perintah Disposisi">
      <b-row class="match-height">
        <b-col md="6">

          <b-form-select
            v-model="Perintah"
            :options="optionsPerintah"
            placeholder="as"
          />

        </b-col>
      </b-row>
    </b-card-code>
  </validation-observer>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import {
  BAvatar, BBadge, BPagination, BFormGroup, BFormInput, BFormSelect, BDropdown, BDropdownItem,
  BButton, BRow, BCol, BFormFile, BFormTags, BFormCheckboxGroup, BFormTextarea, BInputGroup,
  BInputGroupPrepend, BInputGroupAppend,
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
    BInputGroup,
    BInputGroupPrepend,
    BInputGroupAppend,

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
      Perintah: '',
      file: null,
      fileName: '',
      value: ['apple', 'orange'],
      tags: [],
      optionsDeadline: [
        { value: '', text: 'Pilih Deadline' },
        { value: 'OneDay', text: 'OneDay' },
        { value: 'TwoDay', text: 'TwoDay' },
        { value: 'ThreeDay', text: 'ThreeDay' },
      ],
      optionsKategori: [
        { value: '', text: 'Pilih Kategori' },
        { value: 'UNDANGAN', text: 'Undangan' },
        { value: 'Permohonan', text: 'Permohonan' },
        { value: 'CSR', text: 'CSR' },
        { value: 'Instansi Pendidikan', text: 'Instansi Pendidikan' },
        { value: 'Pemberitahuan', text: 'Pemberitahuan' },
        { value: 'ILain-lain', text: 'ILain-lain' },
      ],
      selected: [],
      options: [
        { item: '1', name: 'Kabag Produksi' },
        { item: '2', name: 'Manajer Umum' },
        { item: '3', name: 'Manajer Divisi Inti' },
        { item: '4', name: 'Kabag Keuangan' },
      ],
      optionsPerintah: [
        { value: '', text: 'Pilih Tujuan' },
        { value: '1', text: 'Manager Umum' },
        { value: '2', text: 'Kabag HRD' },
        { value: '3', text: 'Manajer Divisi Inti' },
        { value: '4', text: 'Kabag Keuangan' },
      ],
    }
  },
  mounted() {
    this.getDetail()
  },
  methods: {
    async fileChange(e) {
      const file = e.target.files[0]
      const image = new FormData()
      image.append('file', file)
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

    async getDetail() {
      const param = Number(this.$route.params.id)
      const { data } = await axios.get(`api/v1/siap/disposition/inbox/${param}`,
        {
          headers:
        { token: localStorage.getItem(useJwt.jwtConfig.storageTokenKeyName) },
        })

      this.NoSurat = data.incoming_letter.code
      this.Deadline = data.incoming_letter.dateline
      this.Perihal = data.incoming_letter.title
      this.Kategori = data.incoming_letter.category.name
      this.Pengirim = data.incoming_letter.from
      this.Deskripsi = data.incoming_letter.desc
      this.Catatan = data.incoming_letter.note
      this.tags = data.tags
      console.log(data)
        .catch(error => {
          console.log(error)
        })
    },

    lala() {
      console.log('asd')
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
  justify-content: space-around;
  .avatar{
    width: 80px;
    img{
      width: 100%;
    };
  }
  h2{
    font-size: 16px;
  }
  h3{
    font-size: 14px;
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
