<template>
    <q-panel>
        <table class="property-block-container">
            <tr>
                <th style="width: 80px;"><q-title mode="single" :level="4" colorful>属性名</q-title></th>
                <th><q-title mode="single" :level="4" colorful>释义</q-title></th>
                <th><q-title mode="single" :level="4" colorful>默认值</q-title></th>
                <th><q-title mode="single" :level="4" colorful>类型/可用值</q-title></th>
                <th><q-title mode="single" :level="4" colorful>示例</q-title></th>
            </tr>
            <slot></slot>
            <tr v-if="general" class="general" @click="toggleGeneral">
                <th style="width: 80px;" colspan="4">
                    <q-title mode="single" :level="4" colorful>通用属性</q-title>
                    <q-footnote style="margin: 0px; margin-top: 8px;">可通过文档页面中的主题控制器，预览样式属性的不同效果</q-footnote>
                </th>
                <th style="text-align: right;">
                    <q-icon name="right" :class="['general-expand', generalOpen?'active':'']"></q-icon>
                </th>
            </tr>
            <property-item
                v-if="general && generalOpen"
                name="theme"
                definition="主题模式，优先从父级继承。"
                defaults="light"
                :values="['light', 'dark']"
            >
                <router-link class="link" to="/usage/theme">详见 Theme 组件<q-icon name="open"></q-icon></router-link>
            </property-item>
            <property-item
                v-if="general && generalOpen"
                name="color"
                definition="控件颜色，优先从父级继承。"
                defaults="poe"
                :values="['poe', 'starrynight', 'enjolras', 'sunflower']"
            >
                <router-link class="link" to="/usage/theme">详见 Theme 组件<q-icon name="open"></q-icon></router-link>
            </property-item>
        </table>
    </q-panel>
</template>

<style lang="less" scoped>
@import "~@/core/standard.less";

.property-block-container {
    width: 100%;

    th {
        white-space: nowrap;
        padding: 2*@grid;
        // width: 20%;
        text-align: left;
        .q-title {
            margin: 0px;
        }
        background: @color-light-secondary-background;
    }

    .general {
        cursor: pointer;

        .general-expand {
            margin-top: 2*@grid;
            margin-right: 2*@grid;
        }

        .active {
            transform: rotate(90deg);
        }
    }

    /deep/ td {
        padding: 0px 3*@grid;
        // width: 20%;
        text-align: left;
    }

    .link {
        word-break: keep-all;
        white-space: nowrap;
        color: inherit;
        .q-icon {
            vertical-align: middle;
            margin-left: @grid/2;
        }
    }
}
</style>

<script>
export default {
    props: {
        general: {
            type: Boolean,
            default: true
        }
    },
    data(){
        return {
            generalOpen: false
        }
    },
    methods: {
        toggleGeneral(){
            this.generalOpen = !this.generalOpen;
        }
    }
}
</script>