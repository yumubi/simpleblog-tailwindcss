const routes = [
  // 首页
  {
    path: "/",
    name: "home",
    meta: {
      title: "首页",
    },
    component: () => import("@/views/Home.vue"),
  },

  {
    path: "/about",
    component: () => import("@/views/About.vue"),
  },

  {
    name: "detail",
    path: "/detail/:id",
    component: () => import("@/views/Detail.vue"),
  },

  {
    path: "/links",
    component: () => import("@/views/ExtraLink.vue"),
  },

  {
    path: "/archive",
    name: "archive",
    meta: {
      title: "archive",
    },
    component: () => import("@/views/Archive.vue"),
  },
  {
    path: "/404",
    name: "404",
    meta: {
      title: "404",
    },
    component: () => import("@/views/404.vue"),
  },
  {
    path: "/:pathMatch(.*)",
    redirect: "/404",
  },
];

export default routes;
