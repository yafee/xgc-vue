/*
 * @Author: yafee
 * @Date:   2017-01-03 15:50:22
 * @Last modified by:   yafee
 * @Last modified time: 2017-01-06T17:31:37+08:00
 */
import App from './App.vue'
export default [{
  path: '/',
  component: App.components.showList,
  redirect: '/show/showList/all'
}, {
  path: '/show',
  component: App.components.show,
  children: [{
    path: 'showList',
    component: App.components.showList,
    children: [{
      path: ':id',
      component: App.components.type
    }],
    redirect: '/show/showList/all'
  }]
}, {
  path: '/show',
  component: App.components.show,
  children: [{
    path: 'center',
    component: App.components.center
  }]
}, {
  name: 'showDetail',
  path: '/show/showList/showDetail',
  component: App.components.showDetail
}, {
  name: 'myWallet',
  path: '/show/center/myWallet',
  component: App.components.myWallet
}, {
  name: 'pointRule',
  path: '/show/center/myWallet/pointRule',
  component: App.components.pointRule
}, {
  name: 'myInfo',
  path: '/show/center/myInfo',
  component: App.components.myInfo
}];
