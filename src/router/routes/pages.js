export default [
  {
    path: '/login',
    name: 'auth-login',
    component: () => import('@/views/Login.vue'),
    meta: {
      layout: 'full',
      resource: 'Auth',
      redirectIfLoggedIn: true,
    },
  },
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    meta: {
      pageTitle: 'Home',
      breadcrumb: [
        {
          text: 'Home',
          active: true,
        },
      ],
    },
  },
  {
    path: '/second-page',
    name: 'second-page',
    component: () => import('@/views/SecondPage.vue'),
    meta: {
      pageTitle: 'Second Page',
      breadcrumb: [
        {
          text: 'Second Page',
          active: true,
        },
      ],
    },
  },

  {
    path: '/disposisi/proses-disposisi',
    name: 'proses-disposisi',
    component: () => import('@/views/pages/Disposisi/Proses.vue'),
    meta: {
      pageTitle: 'Proses Disposisi',
      breadcrumb: [
        {
          text: 'Proses Disposisi',
          active: true,
        },
      ],
    },
  },
  {
    path: '/disposisi/tambah-disposisi',
    name: 'tambah-disposisi',
    component: () => import('@/views/pages/Disposisi/AddDisposisi.vue'),
    meta: {
      pageTitle: 'Tambah Disposisi',
      breadcrumb: [
        {
          text: 'Tambah Disposisi',
          active: true,
        },
      ],
    },
  },
  {
    path: '/disposisi/edit-disposisi/:id',
    name: 'edit-disposisi',
    component: () => import('@/views/pages/Disposisi/EditDisposisi.vue'),
    meta: {
      pageTitle: 'Edit Disposisi',
      breadcrumb: [
        {
          text: 'Edit Disposisi',
          active: true,
        },
      ],
    },
    beforeEnter(to, from, next) {
      // if (JSON.parse(localStorage.getItem('permission')).find(e => e !== 'SIAP.Disposition.Level.Z') === 'SIAP.Disposition.Level.Z') {
      if (JSON.parse(localStorage.getItem('userData')).name === 'Staff SE') {
        next()
      } else if (JSON.parse(localStorage.getItem('userData')).name === 'Super Admin') {
        next()
      } else {
        next('/disposisi/proses-disposisi')
      }
    },
  },
  {
    path: '/disposisi/detail-disposisi/:id',
    name: 'detail-disposisi',
    component: () => import('@/views/pages/Disposisi/EditDisposisi.vue'),
    meta: {
      pageTitle: 'Detail Disposisi',
      breadcrumb: [
        {
          text: 'Detail Disposisi',
          active: true,
        },
      ],
    },
  },
  {
    path: '/disposisi/selesai',
    name: 'selesai',
    component: () => import('@/views/pages/Disposisi/Selesai.vue'),
    meta: {
      pageTitle: 'Selesai',
      breadcrumb: [
        {
          text: 'Selesai',
          active: true,
        },
      ],
    },
  },
  {
    path: '/disposisi/perintah',
    name: 'perintah-disposisi',
    component: () => import('@/views/pages/Disposisi/Perintah.vue'),
    meta: {
      pageTitle: 'Perintah Disposisi',
      breadcrumb: [
        {
          text: 'Perintah Disposisi',
          active: true,
        },
      ],
    },
  },
  {
    path: '/surat-keluar/tulis',
    name: 'surat-keluar-tulis',
    component: () => import('@/views/pages/SuratKeluar/TulisSurat.vue'),
    meta: {
      pageTitle: 'Tulis Surat Keluar',
      breadcrumb: [
        {
          text: 'Tulis Surat Keluar',
          active: true,
        },
      ],
    },
  },
  {
    path: '/surat-keluar/proses',
    name: 'surat-keluar-proses',
    component: () => import('@/views/pages/SuratKeluar/ProsesSurat.vue'),
    meta: {
      pageTitle: 'Proses Surat Keluar',
      breadcrumb: [
        {
          text: 'Proses Surat Keluar',
          active: true,
        },
      ],
    },
  },
  {
    path: '/surat-keluar/edit-suratkeluar/:id',
    name: 'edit-suratkeluar',
    component: () => import('@/views/pages/SuratKeluar/EditSurat.vue'),
    meta: {
      pageTitle: 'Edit Surat Keluar',
      breadcrumb: [
        {
          text: 'Edit Surat Keluar',
          active: true,
        },
      ],
    },
  },
  {
    path: '/surat-keluar/detail-suratkeluar/:id',
    name: 'detail-suratkeluar',
    component: () => import('@/views/pages/SuratKeluar/EditSurat.vue'),
    meta: {
      pageTitle: 'Detail Surat Keluar',
      breadcrumb: [
        {
          text: 'Detsil Surat Keluar',
          active: true,
        },
      ],
    },
  },
  {
    path: '/surat-keluar/daftar',
    name: 'surat-keluar-daftar',
    component: () => import('@/views/pages/SuratKeluar/DaftarSurat.vue'),
    meta: {
      pageTitle: 'Daftar Surat Keluar',
      breadcrumb: [
        {
          text: 'Daftar Surat Keluar',
          active: true,
        },
      ],
    },
  },
  {
    path: '/permintaan-data/pengajuan',
    name: 'permintaan-data-pengajuan',
    component: () => import('@/views/pages/PermintaanData/Pengajuan.vue'),
    meta: {
      pageTitle: 'Pengajuan Permintaan Data',
      breadcrumb: [
        {
          text: 'Pengajuan Permintaan Data',
          active: true,
        },
      ],
    },
  },
  {
    path: '/permintaan-data/daftar',
    name: 'daftar-permintaan-data',
    component: () => import('@/views/pages/PermintaanData/Daftar.vue'),
    meta: {
      pageTitle: 'Daftar Permintaan Data',
      breadcrumb: [
        {
          text: 'Daftar Permintaan Data',
          active: true,
        },
      ],
    },
  },
  {
    path: '/permintaan-data/edit/:id',
    name: 'edit-permintaan-data',
    component: () => import('@/views/pages/PermintaanData/Edit.vue'),
    meta: {
      pageTitle: 'Edit Permintaan Data',
      breadcrumb: [
        {
          text: 'Edit Permintaan Data',
          active: true,
        },
      ],
    },
  },
  {
    path: '/permintaan-data/detail/:id',
    name: 'detail-permintaan-data',
    component: () => import('@/views/pages/PermintaanData/Edit.vue'),
    meta: {
      pageTitle: 'Detail Permintaan Data',
      breadcrumb: [
        {
          text: 'Detail Permintaan Data',
          active: true,
        },
      ],
    },
  },
]
