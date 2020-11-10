import Vue from "vue";

// import store from "./store"; // 这里引用会报错store已经定义了，vuecli3原先的模板会默认使用，发现不引用这个就OK
// import router from "./router";
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
  // store,
  // router,
  render: h => h(App)
}).$mount("#app");
