<template>
  <validation-observer ref="simpleRules">
    <b-card-code
      title="Tulis Surat Masuk"
      :class="$route.name == 'detail-suratkeluar' ? 'detail-dispo' : ''"
    >
      <b-button
        v-show="$route.name === 'detail-suratkeluar' && jabatan === 'authorized'"
        variant="outline-primary"
        class="bg-gradient-primary mt-2"
        style="position: absolute;right: 15px;top: -10px;"
        type="submit"
        @click.prevent="goEdit"
      >
        <span class="align-middle">Edit Surat Keluar</span>
      </b-button>
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
                disabled
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
                v-model="cat_name"
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
                v-model="to"
                placeholder="Input Kepada"
              />
            </b-form-group>
            <small class="text-danger">{{ errors[0] }}</small>
          </validation-provider>
        </b-col>
        <b-col md="6">
          <validation-provider
            #default="{ errors }"
            name="Alamat"
            rules="required"
          >
            <b-form-group
              label="Alamat"
              label-for="Alamat"
            >
              <b-form-input
                id="Alamat"
                v-model="address"
                placeholder="Input Alamat"
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
                v-model="agency"
                placeholder="Input Instansi"
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
        <b-col md="12 mb-3">
          <b-form-group
            label="Isi surat"
          >
            <div
              v-for="item in file"
              :key="item.id"
              class="fileSurat"
            >
              <div
                class="open-file"
                @click="openFile(item.url)"
              >
                <feather-icon
                  icon="FileIcon"
                  size="56"
                />
                <h5 class="ml-1">
                  Open File
                  <span> {{ item.fullname }} </span>
                </h5>
              </div>
            </div>

          </b-form-group>
        </b-col>
      </b-row>
    </b-card-code>

    <b-card-code
      title="Validasi Surat Masuk"
    >
      <b-form-group
        class="mb-2"
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
      </b-form-group>
    </b-card-code>

    <b-card-code
      :class="$route.name == 'detail-suratkeluar' ? 'detail-dispo' : ''"
      title="Status Surat Keluar"
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
  BButton, BRow, BCol, BFormFile, BFormTags, BFormCheckboxGroup, BFormTextarea,
} from 'bootstrap-vue'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { required, email } from '@validations'
import axios from '@axios'
import useJwt from '@/auth/jwt/useJwt'
import { quillEditor } from 'vue-quill-editor'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import dayjs from 'dayjs'
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
      cat_name: '',
      to: '',
      agency: '',
      note: '',
      address: '',
      title: '',
      Perihal: '',
      status: '',
      time: '',
      original_letter: '',
      validated_letter: '',
      activity: [],
      jabatan: '',
      optionsStatus: [
        { value: 'Process', text: 'Proses' },
        { value: 'Approve', text: 'Disetujui' },
        { value: 'Reject', text: 'Ditolak' },
      ],
    }
  },
  created() {
    if (JSON.parse(localStorage.getItem('permission')).find(e => e === 'SIAP.Disposition.Level.Z')) {
      this.jabatan = 'authorized'
    } else {
      this.jabatan = 'unauthorized'
    }
  },
  mounted() {
    this.getDetail()
    this.getActifity()
  },
  methods: {
    validationForm() {
      this.$refs.simpleRules.validate().then(success => {
        if (success) {
          this.editSurat()
        }
      })
    },

    async getDetail() {
      const param = Number(this.$route.params.id)
      const { data } = await axios.get(`api/v1/siap/outgoingletter/inbox/${param}`,
        {
          headers:
        { token: localStorage.getItem(useJwt.jwtConfig.storageTokenKeyName) },
        })

      this.NoSurat = data.code
      this.cat_name = data.category.name
      this.to = data.to
      this.agency = data.agency
      this.note = data.note
      this.time = dayjs(data.updated_at).format('DD-MM-YYYY')
      this.address = data.address
      this.title = data.title
      this.Perihal = data.title
      this.original_letter = data.original_letter
      this.validated_letter = data.validated_letter === null ? data.original_letter : data.validated_letter
      this.status = data.status_letter
      if (this.status === 'Approved') {
        this.status = 'Approve'
      } else if (this.status === 'Rejected') {
        this.status = 'Reject'
      }
      // this.status = data.map(e => ({ value: e.status, text: e.status_letter }))
      // console.log(data)
      //   .catch(error => {
      //     console.log(error)
      //   })
    },

    async getActifity() {
      const param = Number(this.$route.params.id)
      const { data } = await axios.get(`api/v1/siap/outgoingletter/activities?olid=${param}`,
        {
          headers:
        { token: localStorage.getItem(useJwt.jwtConfig.storageTokenKeyName) },
        })
      this.activity = data.map(e => ({
        name: e.user.name,
        time: dayjs(e.updated_at).format('DD-MM-YYYY - HH:mm'),
        text: e.message_id,
      }))

      // console.log(data)
      //   .catch(error => {
      //     console.log(error)
      //   })
    },

    goEdit() {
      window.location.href = `/surat-keluar/edit-suratkeluar/${this.$route.params.id}`
    },

    async editSurat() {
      const param = Number(this.$route.params.id)
      await axios.post(`api/v1/siap/outgoingletter/update/${param}`, {
        title: this.Perihal,
        to: this.to,
        agency: this.agency,
        cat_name: this.cat_name,
        original_letter: this.original_letter,
        validated_letter: this.validated_letter,
        status: this.status,
        note: this.note,
        address: this.address,
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
.tanggapan2{
  display: flex;
  align-items: center;
  justify-content: end;
  margin: 5px 0;
  .avatar{
    width: 70px;
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

.detail-dispo{
  .form-control, .custom-select{
    border: unset;
    border-bottom: 1px solid #d8d6de;
    border-radius: 0;
    pointer-events: none;
  }
}
</style>
