<template>
  <validation-observer ref="simpleRules">
    <b-card-code title="Tulis Pengajuan">
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
          <validation-provider
            #default="{ errors }"
            name="Name"
            rules="required"
          >
            <b-form-group
              label="File Surat"
              label-for="FileSurat"
            >
              <!-- Styled -->
              <b-form-file
                id="FileSurat"
                ref="file"
                v-model="file"
                type="file"
                placeholder="Input File Surat"
                drop-placeholder="Drop file here..."
                @change="fileChange"
              />
            </b-form-group>
            <small class="text-danger">{{ errors[0] }}</small>
          </validation-provider>
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
  BButton, BRow, BCol, BFormFile, BFormTags, BFormCheckboxGroup, BFormTextarea, BFormCheckbox,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { required, email } from '@validations'
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
      selectedKonfirmasi: '',
      options: [
        { item: '', name: '' },
      ],
    }
  },
  mounted() {
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
</style>
