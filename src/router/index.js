import Vue from "vue";
import VueRouter from "vue-router";
import homeLogin from "../views/HomeLogin.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: homeLogin,
    component: () => import("../views/HomeLogin.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
