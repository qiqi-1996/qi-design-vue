<template>
    <q-panel class="window" border>
        <div class="title-bar">
            <div class="controller">
                <q-color-block :size="12" round color="enjolras" class="item"></q-color-block>
                <q-color-block :size="12" round color="sunflower" class="item"></q-color-block>
                <q-color-block :size="12" round color="spring" class="item"></q-color-block>
            </div>
        </div>
        <slot></slot>
    </q-panel>
</template>

<style lang="less" scoped>
@import "~@/core/standard.less";

.window {
    display: inline-block;
    border-radius: 5px;
    padding: 16px;
    padding-top: 32px;
    position: relative;
}

.title-bar {
    position: absolute;
    left: 0px;
    top: 0px;

    .controller {
        float: left;
        text-align: left;
        padding: 10px;
        font-size: 0px;

        .item {
            margin-right: 5px;
            overflow: hidden;
            display: inline-block;
            vertical-align: middle;
        }
    }
}
</style>