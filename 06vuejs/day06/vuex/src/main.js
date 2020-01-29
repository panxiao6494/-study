import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//npm run serve启动页面
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
