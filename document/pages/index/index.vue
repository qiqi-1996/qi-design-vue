<template>
    <page>
        <q-panel class="container">
            <q-title :level="1" colorful>功能特性</q-title>

            <q-panel secondary class="features feature-darkmode" @click="toggleDarkMode">
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

            <q-panel secondary class="features feature-color">
                <q-image :src="require('./colors_light.png')" :dark="require('./colors_dark.png')"></q-image>
                <div class="description">
                    <q-title :level="3">多彩组件</q-title>
                    <q-footnote>不只是黑与白</q-footnote>
                </div>
                <div class="controller">
                    <q-footnote>切换控件颜色</q-footnote>
                    <q-select @change="handleColorChange">
                        <q-select-item value="poe" text="爱伦坡">
                            <q-color-block color="poe"></q-color-block>
                            <p mode="single" class="title">爱伦坡</p>
                            <p class="description">《永不复还》</p>
                        </q-select-item>
                        <q-select-item value="enjolras" text="Enjolras">
                            <q-color-block color="enjolras"></q-color-block>
                            <p mode="single" class="title">安灼拉</p>
                            <p class="description">《悲惨世界》</p>
                        </q-select-item>
                        <q-select-item value="starrynight" text="星月夜">
                            <q-color-block color="starrynight"></q-color-block>
                            <div class="color-starrynight"></div>
                            <p mode="single" class="title">星月夜</p>
                            <p class="description">梵高</p>
                        </q-select-item>
                        <q-select-item value="sunflower" text="向日葵">
                            <q-color-block color="sunflower"></q-color-block>
                            <p mode="single" class="title">向日葵</p>
                            <p class="description">梵高</p>
                        </q-select-item>
                    </q-select>
                </div>
            </q-panel>

        </q-panel>
    </page>
</template>

<style lang="less" scoped>
@import "~@/core/standard.less";

.container {
    padding-top: 5*@grid;
    width: 38.2%;
    min-width: 480px;
    margin: 0px auto;
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
    width: 480px;
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
        margin-right: @grid;
        float: right;
        margin-top: 7px;
    }

    .q-select {
        width: 126px;
    }

    .description {
        margin: 0px;
        margin-top: 4px;
        opacity: 0.5;
    }

    .q-color-block {
        margin-right: @grid;
        float: left;
    }
}
</style>

<script>
import store from "document/store.js";

export default {
    data(){
        return {
            store
        }
    },
    methods: {
        toggleDarkMode(){
            this.store.enableDarkMode = !this.store.enableDarkMode;
        },
        handleColorChange(evt){
            this.store.color = evt.value;
        }
    }
}
</script>