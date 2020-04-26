<template>
    <tr v-if="comment" class="property-item-container">
        <td colspan="3"><q-footnote style="text-align: center;">{{comment}}</q-footnote></td>
    </tr>
    <tr v-else class="property-item-container">
        <td class="name"><q-text v-html="name"></q-text></td>
        <td class="definition"><q-text v-html="definition"></q-text></td>
        <td class="values" v-if="Array.isArray(values)">
            <span v-for="(val, index) in values" :key="index">
                <q-panel secondary>{{val}}</q-panel>
                <q-divider type="vertical"></q-divider>
            </span>
        </td>
        <td v-else class="values">{{values}}</td>
        <!-- <td class="example"><slot><q-footnote>...</q-footnote></slot></td> -->
    </tr>
</template>

<style lang="less" scoped>
@import "~@/core/standard.less";

.property-item-container {

    .q-panel {
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
        values: true
    },
    methods: {
        is(value, type){
            return (value.toLowerCase() === type.toLowerCase());
        }
    }
}
</script>