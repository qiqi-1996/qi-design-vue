<template>
    <window source="collapse">
        <q-panel class="category" border>
            <q-collapse title="内置样式">
                <q-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quibusdam quo. Eum, corrupti. Suscipit, numquam nam voluptatem soluta, tenetur eos consequuntur natus, nesciunt facere similique id consequatur dignissimos itaque laudantium.</q-text>
            </q-collapse>
        </q-panel>

        <q-panel class="category" border>
            <q-badge value="CLICK ME">
                <q-button type="primary" @click="toggleCollapse">自定义样式</q-button>
            </q-badge>
            <q-collapse :value="isopen">
                <q-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quibusdam quo. Eum, corrupti. Suscipit, numquam nam voluptatem soluta, tenetur eos consequuntur natus, nesciunt facere similique id consequatur dignissimos itaque laudantium.</q-text>
            </q-collapse>
        </q-panel>

        
    </window>
</template>

<style lang="less" scoped>
@import "~@/core/standard.less";

.q-title {
    margin: 0px;
    padding: 0px;
}

.q-text {
    margin: 0px;
    margin-top: @grid;
}

.category {
    width: 400px;
    padding: 2*@grid;
    margin: @grid;
}
</style>

<script>
export default {
    data(){
        return {
            isopen: true
        }
    },
    methods: {
        toggleCollapse(){
            this.isopen = !this.isopen
        }
    }
}
</script>