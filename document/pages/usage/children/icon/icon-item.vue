<template>
    <q-panel class="icon-item" border>
        <div class="center">
            <q-icon :name="name"></q-icon>
            <q-footnote class="name" mode="compact">{{name}}</q-footnote>
        </div>
    </q-panel>
</template>

<style lang="less" scoped>
@import "~@qiqi1996/qi-design-vue/core/standard.less";

.icon-item {
    display: inline-block;
    vertical-align: middle;
    width: 80px;
    height: 80px;
    text-align: center;
    margin: @grid;
    cursor: pointer;
    .transition();

    .center {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .q-icon {
        font-size: 32px;
    }

    .q-footnote {
        text-align: center;
        margin: 4px;
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