import { UserInfo } from "@/model/UserInfo"
export default { 
    login (state, userInfo: UserInfo) {
        state.userInfo = userInfo
    },
    toMenu (state, gnflTree) {
        state.gnflTree = gnflTree
    },
    toRouter(state, list) {
      const ll = list.map(item => {
        return {
          path: item['gndz'],
          name: item['gndz'],
          meta: {
            isLogin: true
          },
          component: () => import(`../views${item['gndz']}.vue`)
        }
      })
      const menu = {
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
              isLogin: true
            },
            component: () => import('../views/home/Home.vue')
          },
          ...ll
        ]
      }
      state.myrouter = menu
    }
 }
