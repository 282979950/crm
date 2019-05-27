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
            path: '/business/chooseService',
            name: 'chooseService',
            component: './Business/ChooseService',
          },
          {
            path: '/business/userNoInput',
            name: 'userNoInput',
            component: './Business/userNoInput',
          },
          {
            path: '/business/machineMeterRecharge',
            name: 'machineMeterRecharge',
            component: './Business/MachineMeterRecharge',
          }
        ],
      },
      {
        component: '404',
      },
    ],
  },
];
