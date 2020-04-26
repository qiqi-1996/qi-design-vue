<template>
    <q-panel class="icon-item" border>
        <q-icon :name="name"></q-icon>
        <q-footnote class="name">{{name}}</q-footnote>
    </q-panel>
</template>

<style lang="less" scoped>
@import "~@/core/standard.less";

.icon-item {
    display: inline-block;
    width: 80px;
    height: 80px;
    text-align: center;
    margin: @grid;
    cursor: pointer;
    .transition();

    .q-icon {
        line-height: 64px;
        font-size: 32px;
    }

    .q-footnote {
        text-align: center;
        line-height: 0px;
        margin: 0px;
    }
}

.icon-item:hover {
    transform: scale(1.1);
}
</style>

<script>
export default {
    props: {
        name: String
    }
}
</script>