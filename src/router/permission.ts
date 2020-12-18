import router from "./index";
import store from "../store/index";

// 路由守卫
router.beforeEach((to, from, next) => {
  if (to.matched.some(res => res.meta.isLogin)) {
    //判断是否需要登录
    store.getters['isLogin'].then((res) => {
      if (res) {
        next();
      } else {
        next({
          path: "/login",
          query: {
            redirect: to.fullPath
          }
        });
      }
    })
  } else {
    next();
  }
});

export default router;
