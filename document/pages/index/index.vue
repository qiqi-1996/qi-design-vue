<i18n src="./index.i18n.json"></i18n>

<template>
    <page>
        <div class="stage">

            <q-title class="title" :level="2">{{ $t("features") }}</q-title>

            <div class="feature-block darkmode" @click="toggleDarkMode">
                <q-image src="./features_darkmode_disable.png" dark="./features_darkmode_enable.png" height="280px"></q-image>
                <div class="content">
                    <q-title class="feature-title" v-html="$t('features-darkmode')"></q-title>
                    <div class="darkmode-switch">
                        <q-switch size="large" :value="store.enableDarkMode"></q-switch>
                        <q-footnote>{{ $t("features-enable") }}</q-footnote>
                    </div>
                </div>
            </div>

            
            <div class="feature-block colors" :style="currentColorsBackgroundStyle">
                <q-color-block class="mask"></q-color-block>
                <div class="content">
                    <q-theme class="theme-detector">
                        <q-title class="feature-title" v-html="$t('features-colors')"></q-title>

                        <div class="colors-info">
                            <q-title :level="2">{{ $t(`features-colors-${currentColor}-name`) }}</q-title>
                            <q-footnote>{{ $t(`features-colors-inspired`) }}</q-footnote>
                            <q-title :level="3">{{ $t(`features-colors-${currentColor}-description`) }}</q-title>
                        </div>

                        <div class="colors-switch">
                            <q-color-block @click.native="handleColorChange('poe')" color="poe" :size="24" round><q-icon name="correct" v-show="currentColor==='poe'"></q-icon></q-color-block>
                            <q-color-block @click.native="handleColorChange('starrynight')" color="starrynight" :size="24" round><q-icon name="correct" v-show="currentColor==='starrynight'"></q-icon></q-color-block>
                            <q-color-block @click.native="handleColorChange('sunflower')" color="sunflower" :size="24" round><q-icon name="correct" v-show="currentColor==='sunflower'"></q-icon></q-color-block>
                            <q-color-block @click.native="handleColorChange('enjolras')" color="enjolras" :size="24" round><q-icon name="correct" v-show="currentColor==='enjolras'"></q-icon></q-color-block>
                            <q-color-block @click.native="handleColorChange('spring')" color="spring" :size="24" round><q-icon name="correct" v-show="currentColor==='spring'"></q-icon></q-color-block>
                        </div>
                    </q-theme>
                </div>
            </div>

        </div>
    </page>
</template>

<style lang="less" scoped>
@import "~@/core/standard.less";

.stage {
    width: 61.8%;
    margin: 0px auto;
}

.title {
    margin-top: 8*@grid;
    margin-bottom: 4*@grid;
}

.feature-block {
    position: relative;

    .feature-title {
        letter-spacing: @grid;
        margin: 4*@grid;
        font-size: 48px;
        line-height: 56px;
        font-weight: bolder;
    }

    .content {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
    }
}

.darkmode {
    float: left;
    border: 1px solid @color-light-secondary-background;
    cursor: pointer;

    .darkmode-switch {
        position: absolute;
        left: 0px;
        bottom: 0px;
        margin: 4*@grid;

        * {
            display: inline-block;
            vertical-align: middle;
            margin-right: 2*@grid;
        }
    }
}

.colors {
    float: right;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    .transition();

    .mask {
        width: 420px;
        height: 280px;
        opacity: 0.5;
    }

    .theme-detector[class*="theme-light"] {
        /deep/ * {
            color: @color-light-background;
        }
    }

    .theme-detector[class*="theme-dark"] {
        /deep/ * {
            color: @color-dark-background;
        }
    }

    .theme-detector:not([class*="color-poe"]) {
        /deep/ * {
            color: @color-light-background;
        }
    }

    .colors-info {
        position: absolute;
        left: 0px;
        bottom: 0px;
        margin: 4*@grid;
    }

    .colors-switch {
        position: absolute;
        top: 0px;
        right: 0px;
        margin-right: 4*@grid;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .q-color-block {
            cursor: pointer;
            text-align: center;
            line-height: 22px;
            font-weight: bolder;
            border: 2px solid @color-white;
            margin-bottom: 2*@grid;
        }

        .q-color-block:last-of-type {
            margin-bottom: 0px;
        }
    }
}

</style>

<script>
import store from "document/store.js";
import colors_poe from "./features_colors_poe.png";
import colors_starrynight from "./features_colors_starrynight.png";
import colors_sunflower from "./features_colors_sunflower.png";
import colors_enjolras from "./features_colors_enjolras.png";
import colors_spring from "./features_colors_spring.png";

const colorsBackgroundMap = {
    colors_poe,
    colors_starrynight,
    colors_sunflower,
    colors_enjolras,
    colors_spring
}

export default {
    data(){
        return {
            store
        }
    },
    computed: {
        currentColor(){
            return this.store.color;
        },
        currentColorsBackgroundStyle(){
            return {
                backgroundImage: `url(${colorsBackgroundMap["colors_"+this.currentColor]})`
            }
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