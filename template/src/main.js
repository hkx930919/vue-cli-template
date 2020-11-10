import Vue from "vue";

import store from "./store";
import router from "./router";
import App from "./App.vue";
import "@/styles/index.less";

Vue.config.errorHandler = (error, vm, info) => {
  console.error("抛出全局异常");
  console.error(vm);
  console.error(error);
  console.error(info);
};
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
