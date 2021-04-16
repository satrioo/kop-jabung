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

          <b-row
            class="match-height mt-2"
          >
            <b-col md="12">
              <b-form-group
                label="Divisi/ Bagian/Unit Terkait"
              >
                <!-- <b-form-checkbox-group
                v-model="selected"
                :options="options"
                value-field="item"
                text-field="name"
                disabled-field="notEnabled"
                class="demo-inline-spacing labelfull"
                :disabled="$route.name !== 'edit-disposisi'"
              /> -->
                <v-select
                  v-model="selected"
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                  label="text"
                  multiple
                  placeholder="Pilih Divisi"
                  :options="options"
                  :disabled="$route.name !== 'edit-disposisi'"
                />
              </b-form-group>
            </b-col>
          </b-row>

          <b-row class="match-height mt-2">
            <b-col md="12">
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
                    class="open-file"
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
                    v-show="$route.name === 'edit-disposisi'"
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
              <b-col md="12">
                <div class="tanggapan">
                  <div class="avatar">
                    <img :src="require('@/assets/images/icons/user.png')">
                  </div>
                  <div
                    class="input"
                    :class="Jabatan === selectedKeputusan[0].text ? '' : 'uncomment'"
                  >
                    <h2> {{ selectedKeputusan[0].text }} </h2>
                    <b-input-group>
                      <b-form-input
                        v-model="Komentar1"
                        :disabled="Jabatan !== selectedKeputusan[0].text"
                        placeholder="Belum ada komentar"
                      />
                      <b-button
                        v-show="Jabatan === selectedKeputusan[0].text"
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
          </b-card-code>

          <b-row>
            <b-col md="12 ">
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

                  <div
                    class="input"
                    :class="Jabatan === Komentar[index].nama ? '' : 'uncomment'"
                  >
                    <h2> {{ option.nama }} </h2>
                    <b-input-group>
                      <b-form-input
                        v-model="Komentar[index].komentar"
                        placeholder="Belum ada komentar"
                        :disabled="Komentar[index].nama !== Jabatan"
                      />
                      <b-button
                        v-show="Komentar[index].nama === Jabatan"
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
                :disabled="$route.name !== 'edit-disposisi'"
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
              :disabled="$route.name !== 'edit-disposisi'"
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
              :disabled="$route.name !== 'edit-disposisi'"
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
              :disabled="$route.name !== 'edit-disposisi'"
              switch
              inline
            />
          </b-form-group>

        </b-col>
      </b-row>

      <b-button
        v-show="JabatanName === 'Staff SE'"
        variant="outline-primary"
        class="bg-gradient-primary "
        type="submit"
        @click.prevent="validationForm"
      >
        <feather-icon
          icon="SaveIcon"
          class="mr-50"
        />
        <span class="align-middle">Simpan</span>
      </b-button>

    </b-card-code>

    <b-card-code
      v-show="JabatanName === 'Staff SE'"
      title="Perintah Disposisi"
    >
      <b-row class="match-height">
        <b-col md="6">
          <v-select
            v-model="selectedPerintah"
            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
            label="text"
            placeholder="Pilih Tujuan Perintah Disposisi"
            :options="optionsKeputusan"
          />
        </b-col>
      </b-row>

      <b-button
        variant="outline-primary"
        class="bg-gradient-primary "
        type="submit"
        @click.prevent="tujuanDisposisi"
      >
        <feather-icon
          icon="PlusIcon"
          class="mr-50"
        />
        <span class="align-middle">Tambah</span>
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
import dayjs from 'dayjs'
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
      JabatanName: '',
      Komentar1: '',
      Komentar1_id: '',
      Komentar2: '',
      dispoID: '',
      Komentar: [],
      Responder1: '',
      userRole: '',
      selectedFile: '',
      selectedKeputusan: [],
      selectedPerintah: [],
      selectedViewers: [],
      privates: false,
      file: null,
      gantiFile: false,
      fileName: '',
      url: '',
      selected: [],
      options: [],
      optionsResponder: [],
      optionsKeputusan: [],
      optionsViewers: [
        { value: '', text: '' },
      ],
      value: ['apple', 'orange'],
      tags: [],
      optionsDeadline: [],
      optionsKategori: [
        { value: '', text: 'Pilih Kategori' },
        { value: 'Undangan', text: 'Undangan' },
        { value: 'Permohonan', text: 'Permohonan' },
        { value: 'CSR', text: 'CSR' },
        { value: 'Instansi Pendidikan', text: 'Instansi Pendidikan' },
        { value: 'Pemberitahuan', text: 'Pemberitahuan' },
        { value: 'ILain-lain', text: 'ILain-lain' },
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
      const { data } = await axios.post('api/v1/file/upload',
        image, {
          headers:
        {
          'content-type': 'multipart/form-data; boundary=<calculated when request is sent>',
          token: localStorage.getItem(useJwt.jwtConfig.storageTokenKeyName),
        },
        })
      this.fileName = data
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
      await axios.post('api/v1/siap/disposition/comment', {
        comment: this.Komentar1,
        comment_id: this.Komentar1_id,
      }, {
        headers:
        { token: localStorage.getItem(useJwt.jwtConfig.storageTokenKeyName) },
      })
        .then(response => {
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
      await axios.post('api/v1/siap/disposition/comment', {
        comment: this.Komentar[n].komentar,
        comment_id: this.Komentar[n].commentID,
      }, {
        headers:
        { token: localStorage.getItem(useJwt.jwtConfig.storageTokenKeyName) },
      })
        .then(response => {
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

    async tujuanDisposisi() {
      await axios.post('api/v1/siap/disposition/send', {
        disposition_id: this.dispoID,
        to: this.selectedPerintah.value,
      }, {
        headers:
        { token: localStorage.getItem(useJwt.jwtConfig.storageTokenKeyName) },
      })
        .then(response => {
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
      const date = dayjs(data.disposition.dateline).format('DD-MM-YYYY')
      this.optionsDeadline.push({ text: date, value: '' })
      this.Perihal = data.disposition.title
      this.dispoID = data.disposition.id
      this.Kategori = data.disposition.category.name
      this.Pengirim = data.disposition.from
      this.Deskripsi = data.disposition.desc
      this.Catatan = data.disposition.note
      this.userRole = roleName.role.name
      this.selectedFile = data.disposition.file.id
      this.url = data.disposition.file !== null ? data.disposition.file.url : 'tes'
      this.Jabatan = data.user.role_name
      this.JabatanName = data.user.name
      this.Komentar1 = data.decision.comment
      this.Komentar1_id = data.decision.id
      this.Komentar = data.responders.map(e => ({
        id: e.user_id, nama: e.role_name, komentar: e.comment, commentID: e.id,
      }))
      this.selected = data.responders.map(e => ({ value: e.user_id, text: e.role_name }))
      this.selectedKeputusan.push({ text: data.decision.role_name, value: data.decision.user_id })
      this.selectedViewers = data.supervisors.map(e => ({ value: e.id, text: e.role_name }))
      // this.optionsResponder.push(data.responders.map(e => ({ value: e.role_id, text: e.role_name })))
      this.privates = data.disposition.private !== 0

      // this.options = data.disposition.forward_dispositions.map(e => ({ item: e.role_id, name: e.role_name }))
      // this.options.push(data.disposition.forward_dispositions.map(e => ({ item: e.role_id, name: e.role_name })))
      this.tags = data.disposition.tags.map(e => (e.name))
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
      this.options = data.map(e => ({ value: e.id, text: e.name }))
      this.optionsKeputusan = data.map(e => ({ value: e.id, text: e.name }))
      this.optionsViewers = data.map(e => ({ value: e.id, text: e.name }))
      // console.log('option', this.option)
      //   .catch(error => {
      //     console.log(error)
      //   })
    },

    downloadItem() {
      axios.get(this.url,
        {
          responseType: 'blob',
          headers:
        { token: localStorage.getItem(useJwt.jwtConfig.storageTokenKeyName) },
        })
        .then(response => {
          const blob = new Blob([response.data])
          const link = document.createElement('a')
          link.href = URL.createObjectURL(blob)
          link.download = this.NoSurat
          link.click()
          URL.revokeObjectURL(link.href)
        })
    },

    async addDispo() {
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
        user_responders: this.selected.map(e => (e.value)),
      }, {
        headers:
        { token: localStorage.getItem(useJwt.jwtConfig.storageTokenKeyName) },
      })
        .then(response => {
        // console.log(response.data.data)
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

.detail-dispo{
  .form-control, .custom-select{
    border: unset;
    border-bottom: 1px solid #d8d6de;
    border-radius: 0;
    pointer-events: none;
  }
}

.tanggapan{
  display: flex;
  align-items: center;
  justify-content: space-around;
  .uncomment{
    input{
      border: unset !important;
      border-left: solid 1px !important;
      border-radius: 0 !important;
    }
  }
  input{
    border: 1px solid #d8d6de !important;
    pointer-events: unset !important;
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
  .btn{
    height: 38px;
  }
}

[dir] .vs--disabled .vs__selected{
  background-color: #00427A;
  color: #fff;
}

.custom-control-input[disabled] ~ .custom-control-label, .custom-control-input:disabled ~ .custom-control-label {
  color: #615f6f;
}

.open-file{
  display: flex;
  cursor: pointer;
  align-items: center;
  padding: 10px;
  border-radius: 14px;
  transition: background-color 0.5s ease;
  &:hover{
    background: #efefef;
  }
}
</style>
