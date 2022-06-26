import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
              @import "@/assets/scss/abstracts/_animations.scss";
              @import "@/assets/scss/abstracts/_variables.scss";
              @import "@/assets/scss/abstracts/_mixins.scss";
            `,
      },
    },
  },
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
