import { defineStore } from "pinia";
import LoginViewVue from "../views/Admin/auth/LoginView.vue";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    isAdmin: false,
    isLoggedIn: false,
    adminLoginDetails: {
      email: "",
      password: "",
    },
    token: "",
    loginError: {
      status: false,
      message: "",
    },
  }),
  actions: {
    adminIsLogged() {
      this.isAdmin = true;
    },
    setLoginError(message, status) {
      this.loginError.message = message;
      this.loginError.status = status;

      setTimeout(() => {
        this.loginError.status = false;
      }, 3000);
    },
  },
});
