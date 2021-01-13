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
      state.myrouter = ll
    }
 }
