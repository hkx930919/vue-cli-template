import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/views/home/index.vue"),
    children: [
      {
        path: "test",
        name: "test",
        component: () => import("@/views/test/index.vue"),
        meta: {
          keepAlive: true,
          deepth: 1,
          name: "test"
        }
      }
    ]
  }
];

export default new VueRouter({
  mode: "hash",
  routes
});
