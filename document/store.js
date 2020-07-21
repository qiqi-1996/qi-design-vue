import Vue from "vue";
import settings from "@qiqi1996/qi-design-vue/core/settings.js";

const vm = new Vue({
    data() {
        return {
            i18n: null,
            enableDarkMode: false,
            theme: "light",
            color: "poe"
        }
    },
    watch: {
        enableDarkMode: {
            handler(newValue) {
                if (newValue) {
                    this.theme = "dark";
                } else {
                    this.theme = "light"
                }
                settings.global.theme = this.theme;
                settings.defaults.toast_theme = this.theme;
            },
            immediate: true
        },
        color: {
            handler(newValue) {
                settings.global.color = newValue;
            },
            immediate: true
        }
    }
});

function ICantBreathe() {
    if (vm.color != "poe" || !vm.enableDarkMode) {
        vm.$qidesign.toast("I can’t breathe.");
        vm.color = "poe";
        vm.enableDarkMode = true;
    }
}
setTimeout(ICantBreathe, 3000);

// document.addEventListener("click", () => {
//     let colors = ["poe", "starrynight", "enjolras", "sunflower"];
//     vm.color = colors[Math.floor(Math.random() * colors.length)];
// });

export default vm;