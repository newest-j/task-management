import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: LandingPage,
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("../views/Signup.vue"),
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../views/Dashboard.vue"),
    },
    {
      path: "/dashboard/tasks",
      name: "tasks",
      component: () => import("../views/Task.vue"),
    },
    {
      path: "/dashboard/statistics",
      name: "statistics",
      component: () => import("../views/Statistics.vue"),
    },
  ],
});

export default router;
