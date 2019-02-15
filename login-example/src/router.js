import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      },
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: Login
    }
  ]
});
