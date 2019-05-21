export default [
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    routes: [
      // dashboard
      { path: '/', redirect: '/business/welcome'},
      {
        path: '/business',
        name: 'business',
        icon: 'business',
        routes: [
          {
            path: '/business/welcome',
            name: 'welcome',
            component: './Business/Welcome',
          },
          {
            path: '/business/userNoInput',
            name: 'userNoInput',
            component: './Business/userNoInput',
          },
          {
            path: '/business/userInfo',
            name: 'userInfo',
            component: './Business/userInfo',
          }
        ],
      },
      {
        component: '404',
      },
    ],
  },
];
