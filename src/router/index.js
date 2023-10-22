import { createRouter, createWebHashHistory } from "vue-router";
import routes from "@/router/routes";

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  beforeEach: (to, from) => {
    if (to.meta.title) {
      document.title = to.meta.title ? to.meta.title : "加载中";
    }
    // next();
  },
});


// // 路由守卫
// router.beforeEach(() => {
//   $loadingBar.start();
// });
//
// router.afterEach(() => {
//   $loadingBar.finish();
// });

export default router;
