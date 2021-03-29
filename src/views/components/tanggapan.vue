<template>
  <div>
    <b-card-code
      title="Keputusan"
      style="margin: 0 -15px;"
    >
      <b-row class="match-height">
        <b-col md="6">
          <div class="tanggapan">
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
          </div>

          <div class="tanggapan">
            <div class="avatar">
              <img :src="require('@/assets/images/icons/user.png')">
            </div>
            <div class="input">
              <b-input-group
                append="kirim"
                @click="lala"
              >
                <b-form-input placeholder="Recipient's username" />
              </b-input-group>
            </div>
          </div>

          <b-form-group
            label="Password1231"
            label-for="h-password"
            label-cols-md="3"
          >
            <b-input-group
              append="kirim"
              @click="lala"
            >
              <b-form-input placeholder="Recipient's username" />
            </b-input-group>

          </b-form-group>
        </b-col>
      </b-row>
    </b-card-code>

  </div>

</template>

<script>
/* eslint-disable vue/no-unused-components */
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import {
  BAvatar, BBadge, BPagination, BFormGroup, BFormInput, BFormSelect, BDropdown, BDropdownItem,
  BButton, BRow, BCol, BFormFile, BFormTags, BFormCheckboxGroup, BFormTextarea, BInputGroup,
  BInputGroupPrepend, BInputGroupAppend,
} from 'bootstrap-vue'

export default {
  components: {

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
  mounted() {
    this.getDetail()
  },
  methods: {
    lala() {
      console.log('asd')
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
    width: 90px;
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
}
</style>
