<template>
    <page>
        <q-panel class="container">
            <q-title class="title" :level="2" colorful>功能特性</q-title>

            <q-panel border class="features feature-darkmode" @click="toggleDarkMode">
                <q-image :src="require('./darkmode_light.png')" :dark="require('./darkmode_dark.png')"></q-image>
                <div class="description">
                    <q-title :level="3">暗夜模式</q-title>
                    <q-footnote>对用户细致入微的关怀</q-footnote>
                </div>
                <div class="controller">
                    <q-footnote>打开暗夜模式</q-footnote>
                    <q-switch v-model="store.enableDarkMode"></q-switch>
                </div>
            </q-panel>

            <q-panel border class="features feature-color">
                <div class="description">
                    <q-title :level="3">多彩主题</q-title>
                    <q-footnote>不只是黑与白</q-footnote>
                </div>
                <div class="controller">
                    <color-selector colorname="poe" :activedname="currentColor" @change="handleColorChange"></color-selector>
                    <color-selector colorname="starrynight" :activedname="currentColor" @change="handleColorChange"></color-selector>
                    <color-selector colorname="sunflower" :activedname="currentColor" @change="handleColorChange"></color-selector>
                    <color-selector colorname="enjolras" :activedname="currentColor" @change="handleColorChange"></color-selector>
                    <color-selector colorname="spring" :activedname="currentColor" @change="handleColorChange"></color-selector>
                </div>
            </q-panel>

        </q-panel>
    </page>
</template>

<style lang="less" scoped>
@import "~@/core/standard.less";

.container {
    padding-top: 5*@grid;
    width: 61.8%;
    min-width: 480px;
    margin: 0px auto;

    .title {
        text-align: center;
    }
}

.header {
    padding-top: 96px;
    padding-bottom: 96px;
    width: 100%;
    text-align: center;

    .q-color-block {
        margin-left: @grid;
        display: inline-block;
        vertical-align: baseline;
    }
}

.features {
    box-sizing: border-box;
    padding: 16px;
    width: 100%;
    max-width: 640px;
    margin: 0px auto;
    margin-bottom: 2*@grid;

    .q-image {
        height: 64px;
        display: inline-block;
        vertical-align: middle;
    }

    .description {
        margin-left: 16px;
        display: inline-block;
        vertical-align: middle;
    }
}

.feature-darkmode {
    margin-top: 6*@grid;
    cursor: pointer;

    .controller {
        margin-right: @grid;
        float: right;
        margin-top: 19px;
        pointer-events: none;
        
        * {
            margin-left: @grid;
            display: inline-block;
            vertical-align: middle;
        }
    }
}

.feature-color {
    .controller {
        text-align: center;
        margin: 2*@grid 0px;
        display: flex;
        justify-content: space-around;

        * {
            margin: 0px 2*@grid;
            margin-top: 7px;
        }
    }

    .q-select {
        width: 126px;
    }

    .description {
        margin: 0px;
        margin-top: 4px;
    }

    .q-color-block {
        margin-right: @grid;
        float: left;
    }
}
</style>

<script>
import store from "document/store.js";

import ColorSelector from "./color-selector.vue";

export default {
    components: {
        ColorSelector
    },
    data(){
        return {
            store
        }
    },
    computed: {
        currentColor(){
            return this.store.color;
        }
    },
    methods: {
        toggleDarkMode(){
            this.store.enableDarkMode = !this.store.enableDarkMode;
        },
        handleColorChange(value){
            this.store.color = value;
        }
    }
}
</script>