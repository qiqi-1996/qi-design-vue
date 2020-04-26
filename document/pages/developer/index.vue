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
                    title: "项目概述"
                },
                {
                    to: "/developer/summary",
                    title: "概述"
                },
                {
                    to: "/developer/construction",
                    title: "项目构建"
                },
                {
                    to: "/developer/experience",
                    title: "开发体验增强"
                },



                {
                    type: "divider",
                },
                {
                    type: "category",
                    title: "组件开发"
                },
                {
                    to: "/developer/base-pattern",
                    title: "基本范式"
                },


                {
                    type: "divider",
                },
                {
                    type: "category",
                    title: "其他"
                },
                {
                    to: "/developer/document-standard",
                    title: "文档编写规范"
                }
            ]
        }
    }
}
</script>