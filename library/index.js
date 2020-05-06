import "./core/common.less";
import components from "./components";
import settings from "./core/settings.js";

function install(Vue) {
    for (let key in components) {
        Vue.component(key, components[key]);
    };
}

export default install;
export {
    settings
}