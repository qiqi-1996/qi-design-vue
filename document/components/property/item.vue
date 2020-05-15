<template>
    <tr v-if="comment" class="property-item-container">
        <td colspan="5"><q-footnote>{{comment}}</q-footnote></td>
    </tr>
    <tr v-else class="property-item-container">
        <td class="name"><q-text v-html="name"></q-text></td>
        <td class="definition"><q-text v-html="definition"></q-text></td>
        <td class="defaults">
            <q-text v-if="defaults!='None'" v-html="defaults"></q-text>
            <q-footnote v-else>{{defaults}}</q-footnote>
        </td>
        <td class="values" v-if="Array.isArray(values)">
            <span class="required"></span>
            <span v-for="(val, index) in values" :key="index">
                <q-panel class="tag" secondary>{{val}}</q-panel>
                <q-divider type="vertical"></q-divider>
            </span>
        </td>
        <td v-else class="values">
            <q-panel border class="required" v-show="required">
                <q-footnote style="margin: 0px;" mode="single">必需</q-footnote>
            </q-panel>
            {{values}}
        </td>
        <td class="example"><slot><q-footnote>...</q-footnote></slot></td>
    </tr>
</template>

<style lang="less" scoped>
@import "~@qiqi1996/qi-design-vue/core/standard.less";

.property-item-container {

    .tag {
        padding: @grid/2;
        border-radius: 4px;
        display: inline-block;
        vertical-align: middle;
    }

    .values {

        span {
            display: inline-block;
            margin: @grid/2;
        }

        span:last-of-type {
            .q-divider {
                display: none;
            }
        }

        .q-divider {
            display: inline-block;
            vertical-align: middle;
            margin-left: @grid/2;
            height: 8px;
        }

        .q-panel {
            position: relative;
            top: -2px;
            margin-right: @grid/2;
            display: inline-block;
            padding: @grid/2;
        }
    }

    .example {
        min-width: 80px;
    }
}
</style>

<script>
export default {
    props: {
        comment: String,
        name: String,
        definition: String,
        defaults: {
            default: "None"
        },
        values: true,
        required: Boolean
    },
    methods: {
        is(value, type){
            return (value.toLowerCase() === type.toLowerCase());
        }
    }
}
</script>