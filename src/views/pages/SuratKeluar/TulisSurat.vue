<template>
  <validation-observer ref="simpleRules">
    <b-card-code title="Tulis Surat Masuk">
      <b-row class="match-height">
        <!-- <b-col md="6">
          <validation-provider
            #default="{ errors }"
            name="Judul"
            rules="required"
          >
            <b-form-group
              label="Judul"
              label-for="Judul"
            >
              <b-form-input
                id="Judul"
                v-model="title"
                placeholder="Input Judul"
              />
            </b-form-group>
            <small class="text-danger">{{ errors[0] }}</small>
          </validation-provider>
        </b-col> -->
        <b-col md="12">
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
        <b-col md="12 mb-3">
          <b-form-group
            label="Isi surat"
          >
            <quill-editor
              v-model="original_letter"
              :options="snowOption"
              style="height: 250px"
            />
          </b-form-group>
        </b-col>
      </b-row>

      <b-button
        variant="outline-primary"
        class="bg-gradient-primary mt-2"
        type="submit"
        @click.prevent="validationForm"
      >
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
import { quillEditor } from 'vue-quill-editor'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

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
    ToastificationContent,
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
      original_letter: '',
      optionsStatus: [
        { value: '', text: 'Proses' },
        { value: 'OneDay', text: 'Disetujui' },
        { value: 'TwoDay', text: 'Ditolak' },
      ],
    }
  },
  methods: {
    validationForm() {
      this.$refs.simpleRules.validate().then(success => {
        if (success) {
          this.addDispo()
        }
      })
    },

    async addDispo() {
      await axios.post('api/v1/siap/outgoingletter/add', {
        title: this.Perihal,
        to: this.to,
        agency: this.agency,
        cat_name: this.cat_name,
        original_letter: this.original_letter,
        // note: this.Perihal,
        address: this.address,
      }, {
        headers:
        { token: localStorage.getItem(useJwt.jwtConfig.storageTokenKeyName) },
      })
        .then(response => {
          // console.log(response)
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
          window.location.href = `detail-suratkeluar/${response.data.data.id}`
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
