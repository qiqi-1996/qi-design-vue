<i18n src="./usage.i18n.json"></i18n>
<template>
    <side-router :data="data" :i18n="$t.bind(this)"></side-router>
</template>

<script>
import SideRouter from "document/components/side-router/index.vue";

export default {
    components: {
        SideRouter
    },
    data(){
        return {
            data: [
                {
                    type: "category",
                    title: "quick-start"
                },
                {
                    to: "/usage/install",
                    title: "install",
                    imageLight: require("./icons/install_light.png"),
                    imageDark: require("./icons/install_dark.png"),
                },
                {
                    to: "/usage/settings",
                    title: "settings",
                    imageLight: require("./icons/settings_light.png"),
                    imageDark: require("./icons/settings_dark.png"),
                },


                /******* 表单类组件 *******/


                {
                    type: "divider"
                },
                {
                    type: "category",
                    title: "type-of-input"
                },
                {
                    to: "/usage/radio",
                    title: "radio",
                    imageLight: require("./icons/radio_light.png"),
                    imageDark: require("./icons/radio_dark.png"),
                },
                {
                    to: "/usage/checkbox",
                    title: "checkbox",
                    imageLight: require("./icons/checkbox_light.png"),
                    imageDark: require("./icons/checkbox_dark.png"),
                },
                {
                    to: "/usage/switch",
                    title: "switch",
                    imageLight: require("./icons/switch_light.png"),
                    imageDark: require("./icons/switch_dark.png"),
                },
                {
                    to: "/usage/input",
                    title: "input",
                    imageLight: require("./icons/input_light.png"),
                    imageDark: require("./icons/input_dark.png"),
                },
                // {
                //     to: "/usage/form-group",
                //     title: "表单组",
                //     imageLight: require("./icons/form_light.png"),
                //     imageDark: require("./icons/form_dark.png"),
                // },

                /******* 交互类组件 *******/

                {
                    type: "divider"
                },
                {
                    type: "category",
                    title: "type-of-interaction"
                },
                {
                    to: "/usage/button",
                    title: "button",
                    imageLight: require("./icons/button_light.png"),
                    imageDark: require("./icons/button_dark.png"),
                },
                {
                    to: "/usage/tab",
                    title: "tab",
                    imageLight: require("./icons/tab_light.png"),
                    imageDark: require("./icons/tab_dark.png"),
                },
                {
                    to: "/usage/menu",
                    title: "menu",
                    imageLight: require("./icons/menu_light.png"),
                    imageDark: require("./icons/menu_dark.png"),
                },
                {
                    to: "/usage/collapse",
                    title: "collapse",
                    imageLight: require("./icons/collapse_light.png"),
                    imageDark: require("./icons/collapse_dark.png"),
                },
                // {
                //     to: "/usage/tree",
                //     title: "树形控件",
                //     imageLight: require("./icons/tree_light.png"),
                //     imageDark: require("./icons/tree_dark.png"),
                // },

                /******* 呈现类组件 *******/

                {
                    type: "divider"
                },
                {
                    type: "category",
                    title: "type-of-display"
                },
                {
                    to: "/usage/theme",
                    title: "theme",
                    imageLight: require("./icons/theme_light.png"),
                    imageDark: require("./icons/theme_dark.png"),
                },
                {
                    to: "/usage/panel",
                    title: "panel",
                    imageLight: require("./icons/panel_light.png"),
                    imageDark: require("./icons/panel_dark.png"),
                },
                {
                    to: "/usage/typography",
                    title: "typography",
                    imageLight: require("./icons/typography_light.png"),
                    imageDark: require("./icons/typography_dark.png"),
                },
                {
                    to: "/usage/icon",
                    title: "icon",
                    imageLight: require("./icons/icon_light.png"),
                    imageDark: require("./icons/icon_dark.png"),
                },
                {
                    to: "/usage/badge",
                    title: "badge",
                    imageLight: require("./icons/badge_light.png"),
                    imageDark: require("./icons/badge_dark.png"),
                },
                {
                    to: "/usage/divider",
                    title: "divider",
                    imageLight: require("./icons/divider_light.png"),
                    imageDark: require("./icons/divider_dark.png"),
                },
                {
                    to: "/usage/progress",
                    title: "progress",
                    imageLight: require("./icons/progress_light.png"),
                    imageDark: require("./icons/progress_dark.png"),
                }
            ]
        }
    }
}
</script>