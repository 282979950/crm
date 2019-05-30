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
            path: '/business/userInfo',
            name: 'userInfo',
            component: './Business/UserInfo',
          },
          {
            path: '/business/payment',
            name: 'payment',
            component: './Business/Payment',
          },
          {
            path: '/business/loadGas',
            name: 'loadGas',
            component: './Business/LoadGas',
          },
          {
            path: '/business/mechanicalUser',
            name: 'mechanicalUser',
            component: './Business/MechanicalUser',
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
