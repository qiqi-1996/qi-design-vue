<i18n src="./theme-controller.i18n.json"></i18n>

<template>
    <div class="controller-container" @click="nextColor">
        <div class="left">
            <q-text>{{ $t("color") }}</q-text>
        </div>
        <div class="right">
            <q-color-block class="color" v-for="(color,index) in colorList" :key="index" @click.native.stop="doColorChange(color)" :color="color" :size="24" round><q-icon class="iconfont" name="correct" v-show="currentColor===color"></q-icon></q-color-block>
        </div>
    </div>
</template>

<style lang="less" scoped>
@import "~@qiqi1996/qi-design-vue/core/standard.less";
@import "./theme-controller.base.less";

.color {
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    line-height: 24px;
    font-weight: bolder;
    margin-left: @grid;
    font-size: 14px;
}

.iconfont {
    color: @color-white !important;
}
</style>

<script>
import store from "document/store.js";

export default {
    data() {
        return {
            store,
            colorList: [
                "poe",
                "starrynight",
                "sunflower",
                "enjolras",
                "spring"
            ]
        }
    },
    computed: {
        currentColor(){
            return this.store.color;
        },
    },
    methods: {
        doColorChange(value){
            this.store.color = value;
        },
        nextColor(){
            let index = this.colorList.indexOf(this.store.color) + 1;
            if(index>this.colorList.length-1){
                index = 0;
            }
            this.store.color = this.colorList[index];
        }
    }
}
</script>