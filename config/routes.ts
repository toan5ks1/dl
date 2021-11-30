export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: 'Task',
    icon: 'OrderedList',
    path: '/task',
    component: './Task',
  },
  {
    name: 'Dashboard',
    icon: 'fund',
    path: '/dashboard',
    component: './Dashboard',
  },
  {
    name: 'Wallets',
    icon: 'wallet',
    path: '/wallets',
    component: './Wallets',
  },
  {
    name: 'Contact',
    icon: 'team',
    path: '/contact',
    component: './Contact',
  },
  {
    path: '/',
    redirect: '/task',
  },
  {
    component: './404',
  },
];
