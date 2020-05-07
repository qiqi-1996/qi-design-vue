<i18n src="./property.i18n.json"></i18n>
<template>
    <q-panel>
        <table class="property-block-container">
            <tr>
                <th style="width: 80px;"><q-title mode="single" :level="4" colorful>{{ $t("property") }}</q-title></th>
                <th><q-title mode="single" :level="4" colorful>{{ $t("definition") }}</q-title></th>
                <th><q-title mode="single" :level="4" colorful>{{ $t("defaults") }}</q-title></th>
                <th><q-title mode="single" :level="4" colorful>{{ $t("type") }}</q-title></th>
                <th><q-title mode="single" :level="4" colorful>{{ $t("example") }}</q-title></th>
            </tr>
            <slot></slot>
            <tr v-if="general" class="general" @click="toggleGeneral">
                <th style="width: 80px;" colspan="4">
                    <q-title mode="single" :level="4" colorful>{{ $t("common") }}</q-title>
                    <q-footnote style="margin: 0px; margin-top: 8px;">{{ $t("common-description") }}</q-footnote>
                </th>
                <th style="text-align: right;">
                    <q-icon name="right" :class="['general-expand', generalOpen?'active':'']"></q-icon>
                </th>
            </tr>
            <property-item
                v-if="general && generalOpen"
                name="theme"
                :definition="$t('common-theme')"
                defaults="light"
                :values="['light', 'dark']"
            >
                <router-link class="link" to="/usage/theme">{{ $t("common-details") }}<q-icon name="open"></q-icon></router-link>
            </property-item>
            <property-item
                v-if="general && generalOpen"
                name="color"
                :definition="$t('common-color')"
                defaults="poe"
                :values="['poe', 'starrynight', 'enjolras', 'sunflower']"
            >
                <router-link class="link" to="/usage/theme">{{ $t("common-details") }}<q-icon name="open"></q-icon></router-link>
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