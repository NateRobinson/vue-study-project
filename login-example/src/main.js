import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import iView from "iview";
import "iview/dist/styles/iview.css";

Vue.config.productionTip = false;

Vue.use(iView);

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    // 判断该路由是否需要登录权限
    if (localStorage.getItem("isLogin")) {
      // 通过vuex state获取当前的token是否存在
      next();
    } else {
      next({
        path: "/login"
      });
    }
  } else {
    next();
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
