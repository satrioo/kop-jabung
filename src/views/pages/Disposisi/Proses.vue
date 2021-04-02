<template>
  <b-card-code title="Daftar Proses Disposisi">
    <b-link
      to="/disposisi/tambah-disposisi"
    >
      <b-button
        variant="outline-primary"
        class="bg-gradient-primary"
        style="position: absolute; right: 20px; top: 15px;"
      >
        <feather-icon
          icon="PlusIcon"
          class="mr-50"
        />
        <span class="align-middle text-light">Tambah Surat Masuk</span>
      </b-button>
    </b-link>
    <!-- search input -->
    <div class="custom-search d-flex justify-content-end">
      <b-form-group>
        <div class="d-flex align-items-center">
          <label class="mr-1">Search</label>
          <b-form-input
            v-model="searchTerm"
            placeholder="Search"
            type="text"
            class="d-inline-block"
          />
        </div>
      </b-form-group>
    </div>

    <!-- table -->
    <vue-good-table
      :columns="columns"
      :rows="dataRows"
      :rtl="direction"
      style-class="vgt-table striped"
      :search-options="{
        enabled: true,
        externalQuery: searchTerm }"
      :select-options="{
        enabled: true,
        selectOnCheckboxOnly: true, // only select when checkbox is clicked instead of the row
        selectionInfoClass: 'custom-class',
        selectionText: 'rows selected',
        clearSelectionText: 'clear',
        disableSelectInfo: true, // disable the select info panel on top
        selectAllByGroup: true, // when used in combination with a grouped table, add a checkbox in the header row to check/uncheck the entire group
      }"
      :pagination-options="{
        enabled: true,
        perPage:pageLength
      }"
    >
      <template
        slot="table-row"
        slot-scope="props"
      >

        <!-- Column: Name -->
        <span
          v-if="props.column.field === 'fullName'"
          class="text-nowrap"
        >
          <b-avatar
            :src="props.row.avatar"
            class="mx-1"
          />
          <span class="text-nowrap">{{ props.row.fullName }}</span>
        </span>

        <!-- Column: Status -->
        <span v-else-if="props.column.field === 'Status'">
          <b-badge :variant="statusVariant(props.row.Status)">
            {{ props.row.Status }}
          </b-badge>
        </span>

        <!-- Column: Action -->
        <span v-else-if="props.column.field === 'Aksi'">
          <span>
            <b-dropdown
              variant="link"
              toggle-class="text-decoration-none nopad"
              no-caret
            >
              <template v-slot:button-content>
                <feather-icon
                  icon="MoreVerticalIcon"
                  size="16"
                  class="text-body align-middle mr-25"
                />
              </template>
              <b-dropdown-item @click="editDisposisi(props.row.id)">
                <feather-icon
                  icon="Edit2Icon"
                  class="mr-50"
                />
                <span>Edit </span>
              </b-dropdown-item>
              <b-dropdown-item>
                <feather-icon
                  icon="TrashIcon"
                  class="mr-50"
                />
                <span>Delete</span>
              </b-dropdown-item>
            </b-dropdown>
          </span>
        </span>

        <!-- Column: Common -->
        <span v-else>
          {{ props.formattedRow[props.column.field] }}
        </span>
      </template>

      <!-- pagination -->
      <template
        slot="pagination-bottom"
        slot-scope="props"
      >
        <div class="d-flex justify-content-between flex-wrap">
          <div class="d-flex align-items-center mb-0 mt-1">
            <span class="text-nowrap ">
              Showing 1 to
            </span>
            <b-form-select
              v-model="pageLength"
              :options="['5','10','20','50']"
              class="mx-1"
              @input="(value)=>props.perPageChanged({currentPerPage:value})"
            />
            <span class="text-nowrap"> of {{ props.total }} entries </span>
          </div>
          <div>
            <b-pagination
              :value="1"
              :total-rows="props.total"
              :per-page="pageLength"
              first-number
              last-number
              align="right"
              prev-class="prev-item"
              next-class="next-item"
              class="mt-1 mb-0"
              @input="(value)=>props.pageChanged({currentPage:value})"
            >
              <template #prev-text>
                <feather-icon
                  icon="ChevronLeftIcon"
                  size="18"
                />
              </template>
              <template #next-text>
                <feather-icon
                  icon="ChevronRightIcon"
                  size="18"
                />
              </template>
            </b-pagination>
          </div>
        </div>
      </template>
    </vue-good-table>

    <!-- <template #code>
      {{ codeBasic }}
    </template> -->
  </b-card-code>
</template>

<script>
/* eslint-disable no-unused-vars */
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import {
  BAvatar, BBadge, BPagination, BFormGroup, BFormInput, BFormSelect, BDropdown, BDropdownItem,
  BButton, BLink,
} from 'bootstrap-vue'
import { VueGoodTable } from 'vue-good-table'
import axios from '@axios'
import useJwt from '@/auth/jwt/useJwt'
// import store from '@/store/index'
// import { codeBasic } from './code'

export default {
  components: {
    BLink,
    BCardCode,
    VueGoodTable,
    BAvatar,
    BBadge,
    BPagination,
    BFormGroup,
    BFormInput,
    BFormSelect,
    BDropdown,
    BDropdownItem,
    BButton,
  },
  data() {
    return {
      pageLength: 10,
      dir: false,
      // codeBasic,
      columns: [
        {
          label: 'No. Disposisi',
          field: 'NoDisposisi',
        },
        {
          label: 'Perihal',
          field: 'Perihal',
        },
        {
          label: 'Waktu',
          field: 'Waktu',
        },
        {
          label: 'Deadline',
          field: 'Deadline',
        },
        {
          label: 'Pengirim',
          field: 'Pengirim',
        },
        {
          label: 'Status',
          field: 'Status',
        },
        {
          label: 'Aksi',
          field: 'Aksi',
        },
      ],
      dataRows: [{
        id: '',
        NoDisposisi: '',
        Perihal: '',
        Waktu: '',
        Deadline: '',
        Pengirim: '',
        Status: '',
        Aksi: '',
      }],
      rows: [
        {
          NoDisposisi: '123123',
          Perihal: 'Aksi',
          Waktu: 'Waktu',
          salary: 'salary',
          Deadline: 'Deadline',
          Pengirim: 'Pengirim',
          Status: 'Proses',
          Aksi: '<a> asdasd </a>',
        },
      ],
      searchTerm: '',
      Status: [{
        1: 'Process',
        2: 'Proses',
        3: 'Rejected',
        4: 'Resigned',
        5: 'Applied',
      },
      {
        1: 'light-primary',
        2: 'light-success',
        3: 'light-danger',
        4: 'light-warning',
        5: 'light-info',
      }],
    }
  },
  computed: {
    statusVariant() {
      const statusColor = {
        /* eslint-disable key-spacing */
        Processe      : 'light-primary',
        Proses       : 'light-success',
        Rejected     : 'light-danger',
        Resigned     : 'light-warning',
        Process      : 'light-info',
        /* eslint-enable key-spacing */
      }

      return status => statusColor[status]
    },
  },
  mounted() {
    this.getDisposisi()
  },
  methods: {
    editDisposisi(e) {
      console.log(e)
      window.location.href = `edit-disposisi/${e}`
    },
    async getDisposisi() {
      const { data } = await axios.get('api/v1/siap/disposition/inboxs',
        {
          headers:
        { token: localStorage.getItem(useJwt.jwtConfig.storageTokenKeyName) },
        })

      this.dataRows = data.data.map(e => ({
        id: e.id,
        NoDisposisi: e.incoming_letter.code,
        Perihal: e.incoming_letter.title,
        Waktu: e.incoming_letter.date,
        Deadline: e.incoming_letter.dateline,
        Pengirim: e.incoming_letter.from,
        Status: e.incoming_letter.status_letter,
        Aksi: '',
      }))
      console.log('datarows', this.dataRows)
        .catch(error => {
          console.log(error)
        })
    },
  },
}
</script>

<style lang="scss" >
@import '@core/scss/vue/libs/vue-good-table.scss';
.nopad{
    padding: 0;
}
</style>
