import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SearchView from "../views/SearchView.vue";
import BookmarkView from "../views/BookmarkView.vue";
import AdminHomeView from "../views/Admin/AdminHomeView.vue";
import LoginView from "../views/Admin/auth/LoginView.vue";
import ResetPasswordView from "../views/Admin/auth/ResetPasswordView.vue";
import ProfileView from "../views/Admin/ProfileView.vue";
import BlogView from "../views/BlogView.vue";
import NewPasswordView from "../views/Admin/auth/NewPasswordView.vue";
import AdminSearchView from "../views/Admin/AdminSearchView.vue";
import CreateBlogView from "../views/Admin/CreateBlogView.vue";

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
      path: "/admin/search",
      name: "admin-search",
      component: AdminSearchView,
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
    {
      path: "/admin/profile",
      name: "admin-profile",
      component: ProfileView,
    },
    {
      path: "/admin/new-password",
      name: "admin-password-reset",
      component: NewPasswordView,
    },
    {
      path: "/admin/createnewblog",
      name: "create-new-blog",
      component: CreateBlogView,
    },
    {
      path: "/blog/:id",
      name: "blog",
      component: BlogView,
    },
  ],
});

export default router;
