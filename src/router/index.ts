import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/login/Login.vue'),
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/Login.vue')
  },
  {
    path: '/menu',
    name: 'menu',
    meta: {
      isLogin: true
    },
    component: () => import('../components/Menu.vue'),
    children: [
      {
        path: '/',
        name: 'homePage',
        meta: {
          isLogin: true
        },
        component: () => import('../views/home/Home.vue')
      },
      {
        path: '/homePage',
        name: 'homePage',
        meta: {
          isLogin: false
        },
        component: () => import('../views/home/Home.vue')
      },
      {
        path: '/CaseInfoImport',
        name: 'CaseInfoImport',
        meta: {
          isLogin: true
        },
        component: () => import('../views/CaseInfoOpen/CaseInfoImport.vue')
      },
      {
        path: '/AgentInfoImport',
        name: 'AgentInfoImport',
        meta: {
          isLogin: true
        },
        component: () => import('../views/CaseInfoOpen/AgentInfoImport.vue')
      },
      {
        path: '/AgentBind',
        name: 'AgentBind',
        meta: {
          isLogin: true
        },
        component: () => import('../views/CaseInfoOpen/AgentBind.vue')
      },
      {
        path: '/localSMS',
        name: 'localSMS',
        meta: {
          isLogin: true
        },
        component: () => import('../views/smsOperation/localSMS.vue')
      },
      {
        path: '/customSMS',
        name: 'customSMS',
        meta: {
          isLogin: true
        },
        component: () => import('../views/smsOperation/customSMS.vue')
      },
      {
        path: '/smsTemplate',
        name: 'smsTemplate',
        meta: {
          isLogin: true
        },
        component: () => import('../views/smsTemplate/templateCategory.vue')
      },

      {
        path: '/sendQuery',
        name: 'sendQuery',
        meta: {
          isLogin: true
        },
        component: () => import('../views/querySystem/SendQuery.vue')
      },
      {
        path: '/sendStatistics',
        name: 'sendStatistics',
        meta: {
          isLogin: true
        },
        component: () => import('../views/querySystem/SendStatistics.vue')
      },
      {
        path: '/leadingIn',
        name: 'leadingIn',
        meta: {
          isLogin: true
        },
        component: () => import('../views/querySystem/LeadingIn.vue')
      },
      {
        path: '/user',
        name: 'user',
        meta: {
          isLogin: true
        },
        component: () => import('../views/sysConfig/User.vue')
      },
      {
        path: '/organization',
        name: 'organization',
        meta: {
          isLogin: true
        },
        component: () => import('../views/sysConfig/Organization.vue')
      },
      {
        path: '/dictionary',
        name: 'dictionary',
        meta: {
          isLogin: true
        },
        component: () => import('../views/sysConfig/Dictionary.vue')
      },
      {
        path: '/function',
        name: 'function',
        meta: {
          isLogin: true
        },
        component: () => import('../views/sysConfig/Function.vue')
      },
      {
        path: '/lawyer',
        name: 'lawyer',
        meta: {
          isLogin: true
        },
        component: () => import('../views/userInfo/Lawyer.vue')
      },
      {
        path: '/person',
        name: 'person',
        meta: {
          isLogin: true
        },
        component: () => import('../views/userInfo/Person.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes as RouteRecordRaw[]
})

export default router
