// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引用VueRouter请求数据
import VueRouter from 'vue-resource'
Vue.use(VueRouter)

//引入mint Ui的css 和 插件
import Mint from 'mint-ui';
Vue.use(Mint);
import 'mint-ui/lib/style.css'
//请求数据

import VueResource from 'vue-resource';
Vue.use(VueResource);

import Vuex from 'vuex'
import store from './store/store'
Vue.use(Vuex)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
