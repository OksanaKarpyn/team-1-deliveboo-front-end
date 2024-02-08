import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
// createApp(App).mount('#app')
import { router } from "./router";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import './function';
createApp(App).use(router).mount("#app");
