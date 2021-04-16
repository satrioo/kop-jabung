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
    // beforeEnter(to, from, next) {
    //   if (JSON.parse(localStorage.getItem('userData')).role.name !== 'Staff SE') {
    //     next('/disposisi/proses-disposisi')
    //   } else {
    //     next('/disposisi/proses-disposisi2323232')
    //   }
    // },
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
    // eslint-disable-next-line no-undef
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
]
