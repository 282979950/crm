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
            path: '/business/icUserInfo',
            name: 'userInfo',
            component: './Business/ICUserInfo',
          },
          {
            path: '/business/icUserPayment',
            name: 'icUserPayment',
            component: './Business/ICUserPayment',
          },
          {
            path: '/business/loadGas',
            name: 'loadGas',
            component: './Business/LoadGas',
          },
          {
            path: '/business/mechanicalUserInfo',
            name: 'mechanicalUser',
            component: './Business/MechanicalUserInfo',
          },
          {
            path: '/business/mechanicalUserPayment',
            name: 'mechanicalUserPayment',
            component: './Business/MechanicalUserPayment',
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
