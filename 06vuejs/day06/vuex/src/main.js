import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuex from "vuex";
Vue.config.productionTip = false;

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
//npm run serve启动页面
Vue.use(ElementUI);
Vue.use(vuex);
var store = new vuex.Store({
  //store对象
  state: {
    show: true,
    num: 2,
    yy: "yy"
  },
  mutations: {
    changeState(state, payload) {
      state.show = !state.show;
      console.log(payload);
    },
    set(state) {
      setTimeout(() => {
        state.num++;
      }, 1200);
    },
    change(state) {
      state.yy = "zz";
    }
  },
  actions: {
    setFun(context) {
      context.commit("set");
    }
  }
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
