import Vue from 'vue';
import Router from 'vue-router';
import Component from 'vue-class-component';

Vue.use(Router);

Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate',
]);

export const constRouteMap = [
  {
    path: 'serviceManage',
    name: 'serviceManage',
    meta: { title: '服务管理' },
    component: () => import(/* webpackChunkName: "manageService" */ './views/ManageService.vue'),
  },
  {
    path: 'userManage',
    name: 'userManage',
    meta: { title: '用户管理' },
    component: () => import(/* webpackChunkName: "manageUser" */ './views/ManageUser.vue'),
  },
  {
    path: 'changeConfig',
    name: 'changeConfig',
    meta: { title: '更改配置' },
    component: () => import(/* webpackChunkName: "changeConfig" */ './views/ChangeConfig.vue'),
  },
  {
    path: 'globalFunc',
    name: 'globalFunc',
    meta: { title: '全局功能' },
    component: () => import(/* webpackChunkName: "globalFunc" */ './views/GlobalFunc.vue'),
  },
  {
    path: 'UpdateV2ray',
    name: 'UpdateV2ray',
    meta: { title: '更新V2Ray' },
    component: () => import(/* webpackChunkName: "updateV2ray" */ './views/UpdateV2ray.vue'),
  },
  {
    path: 'clientConfig',
    name: 'clientConfig',
    meta: { title: '客户端配置' },
    component: () => import(/* webpackChunkName: "clientConfig" */ './views/ClientConfig.vue'),
  },

];
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/serviceMange',
      component: () => import(/* webpackChunkName: "clientConfig" */ './views/Layout.vue'),
      children: [...constRouteMap],
    },
    {
      path: '*',
      redirect: '/serviceManage',
    },
  ],
});
