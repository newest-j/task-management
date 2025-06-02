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
      path: "/login",
      name: "login",
      component: () => import("../components/LoginForm.vue"),
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("../components/SignupForm.vue"),
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
    {
      path: "/dashboard/settings",
      name: "settings",
      component: () => import("../views/Settings.vue"),
    },
  ],
});

export default router;
