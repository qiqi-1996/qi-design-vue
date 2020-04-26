import "./core/common.less";
import components from "./components";

function install(Vue) {
    for (let key in components) {
        Vue.component(key, components[key]);
    };
}

export default install;