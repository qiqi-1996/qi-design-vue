<template>
    <q-panel class="framework-container">
        <div class="header">
            <div class="headline">
                <q-title :level="1">QI DESIGN STANDARD</q-title>
                <q-color-block :size="8" round></q-color-block>
                <br>
                <q-text :level="3" colorful><strong>VUE EDITION</strong></q-text>
            </div>
        </div>

        <q-tab class="pagetab" v-model="tabvalue" align="center">
            <router-link to="/">
                <q-tab-item value="1">简介</q-tab-item>
            </router-link>

            <router-link to="/usage/install">
                <q-tab-item value="2">组件使用文档</q-tab-item>
            </router-link>

            <q-divider type="vertical"></q-divider>

            <router-link to="/designer/icons">
                <q-tab-item value="3">设计师文档</q-tab-item>
            </router-link>

            <router-link to="/developer/summary">
                <q-tab-item value="4">开发者文档</q-tab-item>
            </router-link>

            <q-divider type="vertical"></q-divider>

            <router-link to="/resource">
                <q-tab-item value="5">设计资源</q-tab-item>
            </router-link>

            <router-link to="/update">
                <q-tab-item value="6">更新日志</q-tab-item>
            </router-link>

            <q-divider type="vertical" v-if="development===true"></q-divider>

            <router-link to="/development">
                <q-tab-item value="7" v-if="development===true">开发环境工具</q-tab-item>
            </router-link>

        </q-tab>

        <div class="content">
            <transition :name="direction">
                <router-view class="router-view"></router-view>
            </transition>
        </div>

        <div class="footer">
        </div>
    </q-panel>
</template>

<style lang="less" scoped>
@import "~@/core/standard.less";

.header {
    padding-top: 10*@grid;
    padding-bottom: 10*@grid;
    width: 100%;
    text-align: center;

    .q-color-block {
        margin-left: @grid/2;
        margin-right: @grid/2;
        display: inline-block;
        vertical-align: baseline;
    }

    .headline {
        margin-left: 2*@grid;

        * {
            display: inline-block;
            vertical-align: baseline;
        }
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
</style>

<script>
import store from "document/store.js";

export default {
    data(){
        return {
            development: false,
            tabvalue: "1",
            direction: "left"
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
        let tabdict = {
            "usage": 2,
            "designer": 3,
            "developer": 4,
            "resource": 5,
            "update": 6,
            "development": 7,
        }
        let value = tabdict[location.hash.replace("#/","").split("/")[0]] || "1";
        this.tabvalue = value;
    }
}
</script>