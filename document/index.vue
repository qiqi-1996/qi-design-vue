<template>
    <q-theme :theme="store.theme" :color="store.color">
        <q-panel class="stage">
            <theme-switcher></theme-switcher>
            <framework></framework>
        </q-panel>
    </q-theme>
</template>

<style lang="less" scoped>
.stage {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
}
</style>

<script>
import store from "./store.js";
import Component_ThemeSwitcher from "./components/theme-switcher/index.vue";

export default {
    components: {
        "theme-switcher": Component_ThemeSwitcher,
    },
    data() {
        return {
            store
        }
    }
}
</script>