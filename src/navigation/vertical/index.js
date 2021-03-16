export default [
  {
    title: 'Disposisi',
    route: 'Disposisi',
    icon: 'CheckSquareIcon',
    children: [
      {
        title: 'Proses Disposisi',
        route: 'proses-disposisi',
      },
      {
        title: 'Selesai',
        route: 'selesai',
      },
    ],
  },
  {
    title: 'Surat Keluar',
    route: 'Surat Keluar',
    icon: 'MailIcon',
    children: [
      {
        title: 'Tulis Surat',
        route: 'dashboard-ecommerce',
      },
      {
        title: 'Proses Pengajuan',
        route: 'dashboard-analytics',
      },
      {
        title: 'Daftar Surat Keluar',
        route: 'Daftar Surat Keluar',
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
        route: 'dashboard-ecommerce',
      },
      {
        title: 'Daftar Permintaan',
        route: 'dashboard-analytics',
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
  {
    title: 'Second Page',
    route: 'second-page',
    icon: 'FileIcon',
  },
]
