import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.css";

import SideBar from "./components/SideBar.vue";
import Offcanvas from "./components/Offcanvas.vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.component("side-bar", SideBar);
app.component("offcanvas", Offcanvas);
app.use(createPinia());
app.use(router);

app.mount("#app");
