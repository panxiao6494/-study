import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      //使用路由缓存
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/vuex",
      name: "vuex",
      //使用路由缓存
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Vuex.vue")
    }
  ]
});
