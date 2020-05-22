<template>
    <window class="window" source="radio">
        <q-radio value="1" v-model="radio" default>Radio 1</q-radio>
        <q-radio value="2" v-model="radio">Radio 2</q-radio>
        <q-radio value="3" v-model="radio">Radio 3</q-radio>
        <q-radio value="4" v-model="radio" disable>Radio 4</q-radio>
    </window>
</template>

<style lang="less" scoped>
@import "~@qiqi1996/qi-design-vue/core/standard.less";

.window {
    .q-radio { 
        margin: 0px @grid;
    }
}
</style>

<script>
export default {
    data(){
        return {
            radio: ""
        }
    }
}
</script>