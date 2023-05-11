import appMiddleware from '@/middleware/appMiddleware'
export default {
  middleware: [appMiddleware],
  router: {
    prefix: '',
  },
  member: {
    //修改资料菜单
    menu: [
      {
        routeName: 'detail',
        title: '资料修改',
      },
      {
        routeName: 'detail.password',
        title: '修改密码',
      },
    ],
  },
  user: {
    //顶部头像下拉菜单项
    avatarMenu: [
      {
        routeName: RouteEnum.ADMIN,
        title: '后台管理',
      },
      {
        routeName: RouteEnum.HOME,
        title: '网站首页',
      },
    ],
  },
}