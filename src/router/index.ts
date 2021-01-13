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
    path: '/test',
    name: 'test',
    component: () => import('../components/test.vue')
  },
  {
    path: '/test2',
    name: 'test2',
    component: () => import('../components/test2.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes as RouteRecordRaw[]
})

export default router
