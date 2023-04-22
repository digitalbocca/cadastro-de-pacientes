import { createRouter, createWebHistory } from 'vue-router'

import beforeEach from './before-each'

import Home from '@/views/home-view'
import Login from '@/views/login-view'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

router.beforeEach(beforeEach)

export default router
