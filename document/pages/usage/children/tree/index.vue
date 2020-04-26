<template>
    <document>
        <q-title :level="1" colorful>树形控件 <strong>Tree</strong></q-title>

        <q-title :level="2">预览</q-title>

        <window class="window">
            <q-tree
                v-model="TreeData"
            ></q-tree>
        </window>

    </document>
</template>

<style lang="less" scoped>
@import "~@/core/standard.less";

.window {
    width: 300px;

    /deep/ .q-text {
        .reset();
    }
}
</style>

<script>
export default {
    data(){
        return {
            TreeData: [
                {
                    text: "A",
                    children: [
                        {
                            text: "A1",
                            children: [
                                { text: "A11" },
                                {
                                    text: "A12",
                                    children: [
                                        { text: "A121" },
                                        { text: "A122" },
                                    ]
                                },
                                { text: "A13" },
                            ]
                        },
                        { text: "A2" },
                        { text: "A3" },
                    ]
                },
                {
                    text: "B",
                    children: [
                        { text: "B1" },
                        { text: "B2" },
                        { text: "B3" },
                    ]
                },
                {
                    text: "C",
                    children: [
                        { text: "C1" },
                        { text: "C2" },
                        { text: "C3" },
                    ]
                },
                {
                    text: "D",
                    children: []
                }
            ]
        }
    },
    methods: {

    }
}
</script>