<template>
    <div>
        <q-panel pure border class="theme-switcher">
            <span class="options">
                <q-text>暗夜模式</q-text>
                <q-switch v-model="store.enableDarkMode"></q-switch>
            </span>
            <q-divider type="vertical"></q-divider>
            <span class="options">
                <q-text>应用主题</q-text>
                <q-select @change="handleColorChange">
                    <q-select-item value="poe" text="爱伦坡"></q-select-item>
                    <q-select-item value="enjolras" text="Enjolras"></q-select-item>
                    <q-select-item value="starrynight" text="星月夜"></q-select-item>
                    <q-select-item value="sunflower" text="向日葵"></q-select-item>
                    <q-select-item value="spring" text="春天"></q-select-item>
                </q-select>
            </span>
        </q-panel>
    </div>
</template>

<style lang="less" scoped>
@import "~@/core/standard.less";

.theme-switcher {
    position: fixed;
    z-index: @top;
    text-align: center;
    margin: 0px auto;
    bottom: @grid;
    left: 50%;
    padding: @grid;
    padding-left: 2*@grid;
    transform: translateX(-50%);

    .q-divider {
        height: 16px;
    }

    * {
        display: inline-block;
        vertical-align: middle;
        margin: 0px;
        margin-right: @grid;
    }
}
</style>

<script>
import store from "document/store.js";

export default {
    data() {
        return {
            store
        };
    },
    mounted() {
        if (window.matchMedia) {
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                store.enableDarkMode = true;
            } else {
                store.enableDarkMode = false;
            }
        } else {
            var d = new Date();
            if (d.getHours() > 19 || d.getHours < 5) {
                store.enableDarkMode = true;
            } else {
                store.enableDarkMode = false;
            }
        }
    },
    methods: {
        handleColorChange(evt) {
            store.color = evt.value;
        }
    }
};
</script>