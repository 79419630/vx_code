import Vue from "vue";
import VueRouter from "vue-router";
import home from "../views/Home.vue";
import RegisterUser from "@/pages/RegisterUser.vue";
import User from "@/pages/User.vue";
import UserIndex from "@/pages/main/UserIndex.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: home,
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/login",
    name: "login",
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
    children: [
      {
        path: "/index",
        component: UserIndex,
        component: () => import("../pages/main/UserIndex.vue"),
      },
      {
        path: "/users/list",
        component: () => import("../pages/main/SystemManagement/UserList.vue"),
      },
      {
        path: "/users/manage",
        component: () =>
          import("../pages/main/SystemManagement/UserManage.vue"),
      },
      {
        path: "/argument",
        component: () =>
          import("../pages/main/SystemManagement/UserArgument.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
