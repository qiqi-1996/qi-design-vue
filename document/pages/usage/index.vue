<template>
    <side-router :data="data"></side-router>
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
                    title: "快速上手"
                },
                {
                    to: "/usage/install",
                    title: "安装和使用",
                    imageLight: require("./icons/install_light.png"),
                    imageDark: require("./icons/install_dark.png"),
                },


                /******* 表单类组件 *******/


                {
                    type: "divider"
                },
                {
                    type: "category",
                    title: "输入类组件"
                },
                {
                    to: "/usage/radio",
                    title: "单选框",
                    imageLight: require("./icons/radio_light.png"),
                    imageDark: require("./icons/radio_dark.png"),
                },
                {
                    to: "/usage/checkbox",
                    title: "复选框",
                    imageLight: require("./icons/checkbox_light.png"),
                    imageDark: require("./icons/checkbox_dark.png"),
                },
                {
                    to: "/usage/switch",
                    title: "开关",
                    imageLight: require("./icons/switch_light.png"),
                    imageDark: require("./icons/switch_dark.png"),
                },
                {
                    to: "/usage/input",
                    title: "输入框",
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
                    title: "交互类组件"
                },
                {
                    to: "/usage/button",
                    title: "按钮",
                    imageLight: require("./icons/button_light.png"),
                    imageDark: require("./icons/button_dark.png"),
                },
                {
                    to: "/usage/tab",
                    title: "选项卡",
                    imageLight: require("./icons/tab_light.png"),
                    imageDark: require("./icons/tab_dark.png"),
                },
                // {
                //     to: "/usage/tree",
                //     title: "树形控件",
                //     imageLight: require("./icons/tree_light.png"),
                //     imageDark: require("./icons/tree_dark.png"),
                // },

                /******* 装饰性组件 *******/

                {
                    type: "divider"
                },
                {
                    type: "category",
                    title: "呈现类组件"
                },
                {
                    to: "/usage/theme",
                    title: "主题",
                    imageLight: require("./icons/theme_light.png"),
                    imageDark: require("./icons/theme_dark.png"),
                },
                {
                    to: "/usage/panel",
                    title: "面板",
                    imageLight: require("./icons/panel_light.png"),
                    imageDark: require("./icons/panel_dark.png"),
                },
                {
                    to: "/usage/icon",
                    title: "图标",
                    imageLight: require("./icons/icon_light.png"),
                    imageDark: require("./icons/icon_dark.png"),
                },
                {
                    to: "/usage/typography",
                    title: "文字排版",
                    imageLight: require("./icons/typography_light.png"),
                    imageDark: require("./icons/typography_dark.png"),
                },
                {
                    to: "/usage/divider",
                    title: "分割线",
                    imageLight: require("./icons/divider_light.png"),
                    imageDark: require("./icons/divider_dark.png"),
                },
                {
                    to: "/usage/progress",
                    title: "进度条",
                    imageLight: require("./icons/progress_light.png"),
                    imageDark: require("./icons/progress_dark.png"),
                }
            ]
        }
    }
}
</script>