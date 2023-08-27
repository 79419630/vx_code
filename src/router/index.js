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
        component: () => import("../pages/main/UserIndex.vue"),
      },
      {
        path: "/systemList",
        component: () =>
          import("../pages/main/SystemManagement/SystemList.vue"),
      },
      {
        path: "/systemManage",
        component: () =>
          import("../pages/main/SystemManagement/SystemManage.vue"),
      },
      {
        path: "/systemArgument",
        component: () =>
          import("../pages/main/SystemManagement/SystemArgument.vue"),
      },
      {
        path: "/systemCode",
        component: () =>
          import("../pages/main/SystemManagement/SystemCode.vue"),
      },
      {
        path: "/systemUser",
        component: () =>
          import("../pages/main/SystemManagement/SystemUser.vue"),
      },
      {
        path: "/money/list",
        component: () => import("../pages/main/Money/MoneyList.vue"),
      },
      {
        path: "/money/withdraw",
        component: () => import("../pages/main/Money/MoneyWithdraw.vue"),
      },
      {
        path: "/money/moneySystem",
        component: () => import("../pages/main/Money/MoneySystem.vue"),
      },
      {
        path: "/money/Pay",
        component: () => import("../pages/main/Money/MoneyPay.vue"),
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
