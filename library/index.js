import "./core/common.less";
import components from "./components";
import settings from "./core/settings.js";

var vm;

function install(Vue) {
    // let container = document.createElement("div");
    // document.body.appendChild(container);
    // vm = new Vue({
    //     el: container
    // });

    for (let key in components) {
        Vue.component(key, components[key]);
    };
}

export default install;
export {
    settings
}