<template>
    <window class="window" source="switch">
        <q-title :level="3">The Spider Man Suit Options Panel</q-title>
        <q-panel secondary>
            <div class="item">
                <q-text>Training Wheels Protocol</q-text>
                <q-switch v-model="twp"></q-switch>
            </div>
            <div class="item">
                <q-text>Instant Kill Mode</q-text>
                <q-switch v-model="ikm" :disable="twp"></q-switch>
            </div>
        </q-panel>
    </window>
</template>

<style lang="less" scoped>
@import "~@qiqi1996/qi-design-vue/core/standard.less";

.q-button {
    margin: @grid;
}

.window {
    .item {
        overflow: hidden;
        .q-text {
            margin: @grid;
            margin-right: 4*@grid;
            float: left;
        }

        .q-switch {
            float: right;
            margin-top: 6px;
        }
    }

    .q-panel {
        padding: @grid;
        border-radius: 5px;
    }
}
</style>

<script>
export default {
    data(){
        return {
            twp: true,
            ikm: false
        }
    }
}
</script>