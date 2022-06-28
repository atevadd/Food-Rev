import { defineStore } from "pinia";

export const useStore = defineStore({
  id: "store",
  state: () => ({
    isLoaderActive: true,
    isModalActive: true,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    // Close app Loader
    closeLoader() {
      this.isLoaderActive = false;
    },
    // Open App Loader
    openLoader() {
      this.isLoaderActive = true;
    },
    // Open Modal
    openModal() {
      this.isModalActive = true;
    },
    // Close Modal
    closeModal() {
      this.isModalActive = false;
    },
  },
});
