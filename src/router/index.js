import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home'//首页
import About from '../components/About'//关于我们
import Products from '../components/Products'//产品内容页
import Store from '../components/Store'//门店

Vue.use(Router)

const routes = [
  {path: '',redirect: '/home'},
  {path: '/home',component: Home},
  {path: '/about',component: About},
  {path: '/products',component: Products},
  {path: '/store',component: Store}
]

const router = new Router({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

export default router