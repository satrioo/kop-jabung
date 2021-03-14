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
    component: () => import('@/views/pages/Disposisi/proses.vue'),
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
]
