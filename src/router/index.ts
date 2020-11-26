import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home/Home.vue')
  },
  {
    path: '/login',
    name: 'me',
    component: () => import('../views/login/Login.vue')
  },
  {
    path: '/sendQuery',
    name: 'sendQuery',
    component: () => import('../views/querySystem/SendQuery.vue')
  },
  {
    path: '/sendStatistics',
    name: 'sendStatistics',
    component: () => import('../views/querySystem/SendStatistics.vue')
  },
  {
    path: '/leadingIn',
    name: 'leadingIn',
    component: () => import('../views/querySystem/LeadingIn.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
