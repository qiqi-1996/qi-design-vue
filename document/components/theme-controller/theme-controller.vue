<i18n src="./theme-controller.i18n.json"></i18n>

<template>
    <div class="controller-container" @click="toggleDarkMode">
        <div class="left">
            <q-text>{{ $t("darkmode") }}</q-text>
        </div>
        <div class="right">
            <q-switch style="pointer-events: none;" v-model="store.enableDarkMode"></q-switch>
        </div>
    </div>
</template>

<style lang="less" scoped>
@import "./theme-controller.base.less";
</style>

<script>
import store from "document/store.js";

export default {
    data() {
        return {
            store
        }
    },
    methods: {
        toggleDarkMode(){
            store.enableDarkMode = !store.enableDarkMode;
        }
    }
}
</script>