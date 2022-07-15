import { createApp } from "vue";
import { createPinia } from "pinia";
import Axios from "axios";
import App from "./App.vue";
import router from "./router";
import CKEditor from "@ckeditor/ckeditor5-vue";

// Axios Config
Axios.defaults.baseURL = "https://api.example.com";
Axios.defaults.headers.common["Content-Type"] = "application/json";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(CKEditor);

app.mount("#app");
