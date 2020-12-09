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
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/sysConfig/User.vue')
  },
  {
    path: '/organization',
    name: 'organization',
    component: () => import('../views/sysConfig/Organization.vue')
  },
  {
    path: '/dictionary',
    name: 'dictionary',
    component: () => import('../views/sysConfig/Dictionary.vue')
  },
  {
    path: '/function',
    name: 'function',
    component: () => import('../views/sysConfig/Function.vue')
  },
  {
    path: '/lawyer',
    name: 'lawyer',
    component: () => import('../views/userInfo/Lawyer.vue')
  },
  {
    path: '/person',
    name: 'person',
    component: () => import('../views/userInfo/Person.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
