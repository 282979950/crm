export default [
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    routes: [
      // dashboard
      { path: '/', redirect: '/business/chooseService'},
      {
        path: '/business',
        name: 'business',
        icon: 'business',
        routes: [
          {
            path: '/business/chooseService',
            name: 'chooseService',
            component: './Business/ChooseService',
          },
          {
            path: '/business/userQuery',
            name: 'userQuery',
            component: './Business/UserQuery',
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
