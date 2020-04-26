<template>
    <div :class="['page', darkmode?'darkmode':'']">
        <q-theme :theme="darkmode?'dark':'light'" :color="color">
            <q-panel secondary class="panel">
                <span class="option-darkmode">
                    <q-text>暗夜模式</q-text><q-switch v-model="darkmode"></q-switch>
                </span>
                <span class="option-darkmode">
                    <q-text>应用主题</q-text>
                    <q-select @change="handleColorChange">
                        <q-select-item value="poe" text="爱伦坡">
                            <div class="color poe"></div>爱伦坡
                        </q-select-item>
                        <q-select-item value="enjolras" text="Enjolras">
                            <div class="color enjolras"></div>Enjolras
                        </q-select-item>
                        <q-select-item value="starrynight" text="星月夜">
                            <div class="color starrynight"></div>星月夜
                        </q-select-item>
                        <q-select-item value="sunflower" text="向日葵">
                            <div class="color sunflower"></div>向日葵
                        </q-select-item>
                    </q-select>
                </span>
            </q-panel>
            <components></components>
        </q-theme>
    </div>
</template>

<style lang="less" scoped>
@import "~@/core/standard.less";

.page {
    width: 100%;
    height: 100%;
}

.darkmode {
    background: #000;
}

.q-theme {
    display: block;
    padding: 2*@grid;
}

.panel {
    padding: 2*@grid;
    margin-bottom: 2*@grid;

    .option-darkmode {
        * {
            display: inline-block;
            vertical-align: middle;
            margin: 0px;
            margin-right: @grid;
        }
    }

    .color {
        width: 8px;
        height: 8px;
        border-radius: 4px 0px;
        vertical-align: middle;
    }

    .poe {
        background-color: @color-poe;
    }
    .sunflower {
        background-color: @color-sunflower;
    }
    .starrynight {
        background-color: @color-starrynight;
    }
    .enjolras {
        background-color: @color-enjolras;
    }
}

</style>

<script>
import components from "../playground/components.vue";
export default {
    components: {
        components
    },
    data(){
        return {
            darkmode: false,
            color: "poe"
        }
    },
    methods: {
        handleColorChange(evt){
            this.color = evt.value;
        }
    }
}
</script>