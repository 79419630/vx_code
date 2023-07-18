import Vue from "vue";
import VueRouter from "vue-router";
import home from "../views/Home.vue";
import RegisterUser from "@/pages/RegisterUser.vue";
import User from "@/pages/User.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: home,
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/RegisterUser",
    name: "RegisterUser",
    component: RegisterUser,
    component: () => import("../pages/RegisterUser.vue"),
  },
  {
    path: "/user",
    name: "Uesr",
    component: User,
    component: () => import("../pages/User.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
