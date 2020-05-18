<i18n src="./i18n.json"></i18n>

<template>
    <transition-group>
        <q-panel class="menubar" v-show="!display" key="bar">
            <q-icon name="menu" :class="display?'menu-rotate':''" @click.native="doOpen"></q-icon>
            <q-text class="route"><strong>{{ $t(currentTab) }}</strong></q-text>
            <q-icon name="arrow-right" class="setting" @click.native="doTabNext"></q-icon>
        </q-panel>
        <q-panel class="menupanel" v-show="display" key="panel">
            <q-icon :class="['close', displayed?'close-rotate':'']" name="close" @click.native="doClose"></q-icon>

            <transition name="content">
                <div class="content" v-show="displayed">
                    <q-title class="category-title" :level="1" colorful>{{ $t("category") }}</q-title>

                    <div class="category-item" v-for="(value, key) in TabValueMap" :key="key" @click="doTabChange(value)">
                        <div v-if="key!=='development' || (key==='development' && development)">
                            <q-color-block v-if="current == value" :size="6" round></q-color-block>
                            <q-text>
                                <strong v-if="current == value">{{ $t(key) }}</strong>
                                <span v-else>{{ $t(key) }}</span>
                            </q-text>
                        </div>
                    </div>

                    <q-title class="category-title" :level="1" colorful>{{ $t("settings") }}</q-title>

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

    padding: 2*@grid 0px;

    .q-color-block {
        margin-right: @grid;
    }

    * {
        display: inline-block;
        vertical-align: middle;
    }
}

.settings-block {
    padding: 2*@grid;
    margin-bottom: @grid;
}

/******* Transition *******/

.v-enter-active, .v-leave-active {
    .transition();
}

.v-enter, .v-leave-to {
    opacity: 0;
}

.content-enter-active, .content-leave-active {
    .transition();
    // transition-delay: 100ms;
}

.content-enter, .content-leave-to {
    transform: translateY(5%);
    opacity: 0;
}

.close-rotate {
    transform: rotate(0deg);
}
</style>

<script>
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
            development: false,
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
            if(value>7){
                value = "1"
            }
            this.doTabChange(value);
        }
    }
}
</script>