// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 引入路由 进行挂载
import router from './router/router.js'

Vue.config.productionTip = false

import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'

import './assets/css/common.css'

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
