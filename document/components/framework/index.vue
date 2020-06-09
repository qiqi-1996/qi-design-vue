<i18n src="./i18n.json"></i18n>
<template>
    <q-panel class="framework-container">

        <menubar class="visible-mobile" :current="tabvalue" @tab-change="handleTabChange"></menubar>

        <div :class="['header', tabvalue!='1'?'minimize':'', share.layout!='default'?'hidden':'']">
            <div class="headline">
                <q-title :level="1">QI DESIGN <br class="visible-mobile">STANDARD</q-title>
                <q-color-block :size="8" round></q-color-block>
                <br>
                <q-text :level="3" colorful class="edition"><strong>VUE EDITION</strong></q-text>
            </div>

            <span class="hidden-mobile">
                <q-menu class="language" @select="handleLanguageSelect" :data="LanguageList" v-model="LanguageOpen" size="small" full>
                    <q-button icon="earth" size="small" @click="toggleLanguageMenu">Language</q-button>
                </q-menu>

                <q-button icon="open" size="small" href="https://github.com/qiqi-1996/qi-design-vue">GitHub</q-button>
                <q-footnote class="tips" v-show="$i18n.locale!='zh'">Current language is not fully translated.</q-footnote>
            </span>

            <span class="visible-mobile">
                <q-menu class="language" @select="handleLanguageSelect" :data="LanguageList" v-model="LanguageOpen" full>
                    <q-button icon="earth" @click="toggleLanguageMenu">Language</q-button>
                </q-menu>

                <q-button icon="open" href="https://github.com/qiqi-1996/qi-design-vue">GitHub</q-button>
                <q-footnote class="tips" v-show="$i18n.locale!='zh'">Current language is not fully translated.</q-footnote>
            </span>
        </div>

        <q-tab class="pagetab hidden-mobile" v-model="tabvalue" align="center">
            <router-link to="/">
                <q-tab-item value="1" :text="$t('summary')"></q-tab-item>
            </router-link>

            <router-link to="/usage/install">
                <q-tab-item value="2">{{ $t('usage') }}</q-tab-item>
            </router-link>

            <q-divider type="vertical"></q-divider>

            <router-link to="/designer/icons">
                <q-tab-item value="3">{{ $t('designer') }}</q-tab-item>
            </router-link>

            <router-link to="/developer/summary">
                <q-tab-item value="4">{{ $t('developer') }}</q-tab-item>
            </router-link>

            <q-divider type="vertical"></q-divider>

            <router-link to="/resource">
                <q-tab-item value="5">{{ $t('resource') }}</q-tab-item>
            </router-link>

            <router-link to="/update">
                <q-tab-item value="6">{{ $t('update') }}</q-tab-item>
            </router-link>

            <q-divider type="vertical" v-if="development===true"></q-divider>

            <router-link to="/development">
                <q-tab-item value="7" v-if="development===true">{{ $t('development') }}</q-tab-item>
            </router-link>

        </q-tab>

        <q-divider class="visible-mobile"></q-divider>

        <div class="content">
            <transition :name="direction">
                <router-view class="router-view"></router-view>
            </transition>
        </div>

    </q-panel>
</template>

<style lang="less" scoped>
@import "~@qiqi1996/qi-design-vue/core/standard.less";

.header {
    padding-top: 8*@grid;
    padding-bottom: 8*@grid;
    width: 100%;
    text-align: center;

    .q-color-block {
        margin-left: @grid/2;
        margin-right: @grid/2;
        display: inline-block;
        vertical-align: baseline;
    }

    .headline {
        margin-left: 2 * @grid;
        margin-bottom: 3*@grid;
        // 只居中标题，装饰点所占宽度不作为居中而考量

        .edition {
            margin-left: -2*@grid;
        }

        * {
            display: inline-block;
            vertical-align: baseline;
        }
    }

    .tips {
        margin-top: @grid;
    }
}

.pagetab {
    .q-divider {
        display: inline-block;
        vertical-align: middle;
        height: 16px !important;
    }
}

.content {
    width: 100%;
    position: relative;

    .router-view {
        width: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
    }
}

/******* Transition *******/

.left-enter-active, .left-leave-active {
    .transition(all, 1000ms);
}

.left-enter {
    transform: translate(5%, 0px);
    opacity: 0;
}

.left-leave-to {
    transform: translate(-5%, 0px);
    opacity: 0;
}

.right-enter-active, .right-leave-active {
    .transition(all, 1000ms);
}

.right-enter {
    transform: translate(-5%, 0px);
    opacity: 0;
}

.right-leave-to {
    transform: translate(5%, 0px);
    opacity: 0;
}

.menu-rotate {
    transform: rotate(90deg);
}

@import "./framework.mobile.less";
</style>

<script>
import store from "document/store.js";
import share from "./share.js";
import languages from "document/i18n/languages.json";
import Menubar from "./menubar.vue";
import { TabValueMap, ValueRouteMap } from "./tab-map.js";

export default {
    components: {
        Menubar
    },
    data(){
        return {
            development: false,
            share,

            tabvalue: "1",
            direction: "left",

            LanguageOpen: false,
            LanguageList: (()=>{
                let result = [];
                for(let i in languages){
                    result.push({
                        text: languages[i],
                        value: i
                    });
                }
                return result;
            })()
        }
    },
    watch: {
        tabvalue(newValue, oldValue){
            if(newValue > oldValue){
                this.direction = "left";
            }else{
                this.direction = "right";
            }
        }
    },
    beforeMount(){
        if(__DEVELOPMENT__){
            this.development = true;
        }else{
            this.development = false;
        }
    },
    mounted() {
        let value = TabValueMap[location.hash.replace("#/","").split("/")[0]] || "1";
        this.tabvalue = value;
    },
    methods: {
        toggleLanguageMenu(){
            this.LanguageOpen = !this.LanguageOpen;
        },
        handleLanguageSelect(evt){
            this.LanguageOpen = false;
            store.i18n.locale = evt.value;
        },
        handleTabChange(value){
            this.tabvalue = value;
            this.$router.push({path:ValueRouteMap[value]});
        }
    }
}
</script>