<template>
  <validation-observer ref="simpleRules">
    <b-card-code
      title="Tulis Surat Masuk"
      :class="$route.name == 'detail-disposisi' ? 'detail-dispo' : ''"
    >
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
              <b-form-select
                v-model="Deadline"
                :options="optionsDeadline"
                placeholder="Pilih Deadline2"
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

          <b-form-group
            label="Keputusan"
            label-for="Keputusan"
            class="mt-2"
          >
            <v-select
              v-model="selectedKeputusan"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              label="text"
              placeholder="Pilih Keputusan"
              :options="optionsKeputusan"
            />
          </b-form-group>

          <b-form-group
            label="Untuk Dilihat"
            label-for="dilihat"
            class="mt-2"
          >
            <v-select
              v-model="selectedViewers"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              label="text"
              placeholder="Pilih Viewers"
              :options="optionsViewers"
              multiple
            />
          </b-form-group>

          <b-form-group
            label="Private"
            label-for="private"
            class="mt-2"
          >
            <b-form-checkbox
              v-model="privates"
              checked="false"
              name="check-button"
              switch
              inline
            />
          </b-form-group>

        </b-col>
      </b-row>

      <b-row class="match-height">
        <b-col md="6">
          <h5> Ganti File Surat</h5>
          <b-form-group
            label="File Surat"
            label-for="FileSurat"
          >

            <div
              v-if="gantiFile == false"
              style="
                display: flex;
                justify-content: space-between;
                align-items: center;"
            >
              <div
                style="display:flex;cursor:pointer;
              align-items: center;"
                @click="openFile()"
              >
                <feather-icon
                  icon="FileIcon"
                  size="72"
                />
                <h5 class="ml-1">
                  Open File
                </h5>
              </div>

              <b-button
                v-model="gantiFile"
                variant="outline-primary"
                class="bg-gradient-primary "
                @click.prevent="toggleFile"
              >
                <span class="align-middle">Ganti File</span>
              </b-button>
            </div>

            <div
              v-else
              style="
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;"
            >
              <b-form-file
                id="FileSurat"
                v-model="file"
                placeholder="Input File Surat"
                drop-placeholder="Drop file here..."
                @change="fileChange"
              />

              <b-button
                v-model="gantiFile"
                variant="outline-primary"
                class="bg-gradient-primary mt-1"
                @click.prevent="toggleFile"
              >
                <span class="align-middle">Open File</span>
              </b-button>
            </div>

            <!-- <b-button
              variant="outline-primary"
              class="bg-gradient-primary "
              @click.prevent="downloadItem"
            >
              <span class="align-middle">Open File</span>
            </b-button> -->
          </b-form-group>
        </b-col>
      </b-row>

      <b-card-code
        title="Keputusan"
        style="margin: 0 -15px;"
      >
        <b-row
          class="match-height"
        >
          <b-col md="6">
            <div class="tanggapan">
              <div class="avatar">
                <img :src="require('@/assets/images/icons/user.png')">
              </div>
              <div
                class="input"
                :class="Jabatan === 'Decision' ? '' : 'uncomment'"
              >
                <h2> Ketua I </h2>
                <b-input-group>
                  <b-form-input
                    v-model="Komentar1"
                    :disabled="Jabatan !== 'Decision'"
                    placeholder="Belum ada komentar"
                  />
                  <b-button
                    v-show="Jabatan === 'Decision'"
                    variant="outline-primary"
                    class="bg-gradient-primary"
                    style="border-radius: 0"
                    @click="kirimKomentar1"
                  >
                    <span class="align-middle">Kirim</span>
                  </b-button>
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
              <div
                v-for="(option, index) in Komentar"
                :key="option.id"
                class="tanggapan"
                style="margin-bottom:15px"
              >
                <div class="avatar">
                  <img :src="require('@/assets/images/icons/user.png')">
                </div>
                <!-- <div
                  class="input"
                  :class="Komentar[index].nama === userRole"
                > -->
                <div
                  class="input"
                  :class="Jabatan === 'Responder' ? '' : 'uncomment'"
                >
                  <h2> {{ option.nama }} </h2>
                  <b-input-group>
                    <b-form-input
                      v-model="Komentar[index].komentar"
                      placeholder="Belum ada komentar"
                      :disabled="Komentar[index].nama !== userRole"
                    />
                    <b-button
                      v-show="Komentar[index].nama === userRole"
                      variant="outline-primary"
                      class="bg-gradient-primary"
                      style="border-radius: 0"
                      @click="kirimKomentar(index)"
                    >
                      <span class="align-middle">Kirim</span>
                    </b-button>
                  </b-input-group>
                </div>
              </div>
            </b-card-code>
          </b-col>
        </b-row>
      </b-card-code>
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
  BAvatar, BPagination, BFormGroup, BFormInput, BFormSelect, BDropdown, BDropdownItem,
  BButton, BRow, BCol, BFormFile, BFormTags, BFormCheckboxGroup, BFormTextarea, BInputGroup,
  BFormCheckbox,
} from 'bootstrap-vue'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { required, email } from '@validations'
import vSelect from 'vue-select'
import axios from '@axios'
import useJwt from '@/auth/jwt/useJwt'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

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
    vSelect,
    BFormCheckbox,
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
      Jabatan: '',
      Komentar1: '',
      Komentar2: '',
      Komentar: [],
      Responder1: '',
      userRole: '',
      selectedFile: '',
      selectedKeputusan: [],
      selectedViewers: [],
      privates: false,
      file: null,
      gantiFile: false,
      fileName: '',
      url: '',
      optionsKeputusan: [],
      optionsViewers: [
        { value: '', text: '' },
      ],
      value: ['apple', 'orange'],
      tags: [],
      optionsDeadline: [
        { value: 'OneDay', text: 'OneDay' },
        { value: 'TwoDay', text: 'TwoDay' },
        { value: 'ThreeDay', text: 'ThreeDay' },
      ],
      optionsKategori: [
        { value: '', text: 'Pilih Kategori' },
        { value: 'Undangan', text: 'Undangan' },
        { value: 'Permohonan', text: 'Permohonan' },
        { value: 'CSR', text: 'CSR' },
        { value: 'Instansi Pendidikan', text: 'Instansi Pendidikan' },
        { value: 'Pemberitahuan', text: 'Pemberitahuan' },
        { value: 'ILain-lain', text: 'ILain-lain' },
      ],
      selected: [],
      options: [

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
    this.getResponder()
    this.getDetail()
  },
  methods: {
    async fileChange(e) {
      const files = e.target.files[0]
      const image = new FormData()
      image.append('file', files)
      image.append('from', 1)
      this.file = URL.createObjectURL(files)
      // const { data } = await axios.post('/api/v1/file/upload', image)
      const { data } = await axios.post('api/v1/file/upload',
        image, {
          headers:
        {
          'content-type': 'multipart/form-data; boundary=<calculated when request is sent>',
          token: localStorage.getItem(useJwt.jwtConfig.storageTokenKeyName),
        },
        })
      this.fileName = data
      console.log(this.fileName)
    },

    openFile() {
      window.open(this.url, '_blank')
    },

    toggleFile() {
      if (this.gantiFile === false) {
        this.gantiFile = true
      } else {
        this.gantiFile = false
      }
    },

    validationForm() {
      this.$refs.simpleRules.validate().then(success => {
        if (success) {
          this.addDispo()
        }
      })
    },

    async kirimKomentar1() {
      const idUser = JSON.parse(localStorage.getItem('userData'))
      await axios.post(`api/v1/siap/disposition/comment/${idUser.role.id}`, {
        comment: this.Komentar1,
      }, {
        headers:
        { token: localStorage.getItem(useJwt.jwtConfig.storageTokenKeyName) },
      })
        .then(response => {
          console.log(response)
          this.$toast({
            component: ToastificationContent,
            props: {
              title: 'Success',
              icon: 'InfoIcon',
              text: response.data.message,
              variant: 'success',
            },
          },
          {
            position: 'bottom-right',
          })
        })
        .catch(error => {
          this.$toast({
            component: ToastificationContent,
            props: {
              title: 'Error',
              icon: 'InfoIcon',
              text: error.response.data.error.message,
              variant: 'danger',
            },
          },
          {
            position: 'bottom-right',
          })
        })
    },

    async kirimKomentar(n) {
      const idUser = JSON.parse(localStorage.getItem('userData'))
      console.log('parse', idUser.role.id)
      console.log('parse2', n)
      // const id = n.id
      console.log('parse3', this.Komentar[n])
      console.log('parse4', this.Komentar1)
      // const param = Number(this.$route.params.id)
      await axios.post(`api/v1/siap/disposition/comment/${this.Komentar[n].id}`, {
        comment: this.Komentar[n].komentar,
      }, {
        headers:
        { token: localStorage.getItem(useJwt.jwtConfig.storageTokenKeyName) },
      })
        .then(response => {
          console.log(response)
          this.$toast({
            component: ToastificationContent,
            props: {
              title: 'Success',
              icon: 'InfoIcon',
              text: response.data.message,
              variant: 'success',
            },
          },
          {
            position: 'bottom-right',
          })
        })
        .catch(error => {
          this.$toast({
            component: ToastificationContent,
            props: {
              title: 'Error',
              icon: 'InfoIcon',
              text: error.response.data.error.message,
              variant: 'danger',
            },
          },
          {
            position: 'bottom-right',
          })
        })
    },

    async getDetail() {
      const param = Number(this.$route.params.id)
      const roleName = JSON.parse(localStorage.getItem('userData'))
      const { data } = await axios.get(`api/v1/siap/disposition/inbox/${param}`,
        {
          headers:
        { token: localStorage.getItem(useJwt.jwtConfig.storageTokenKeyName) },
        })

      this.NoSurat = data.disposition.code
      // this.Deadline = data.disposition.dateline
      const date = data.disposition.dateline
      this.optionsDeadline.push({ text: date, value: '' })
      this.Perihal = data.disposition.title

      this.Kategori = data.disposition.category.name
      this.Pengirim = data.disposition.from
      this.Deskripsi = data.disposition.desc
      this.Catatan = data.disposition.note
      this.userRole = roleName.role.name
      this.selectedFile = data.disposition.file.id
      this.url = data.disposition.file !== null ? data.disposition.file.url : 'tes'
      this.Jabatan = data.reciver_type
      this.Komentar1 = data.decision.comment
      this.Komentar = data.responders.map(e => ({ id: e.user_id, nama: e.role_name, komentar: e.comment }))
      this.selected = data.responders.map(e => (e.user_id))
      this.selectedKeputusan.push({ text: data.decision.role_name, value: data.decision.user_id })
      this.selectedViewers = data.supervisors.map(e => ({ value: e.id, text: e.role_name }))

      this.privates = data.disposition.private !== 0

      // this.options = data.disposition.forward_dispositions.map(e => ({ item: e.role_id, name: e.role_name }))
      // this.options.push(data.disposition.forward_dispositions.map(e => ({ item: e.role_id, name: e.role_name })))
      this.tags = data.disposition.tags.map(e => (e.name))
      // console.log('asd', this.tags)
      //   .catch(error => {
      //     console.log(error)
      //   })
    },

    async getResponder() {
      const { data } = await axios.get('api/v1/siap/disposition/responders',
        {
          headers:
        { token: localStorage.getItem(useJwt.jwtConfig.storageTokenKeyName) },
        })
      this.options = data.map(e => ({ item: e.id, name: e.name }))
      this.optionsKeputusan = data.map(e => ({ value: e.id, text: e.name }))
      this.optionsViewers = data.map(e => ({ value: e.id, text: e.name }))
      console.log('option', this.option)
        .catch(error => {
          console.log(error)
        })
    },

    downloadItem() {
      console.log(this.url)
      // const param = Number(this.$route.params.id)
      axios.get(this.url,
        {
          responseType: 'blob',
          headers:
        { token: localStorage.getItem(useJwt.jwtConfig.storageTokenKeyName) },
        })
        .then(response => {
          console.log(response)
          const blob = new Blob([response.data])
          const link = document.createElement('a')
          link.href = URL.createObjectURL(blob)
          link.download = this.NoSurat
          link.click()
          URL.revokeObjectURL(link.href)
        }).catch(console.error)
    },

    async addDispo() {
      console.log(this.privates)
      await axios.post('api/v1/siap/disposition/add', {
        cat_name: this.Kategori,
        title: this.Perihal,
        from: this.Pengirim,
        dateline: this.Deadline,
        // file: this.fileName.file,
        file_id: this.fileName === '' ? this.selectedFile : this.fileName.id,
        desc: this.Deskripsi,
        note: this.Catatan,
        private: this.privates,
        tags: this.tags,
        user_decision: this.selectedKeputusan[0].value,
        user_responders: this.selected,
        // forward_to: {
        //   responders: [
        //     this.selected,
        //   ],
        // },

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
@import '@core/scss/vue/libs/vue-select.scss';
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
  .uncomment{
    input{
      border: unset;
      border-left: solid 1px;
      border-radius: 0;
    }
  }
  .avatar{
    width: 80px;
    img{
      width: 100%;
      height: intrinsic;
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
  .input-group-text{
    background-image: linear-gradient(47deg, #00427A, #005ead);
    color: #fff;
  }
}
 .detail-dispo{
  .form-control, .custom-select{
    border: unset;
    border-bottom: 1px solid #d8d6de;
    border-radius: 0;
    pointer-events: none;
  }
}
</style>
