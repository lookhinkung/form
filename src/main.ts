import { createApp } from "vue";
import "./style.css";
import "@formkit/themes/genesis";
import { plugin, defaultConfig } from "@formkit/vue";

import App from "./App.vue";
import { createPinia } from "pinia";

const pinia = createPinia();

import router from "./router/router";

createApp(App)
  .use(router)
  .use(pinia)
  .use(
    plugin,
    defaultConfig({
      theme: "genesis",
    })
  )
  .mount("#app");
