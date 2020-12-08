import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/Login.vue')
  },
  {
    path: '/homePage',
    name: 'homePage',
    component: () => import('../views/home/Home.vue')
  },
  {
    path: '/CaseInfoImport',
    name: 'CaseInfoImport',
    component: () => import('../views/CaseInfoOpen/CaseInfoImport.vue')
  },
  {
    path: '/AgentInfoImport',
    name: 'AgentInfoImport',
    component: () => import('../views/CaseInfoOpen/AgentInfoImport.vue')
  },
  {
    path: '/AgentBind',
    name: 'AgentBind',
    component: () => import('../views/CaseInfoOpen/AgentBind.vue')
  },
  {
    path: '/localSMS',
    name: 'localSMS',
    component: () => import('../views/smsOperation/localSMS.vue')
  },
  {
    path: '/customSMS',
    name: 'customSMS',
    component: () => import('../views/smsOperation/customSMS.vue')
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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
