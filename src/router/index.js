import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SearchView from "../views/SearchView.vue";
import BookmarkView from "../views/BookmarkView.vue";
import AdminHomeView from "../views/Admin/AdminHomeView.vue";
import LoginView from "../views/Admin/auth/LoginView.vue";
import ResetPasswordView from "../views/Admin/auth/ResetPasswordView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/search",
      name: "search",
      component: SearchView,
    },
    {
      path: "/bookmark",
      name: "bookmark",
      component: BookmarkView,
    },
    {
      path: "/admin",
      name: "admin",
      component: AdminHomeView,
    },
    {
      path: "/admin/login",
      name: "admin-login",
      component: LoginView,
    },
    {
      path: "/admin/reset",
      name: "admin-reset",
      component: ResetPasswordView,
    },
  ],
});

export default router;
