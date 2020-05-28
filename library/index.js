import "./core/common.less";

import components from "./components";
import settings, { replaceSettingsObject } from "./core/settings.js";
import api from "./core/api.js";

import QGlobal from "./global.vue";

var vm;

function install(Vue) {
    Vue.prototype.$qidesign = api;

    for (let key in components) {
        Vue.component(key, components[key]);
    };

    let container = document.createElement("div");
    document.body.appendChild(container);

    replaceSettingsObject(new Vue({
        data() { 
            return settings;
        }
    }))

    vm = new Vue({
        el: container,
        render: h => h(QGlobal)
    });
}

export default install;
export {
    settings
}