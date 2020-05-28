<template>
    <div class="q-global">
        <q-theme :theme="settings.global.theme" :color="settings.global.color">
            <q-toast></q-toast>
            <q-mask name="global-mask"></q-mask>
        </q-theme>
    </div>
</template>

<style lang="less" scoped>
@import "~@qiqi1996/qi-design-vue/core/standard.less";

.q-global {

}
</style>

<script>
import settings from "@qiqi1996/qi-design-vue/core/settings.js";

export default {
    computed: {
        settings(){
            return settings;
        }
    }
}
</script>