import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "./login",
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login")
  },
  {
    path: "/console",
    name: "Console",
    meta: {
      name: "控制台",
      icon: "console"
    },
    redirect: "Index",
    component: () => import("../views/Layout"),
    children: [
      {
        path: "/index",
        name: "Index",
        meta: {
          name: "首页"
        },
        component: () => import("../views/Console")
      }
    ]
  },
  {
    path: "/info",
    name: "info",
    meta: {
      name: "信息管理",
      icon: "message"
    },
    // redirect: "InfoIndex",
    component: () => import("../views/Layout"),
    children: [
      {
        path: "/infoIndex",
        name: "InfoIndex",
        meta: {
          name: "信息管理"
        },
        component: () => import("../views/Info")
      },
      {
        path: "/category",
        name: "Category",
        meta: {
          name: "信息分类"
        },
        component: () => import("../views/Info/category.vue")
      }
    ]
  },
  {
    path: "/user",
    name: "User",
    meta: {
      name: "用户管理",
      icon: "user"
    },
    // redirect: "UserIndex",
    component: () => import("../views/Layout"),
    children: [
      {
        path: "/userIndex",
        name: "UserIndex",
        meta: {
          name: "用户列表"
        },
        component: () => import("../views/User")
      }
    ]
  }
  
];

const router = new VueRouter({
  routes
});

export default router;
