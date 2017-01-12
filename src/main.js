/**
 * @Author: yafee
 * @Date:   2016-12-29T20:50:24+08:00
 * @Last modified by:   yafee
 * @Last modified time: 2017-01-06T17:31:31+08:00
 */

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'assets/css/bootstrap.min.css';
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import routes from './router.js';

Vue.use(VueRouter);
const router = new VueRouter({
  routes:routes
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});
