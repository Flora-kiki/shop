// 引入
import Vue from 'vue'

import VueRouter from 'vue-router'

import Login from '../components/login/login.vue'
import Home from '../components/home/home.vue'
// 在模块化工程中vue.use()
Vue.use(VueRouter)


const router = new VueRouter({
  routes: [
    // 重定向
    // eslint-disable-next-line
    { path: '/', redirect: '/login' },
    { path: '/login', name: 'login', component: Login },
    { path: '/home', name: 'home', component: Home }
  ]
})

// 导出
export default router
