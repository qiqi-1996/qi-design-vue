import Vue from "vue";

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
            },
            immediate: true
        }
    }
});

// document.addEventListener("click", () => {
//     let colors = ["poe", "starrynight", "enjolras", "sunflower"];
//     vm.color = colors[Math.floor(Math.random() * colors.length)];
// });

export default vm;