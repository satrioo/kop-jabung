export default [
  {
    title: 'Disposisi',
    route: 'Disposisi',
    icon: 'CheckSquareIcon',
    children: [
      {
        title: 'Tambah Disposisi',
        route: 'tambah-disposisi',
      },
      {
        title: 'Proses Disposisi',
        route: 'proses-disposisi',
      },
      {
        title: 'Selesai',
        route: 'selesai',
      },
      // {
      //   title: 'Perintah Disposisi',
      //   route: 'perintah-disposisi',
      // },
    ],
  },
  {
    title: 'Surat Keluar',
    route: 'Surat Keluar',
    icon: 'MailIcon',
    children: [
      {
        title: 'Tulis Surat',
        route: 'surat-keluar-tulis',
      },
      {
        title: 'Proses Pengajuan',
        route: 'surat-keluar-proses',
      },
      {
        title: 'Daftar Surat Keluar',
        route: 'surat-keluar-daftar',
      },
    ],
  },
  {
    title: 'Permintaan Data',
    route: 'Permintaan Data',
    icon: 'SaveIcon',
    children: [
      {
        title: 'Proses Pengajuan',
        route: 'permintaan-data-pengajuan',
      },
      {
        title: 'Daftar Permintaan',
        route: 'daftar-permintaan-data',
      },
    ],
  },
  {
    title: 'Keluhan',
    route: 'Permintaan Data',
    icon: 'FeatherIcon',
    children: [
      {
        title: 'Daftar Keluhan',
        route: 'dashboard-ecommerce',
      },
      {
        title: 'Keluhan Selesai',
        route: 'dashboard-analytics',
      },
      {
        title: 'Konflik',
        route: 'dashboard-ecommerce',
      },
      {
        title: 'Konflik Selesai',
        route: 'dashboard-analytics',
      },
    ],
  },
  {
    title: 'Home',
    route: 'home',
    icon: 'HomeIcon',
  },
  // {
  //   title: 'Second Page',
  //   route: 'second-page',
  //   icon: 'FileIcon',
  // },
]
