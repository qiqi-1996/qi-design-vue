<i18n src="./i18n.json"></i18n>

<template>
    <transition-group name="fade">

        <!-- Menu Bar -->

        <q-panel class="menubar" v-show="!display" key="bar">

            <!-- Left Icon -->

            <q-icon name="menu" :class="display?'menu-rotate':''" @click.native="doOpen" v-if="share.layout=='default'"></q-icon>
            <q-icon name="arrow-left" v-else-if="share.layout=='side-router'" @click.native="share.doSideRouterBack"></q-icon>

            <!-- Title -->

            <div class="route" v-if="share.layout=='default'">
                <transition-group :name="direction">
                    <q-text mode="single" v-for="(value, key) in TabValueMap" :key="value" v-if="current === value"><strong>{{ $t(key) }}</strong></q-text>
                </transition-group>
            </div>
            <div class="route side-router" v-else-if="share.layout=='side-router'">
                <q-text mode="single" style="top: 0px;" @click.native="share.doSideRouterBack"><strong>返回</strong></q-text>
            </div>

            <!-- Right Icon -->

            <q-icon name="arrow-right" class="setting" @click.native="doTabNext" v-if="share.layout=='default'"></q-icon>
        </q-panel>

        <!-- Menu Panel -->

        <q-panel class="menupanel" v-show="display" key="panel">
            <q-icon :class="['close', displayed?'close-rotate':'']" name="close" @click.native="doClose"></q-icon>

            <transition name="content">
                <div class="content" v-show="displayed">
                    <q-title class="category-title" :level="1" colorful>{{ $t("category") }}</q-title>

                    <div class="category-item" v-for="(value, key) in TabValueMap" :key="key" @click="doTabChange(value)">
                        <div v-if="key!=='development' || (key==='development' && development)">
                            <q-color-block v-if="current == value" :size="6" round></q-color-block>
                            <q-text mode="single">
                                <strong v-if="current == value">{{ $t(key) }}</strong>
                                <span v-else>{{ $t(key) }}</span>
                            </q-text>
                        </div>
                    </div>

                    <q-title class="category-title" :level="1" mode="single" colorful>{{ $t("settings") }}</q-title>

                     <q-panel class="settings-block" border>
                        <theme-controller></theme-controller>
                    </q-panel>

                     <q-panel class="settings-block" border>
                        <color-controller></color-controller>
                    </q-panel>
                </div>
            </transition>

        </q-panel>
    </transition-group>
</template>

<style lang="less" scoped>
@import "~@qiqi1996/qi-design-vue/core/standard.less";

.menubar {
    position: fixed;
    z-index: @top;
    top: 0px;
    left: 0px;
    width: 100%;

    .setting {
        float: right;
    }

    .route {
        top: 0px;
        position: relative;
        width: 50%;

        .q-text {
            line-height: 14px;
            position: absolute;
            left: 0px;
            top: 0px;
            width: 100%;
        }
    }

    .side-router {
        position: static;
        .q-text {
            position: static;
        }
    }
    
    .q-icon {
        padding: 2*@grid;
        font-size: 24px;
    }

    * {
        display: inline-block;
        vertical-align: middle;
    }
}

.menupanel {
    z-index: @top;
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    overflow: auto;
}

.close {
    z-index: @top;
    position: fixed;
    top: 0px;
    left: 0px;
    font-size: 24px;
    padding: 2*@grid;
    transform: rotate(-45deg) scale(0.8);
}

.content {
    padding: 0px 8*@grid;
    margin-bottom: 4*@grid;
}

.category-title {
    margin: 4*@grid 0px;
    text-transform: uppercase;
}

.category-item {

    margin: 0px;
    padding: 2*@grid 0px;
    padding-left: 2*@grid;

    .q-color-block {
        margin: 0px;
        margin-left: -2*@grid;
        margin-right: @grid;
    }

    * {
        margin: 0px;
        display: inline-block;
        vertical-align: middle;
    }
}

.settings-block {
    padding: 2*@grid;
    margin-bottom: @grid;
}

/******* Transition *******/

.fade-enter-active, .fade-leave-active {
    .transition();
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}

.left-enter-active, .left-leave-active {
    .transition();
}

.left-enter {
    transform: translateX(10%);
    opacity: 0;
}

.left-leave-to {
    transform: translateX(-10%);
    opacity: 0;
}

.right-enter-active, .right-leave-active {
    .transition();
}

.right-enter {
    transform: translateX(-10%);
    opacity: 0;
}

.right-leave-to {
    transform: translateX(10%);
    opacity: 0;
}

.content-enter-active, .content-leave-active {
    .transition();
}

.content-enter, .content-leave-to {
    transform: translateY(5%);
    opacity: 0;
}

.menu-rotate {
    transform: rotate(45deg) !important;
}

.close-rotate {
    transform: rotate(0deg);
}
</style>

<script>
import share from "./share.js";
import store from "document/store.js";
import ThemeController from "document/components/theme-controller/theme-controller.vue";
import ColorController from "document/components/theme-controller/color-controller.vue";
import { TabValueMap, ValueTabMap } from "./tab-map.js";

export default {
    components: {
        ThemeController,
        ColorController
    },
    model: {
        prop: "display",
        event: "change"
    },
    props: {
        current: String
    },
    data(){
        return {
            direction: "left",

            development: false,
            share,
            store,

            display: false,
            displayed: false,

            ValueTabMap,
            TabValueMap,
        }
    },
    computed: {
        currentTab(){
            return ValueTabMap[this.current];
        }
    },
    beforeMount(){
        if(__DEVELOPMENT__){
            this.development = true;
        }else{
            this.development = false;
        }
    },
    watch: {
        display(value) {
            setTimeout(()=>{
                this.displayed = value;
            })
        },
        current(newValue, oldValue){
            if(newValue<oldValue){
                this.direction = "right"
            }else{
                this.direction = "left"
            }
        }
    },
    methods: {
        doOpen(){
            this.display = true;
        },
        doClose(){
            this.display = false;
        },
        doTabChange(value){
            this.$emit("tab-change", value);
            this.doClose();
        },
        doTabNext(){
            let value = this.current;
            value = String(Number(value) + 1);
            if(value>7 || (!this.development && value>6)){
                value = "1"
            }
            this.doTabChange(value);
        }
    }
}
</script>