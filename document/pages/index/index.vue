<i18n src="./index.i18n.json"></i18n>

<template>
    <page>
        <div class="stage">

            <q-panel class="visible-mobile mobile-tip" secondary>
                <q-title>NOTICE</q-title>
                <q-footnote>{{ $t("notice") }}</q-footnote>
            </q-panel>

            <!-- Features -->

            <q-title class="title" :level="2">{{ $t("features") }}</q-title>

            <div class="clearfloat">
                <!-- Dark Mode -->
                <div class="feature-block darkmode" @click="toggleDarkMode">
                    <q-image src="./features_darkmode_disable.png" mode="cover" src-dark="./features_darkmode_enable.png" :lazy="false"></q-image>
                    <div class="content">
                        <q-title class="feature-title" v-html="$t('features-darkmode')"></q-title>
                        <div class="darkmode-switch">
                            <q-switch size="large" :value="store.enableDarkMode"></q-switch>
                            <q-footnote>{{ $t("features-enable") }}</q-footnote>
                        </div>
                    </div>
                </div>
                <!-- Colors -->
                <div class="feature-block colors" :style="currentColorsBackgroundStyle" @click="nextColor">
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
                                <q-color-block v-for="(color,index) in colorList" :key="index" @click.native.stop="doColorChange(color)" :color="color" :size="24" round><q-icon name="correct" v-show="currentColor===color"></q-icon></q-color-block>
                            </div>
                        </q-theme>
                    </div>
                </div>
            </div>

            <!-- Applications -->

            <q-title class="title" :level="2">{{ $t("applications") }}</q-title>

            <div class="app-list">
                <q-panel 
                    class="app-block" border
                    v-for="(item, index) in appList"
                    :key="index"
                    @click="openURL(item.link)"
                >
                    <q-title :level="1" colorful>{{item.name}}</q-title>
                    <q-image
                        mode="cover"
                        :src="item.image"
                        :src-dark="item.imageDark"
                        :style="{opacity:item.name?0.5:undefined}"
                    ></q-image>
                </q-panel>
            </div>

        </div>
    </page>
</template>

<style lang="less" scoped>
@import "~@qiqi1996/qi-design-vue/core/standard.less";

.stage {
    width: 61.8%;
    margin: 0px auto;
}

.title {
    margin-top: 8*@grid;
    margin-bottom: 4*@grid;
}

.feature-block {
    .noselect();
    position: relative;
    width: calc(~"50% - 16px");
    height: 280px;

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
    .transition();

    .q-image {
        width: 100%;
        height: 100%;
    }

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
    cursor: pointer;
    .transition();

    .mask {
        width: 100%;
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

.darkmode:hover, .colors:hover {
    z-index: 1;
    transform: scale(1.05);
}

.app-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.app-block {
    width: calc(~"50% - 16px");
    height: 280px;
    position: relative;
    margin-bottom: 4*@grid;
    cursor: pointer;

    .q-title {
        margin: 4*@grid;
        letter-spacing: 8px;
        position: absolute;
        width: calc(~"100% - "2*4*@grid);
        bottom: 0*@grid;
        left: 0px;
        text-align: center;
        text-transform: uppercase;
        z-index: 1;
    }

    .q-image {
        width: 100%;
        height: 100%;
    }
}

.app-block:hover {
    transform: scale(1.05);
}

@import "./index.screen.less";
@import "./index.mobile.less";
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
            store,
            colorList: [
                "poe",
                "starrynight",
                "sunflower",
                "enjolras",
                "spring"
            ],
            appList: [
                {
                    link: "https://qiqi-1996.github.io/qi-sketch-exporter/",
                    image: require("./applications/qi-sketch-exporter.png")
                },
                {
                    name: "VSCode Rainbow Fart",
                    link: "https://saekiraku.github.io/vscode-rainbow-fart/",
                    image: require("./applications/vscode-rainbow-fart-light.png"),
                    imageDark: require("./applications/vscode-rainbow-fart-dark.png")
                }
            ]
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
        doColorChange(value){
            this.store.color = value;
        },
        nextColor(){
            let index = this.colorList.indexOf(this.store.color) + 1;
            if(index>this.colorList.length-1){
                index = 0;
            }
            this.store.color = this.colorList[index];
        },
        openURL(url){
            window.open(url, "__blank");
        }
    }
}
</script>