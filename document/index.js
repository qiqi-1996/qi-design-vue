import "./index.less";

import Vue from "vue";
import VueRouter from "vue-router";
import VueI18N from "vue-i18n";
import QUI from "@/index.js";

import routes from "./pages/routes.js";

import root from "./index.vue";
import ComponentInstaller from "./components/install.js";
import messages from "./i18n";
import store from "./store";

Vue.use(QUI);
Vue.use(VueRouter);
Vue.use(VueI18N);
ComponentInstaller(Vue);

routes.push({
    path: "/",
    redirect: "/index"
});

const router = new VueRouter({
    routes,
    base: location.pathname
})

store.i18n = new VueI18N({
    locale: "zh-CN",
    silentFallbackWarn: true,
    messages
})

const app = new Vue({
    i18n: store.i18n,
    router,
    components: {
        root,
    },
}).$mount("#app");