import "./index.less";

import Vue from "vue";
import VueRouter from "vue-router";
import VueI18N from "vue-i18n";
import QiDesignVue, { settings } from "@qiqi1996/qi-design-vue/index.js";

import routes from "./pages/routes.js";

import root from "./index.vue";
import ComponentInstaller from "./components/install.js";
import messages from "./i18n";
import store from "./store";

settings.defaults.typography_mode = "normal";
settings.defaults.image_lazy = true;
settings.defaults.image_loading = true;

Vue.use(QiDesignVue);
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

var locale = "en";
const currentLanguage = navigator.language;
const supportLanguage = ["en", "zh"]
if (supportLanguage.indexOf(currentLanguage) != -1) {
    locale = currentLanguage
} else {
    for (let lang of supportLanguage) {
        if (currentLanguage.indexOf(lang) == 0) {
            locale = lang;
            break;
        }
    }
}
store.i18n = new VueI18N({
    locale,
    silentFallbackWarn: true,
    messages
})

Vue.mixin({
    data() {
        return {
            VERSION: __VERSION__
        };
    }
})

const app = new Vue({
    i18n: store.i18n,
    router,
    components: {
        root,
    },
}).$mount("#app");