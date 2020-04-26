import "./index.less";

import Vue from "vue";
import VueRouter from "vue-router";
import QUI from "@/index.js";
    
import routes from "./pages/routes.js";

import root from "./index.vue";
import ComponentInstaller from "./components/install.js";

Vue.use(QUI);
Vue.use(VueRouter);
ComponentInstaller(Vue);

routes.push({
    path: "/",
    redirect: "/index"
});

const router = new VueRouter({
    routes,
    base: location.pathname
})

const app = new Vue({
    router,
    components: {
        root,
    },
}).$mount("#app");