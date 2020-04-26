<template>
    <q-panel>
        <table class="property-block-container">
            <tr>
                <th style="width: 80px;"><q-title mode="single" :level="4" colorful>事件名</q-title></th>
                <th><q-title mode="single" :level="4" colorful>释义</q-title></th>
                <th><q-title mode="single" :level="4" colorful>回调参数</q-title></th>
            </tr>
            <slot></slot>
        </table>
    </q-panel>
</template>

<style lang="less" scoped>
@import "~@/core/standard.less";

.property-block-container {

    th {
        padding: 3*@grid;
        // width: 20%;
        text-align: left;
        .q-title {
            margin: 0px;
        }
    }

    /deep/ td {
        padding: 0px 3*@grid;
        // width: 20%;
        text-align: left;
    }
}
</style>