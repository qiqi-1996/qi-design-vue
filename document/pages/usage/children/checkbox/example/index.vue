<template>
    <window class="window" source="checkbox">
        <q-form-group v-model="checkbox">
            <q-checkbox value="A" default>Checkbox A</q-checkbox>
            <q-checkbox value="B">Checkbox B</q-checkbox>
            <q-checkbox value="C">Checkbox C</q-checkbox>
            <q-checkbox value="D" disable>Checkbox D</q-checkbox>
            <q-footnote>您的选择是：</q-footnote>
            <q-panel class="chosen" border v-for="(item, index) in checkbox" :key="index">{{item}}</q-panel>
        </q-form-group>
    </window>
</template>

<style lang="less" scoped>
@import "~@qiqi1996/qi-design-vue/core/standard.less";

.window {
    .q-checkbox {
        margin: 0px @grid;
    }

    .chosen {
        display: inline-block;
        vertical-align: middle;
        margin-left: @grid;
        padding: @grid;
    }
}
</style>

<script>
export default {
    data(){
        return {
            checkbox:null
        }
    },
    watch: {
        checkbox(value){
            console.log("v-model",value);
        }
    },
    methods: {
        handleGroupChange(value){
            console.log(value);
        }
    }
}
</script>