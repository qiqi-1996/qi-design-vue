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
                    to: "/designer/icons",
                    title: "图标绘制规范"
                }
            ]
        }
    }
}
</script>