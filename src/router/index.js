import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home/Index'

Vue.use(Router)
let routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {}
  }
]

const router = new Router({
  mode: 'history',
  routes: routes,
})

// router.beforeEach((to, from, next)=> {
  // If login, can visit panel.
  // if (to.meta.requiresAuth && Store.state.BlockChain.UserInfo.authenticated) {
  //   return next({'name': 'Panel'})
  // }

  // If login, can't visit login.
  // if (to.meta.requiresGuest && Store.state.BlockChain.UserInfo.authenticated) {
  //   return next({'name': 'Home'})
  // }
  //
  // next()
// })

export default router
