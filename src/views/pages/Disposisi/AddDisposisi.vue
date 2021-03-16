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
              <b-form-input
                id="Deadline"
                v-model="Deadline"
                placeholder="3 - Hari"
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
        </b-col>
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
            />
          </b-form-group>
        </b-col>
      </b-row>

      <b-row class="match-height">
        <b-col md="6">
          <label for="textarea-default">Deskripsi</label>
          <b-form-textarea
            id="textarea-default"
            placeholder="Textarea"
            rows="3"
          />
        </b-col>
        <b-col md="6">
          <label for="textarea-default">Catatan</label>
          <b-form-textarea
            id="textarea-default"
            placeholder="Textarea"
            rows="3"
          />
        </b-col>
      </b-row>

      <b-row class="match-height">
        <b-col md="6">
          <validation-provider
            #default="{ errors }"
            name="FileSurat"
            rules="required"
          >
            <b-form-group
              label="Divisi/ Bagian/Unit Terkait"
              label-for="divisi"
            >
              <label for="tags-basic">Tekan Enter untuk tag baru</label>
              <b-form-tags
                v-model="value"
                input-id="tags-basic"
                placeholder="Tambah Tag"
              />
            </b-form-group>
            <small class="text-danger">{{ errors[0] }}</small>
          </validation-provider>
        </b-col>
      </b-row>

      <b-row
        class="match-height"
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
      file: null,
      value: ['apple', 'orange'],
      selected: [],
      options: [
        { item: 'KabagProduksi', name: 'Kabag Produksi' },
        { item: 'ManajerUmum', name: 'Manajer Umum' },
        { item: 'ManajerDivisi', name: 'Manajer Divisi Inti' },
        { item: 'KabagKeuangan', name: 'Kabag Keuangan' },
      ],
    }
  },
  methods: {
    validationForm() {
      this.$refs.simpleRules.validate().then(success => {
        if (success) {
          // eslint-disable-next-line
          alert('form submitted!')
        }
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
