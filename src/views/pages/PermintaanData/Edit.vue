<template>
  <validation-observer ref="simpleRules">
    <b-card-code
      :title="$route.name == 'detail-permintaan-data' ? 'Detail' : 'Edit'"
      :class="$route.name == 'detail-permintaan-data' ? 'detail' : ''"
    >
      <b-row class="match-height">
        <b-col md="12">
          <validation-provider
            #default="{ errors }"
            name="Instansi"
            rules="required"
          >
            <b-form-group
              label="Nama Instansi"
              label-for="Nama Instansi"
            >
              <b-form-input
                id="Instansi"
                v-model="instansi"
                placeholder="Input Instansi"
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
            name="Nama Lengkap"
            rules="required"
          >
            <b-form-group
              label="Nama Lengkap"
              label-for="Nama Lengkap"
            >
              <b-form-input
                id="Nama Lengkap"
                v-model="name"
                placeholder="Input Nama Lengkap"
              />
            </b-form-group>
            <small class="text-danger">{{ errors[0] }}</small>
          </validation-provider>
        </b-col>

        <b-col md="6">
          <validation-provider
            #default="{ errors }"
            name="No. Handphone"
            rules="required"
          >
            <b-form-group
              label="No. Handphone"
              label-for="No. Handphone"
            >
              <b-form-input
                id="number"
                v-model="number"
                placeholder="Input No. Handphone"
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
            <div v-if="gantiFile == false">
              <div
                class="fileSurat"
              >
                <div
                  class="open-file"
                  @click="openFile(fileUrl)"
                >
                  <feather-icon
                    icon="FileIcon"
                    size="56"
                  />
                  <h5 class="ml-1">
                    Open File
                    <span> {{ fileName }} </span>
                  </h5>
                </div>
              </div>

              <b-button
                v-show="$route.name === 'edit-permintaan-data'"
                v-model="gantiFile"
                variant="outline-primary"
                class="bg-gradient-primary mt-1 ml-1"
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
                ref="file"
                v-model="file"
                type="file"
                placeholder="Input File Surat"
                drop-placeholder="Drop file here..."
                multiple="multiple"
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
          <b-row
            class="match-height mt-2"
          >
            <b-col md="12">
              <b-form-group
                label="Konfirmasi"
              >
                <v-select
                  v-model="selectedKonfirmasi"
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                  label="text"
                  multiple
                  placeholder="Pilih Divisi"
                  :options="options"
                  :disabled="$route.name !== 'edit-permintaan-data'"
                />
              </b-form-group>
            </b-col>
          </b-row>
        </b-col>
        <b-col md="6">
          <label for="textarea-default">Data Yang Diminta</label>
          <b-form-textarea
            id="textarea-default"
            v-model="requestedData"
            placeholder="Textarea"
            rows="3"
          />
        </b-col>
      </b-row>

      <b-button
        v-show="$route.name === 'edit-permintaan-data'"
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

    <b-card-code
      :class="$route.name == 'detail-suratkeluar' ? 'detail-dispo' : ''"
      title="Status Permintaan Data"
    >
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
              v-model="status"
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
              v-model="note"
              placeholder="Textarea"
              rows="3"
            />
          </b-form-group>

          <b-button
            v-show="$route.name !== 'detail-suratkeluar' && jabatan === 'authorized'"
            variant="outline-primary"
            class="bg-gradient-primary mt-2"
            style="width: 100px;"
            type="submit"
            @click.prevent="validationForm"
          >
            <span class="align-middle">Validasi</span>
          </b-button>
        </b-col>
        <b-col
          offset-md="1"
          md="7"
        >
          <div
            v-for="option in activity"
            :key="option.id"
            class="tanggapan2"
          >
            <div class="avatar">
              <img :src="require('@/assets/images/icons/user.png')">
            </div>
            <div class="text">
              <h2> {{ option.name }} </h2>
              <h4> {{ option.time }}  </h4>
              <h3> {{ option.text }} </h3>
            </div>
          </div>
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
  BButton, BRow, BCol, BFormFile, BFormTags, BFormCheckboxGroup, BFormTextarea, BFormCheckbox,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { required, email } from '@validations'
import axios from '@axios'
import useJwt from '@/auth/jwt/useJwt'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
// import dayjs from 'dayjs'

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
    ToastificationContent,
    BDropdownItem,
    BButton,
    BFormTags,
    BFormCheckboxGroup,
    BFormTextarea,
    vSelect,
    BFormCheckbox,
  },
  data() {
    return {
      NoSurat: '',
      instansi: '',
      name: '',
      number: '',
      requestedData: '',
      file: [],
      fileName: '',
      fileUrl: '',
      selectedKonfirmasi: '',
      gantiFile: false,
      options: [
        { item: '', name: '' },
      ],
      status: '',
      optionsStatus: [
        { value: '', text: 'Pilih Status' },
        { value: 'Process', text: 'Proses' },
        { value: 'Approve', text: 'Disetujui' },
        { value: 'Reject', text: 'Ditolak' },
      ],
    }
  },
  created() {
    if (JSON.parse(localStorage.getItem('permission')).find(e => e === 'SIAP.Disposition.Level.Z')) {
      this.JabatanName = 'authorized'
    } else {
      this.jabatan = 'unauthorized'
    }
  },
  mounted() {
    this.getDetail()
    this.getConfirm()
  },
  methods: {
    async fileChange(e) {
      const formData = new FormData()
      e.target.files.forEach(file => {
        formData.append('files[]', file)
      })
      const { data } = await axios.post('/api/v1/file/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          token: localStorage.getItem(useJwt.jwtConfig.storageTokenKeyName),
          'content-type': 'multipart/form-data; boundary=<calculated when request is sent>',
        },
      })
      this.fileName = data
    },

    async getDetail() {
      const param = Number(this.$route.params.id)
      // const roleName = JSON.parse(localStorage.getItem('userData'))
      const { data } = await axios.get(`/api/v1/siap/requestdata/inbox/${param}`,
        {
          headers:
        { token: localStorage.getItem(useJwt.jwtConfig.storageTokenKeyName) },
        })

      this.instansi = data.request_data.agency
      this.requestedData = data.request_data.desc
      this.name = data.request_data.requester
      this.number = data.request_data.phone
      this.fileName = data.request_data.file_original.fullname
      this.fileUrl = data.request_data.file_original.url

      // this.NoSurat = data.disposition.code
      // const date = dayjs(data.disposition.dateline).format('DD-MM-YYYY')
      // this.optionsDeadline.push({ text: date, value: '' })
      // this.Perihal = data.disposition.title
      // this.dispoID = data.disposition.id
      // this.Kategori = data.disposition.category.name
      // this.Pengirim = data.disposition.from
      // this.Deskripsi = data.disposition.desc
      // this.Catatan = data.disposition.note
      // this.userRole = roleName.role.name
      // this.Jabatan = data.user.role_name
      // this.Komentar1 = data.decision.comment
      // this.Komentar1ID = data.decision.id
      // this.Komentar1_time = dayjs(data.decision.updated_at).format('DD-MM-YYYY - HH:mm')
      // this.Komentar1Status = data.decision.comment === null
      // this.file = data.disposition.file
      // this.Komentar = data.responders.map(e => ({
      //   id: e.user_id,
      //   nama: e.role_name,
      //   komentar: e.comment,
      //   commentID: e.id,
      //   status: e.comment !== null,
      //   time: dayjs(e.updated_at).format('DD-MM-YYYY - HH:mm'),
      // }))
      // this.selected = data.responders.map(e => ({ value: e.user_id, text: e.role_name }))
      // this.selectedKeputusan.push({ text: data.decision.role_name, value: data.decision.user_id })
      // this.selectedViewers = data.supervisors.map(e => ({ value: e.id, text: e.role_name }))
      // // this.optionsResponder.push(data.responders.map(e => ({ value: e.role_id, text: e.role_name })))
      // this.privates = data.disposition.private !== 0
      // this.selectedPerintah = data.receiver.id === null ? { value: '', text: 'Pilih Tujuan' } : { value: data.receiver.id, text: data.receiver.role_name }
      // // this.options = data.disposition.forward_dispositions.map(e => ({ item: e.role_id, name: e.role_name }))
      // // this.options.push(data.disposition.forward_dispositions.map(e => ({ item: e.role_id, name: e.role_name })))
      // this.tags = data.disposition.tags.map(e => (e.name))
      //   .catch(error => {
      //     console.log(error)
      //   })
    },

    validationForm() {
      this.$refs.simpleRules.validate().then(success => {
        if (success) {
          this.addRequest()
        }
      })
    },

    async addRequest() {
      await axios.post('api/v1/siap/requestdata/add', {
        requester: this.name,
        agency: this.instansi,
        phone: this.number,
        desc: this.requestedData,
        file_id: this.fileName[0].id,
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
          window.location.href = `detail-disposisi/${response.data.data.id}`
        })
        .catch(error => {
          console.log(error.response)
          this.$toast({
            component: ToastificationContent,
            props: {
              title: 'Error',
              icon: 'InfoIcon',
              text: error.response.data.error.errors.map(e => (e.message)),
              variant: 'danger',
            },
          },
          {
            position: 'bottom-right',
          })
        })
    },

    openFile(e) {
      window.open(e, '_blank')
    },

    goEdit() {
      window.location.href = `/disposisi/edit-disposisi/${this.$route.params.id}`
    },

    toggleFile() {
      if (this.gantiFile === false) {
        this.gantiFile = true
      } else {
        this.gantiFile = false
      }
    },

    async getConfirm() {
      const { data } = await axios.get('api/v1/siap/requestdata/confirmers',
        {
          headers:
        { token: localStorage.getItem(useJwt.jwtConfig.storageTokenKeyName) },
        })

      this.options = data.map(e => ({ value: e.id, text: e.name }))
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
.detail{
  .form-control, .custom-select{
    border: unset;
    border-bottom: 1px solid #d8d6de;
    border-radius: 0;
    pointer-events: none;
  }
}
.fileSurat{
   display: flex;
  justify-content: space-between;
  align-items: center;
  span{
    color: #a6a6a6;
    display: block;
    margin-top: 5px;
    font-size: 12px;
  }
}
.open-file{
  display: flex;
  cursor: pointer;
  align-items: center;
  width: 100%;
  padding: 10px;
  border-radius: 14px;
  transition: background-color 0.5s ease;
  &:hover{
    background: #efefef;
  }
}
</style>
