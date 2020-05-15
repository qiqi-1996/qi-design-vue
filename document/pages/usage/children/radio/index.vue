<template>
    <document>
        <q-title :level="1" colorful>单选框 <strong>Radio</strong></q-title>

        <q-title :level="2">预览</q-title>

        <window class="window">
            <q-radio value="1" v-model="radio" default>Radio 1</q-radio>
            <q-radio value="2" v-model="radio">Radio 2</q-radio>
            <q-radio value="3" v-model="radio">Radio 3</q-radio>
            <q-radio value="4" v-model="radio" disable>Radio 4</q-radio>
        </window>

        <q-title :level="2">使用方法</q-title>

        <codeblock lang="html">
            &lt;q-radio value=&quot;1&quot; v-model=&quot;radio&quot; default&gt;Radio 1&lt;/q-radio&gt;
            &lt;q-radio value=&quot;2&quot; v-model=&quot;radio&quot;&gt;Radio 2&lt;/q-radio&gt;
            &lt;q-radio value=&quot;3&quot; v-model=&quot;radio&quot;&gt;Radio 3&lt;/q-radio&gt;
            &lt;q-radio value=&quot;4&quot; v-model=&quot;radio&quot; disable&gt;Radio 4&lt;/q-radio&gt;
        </codeblock>

        <q-text>通过 <strong>v-model</strong> 绑定至同一个变量，并提供 <strong>value</strong> 作为选中的值，即可实现单选的效果。</q-text>

        <q-title :level="2">属性</q-title>

        <property-block>

            <property-item
                name="default"
                definition="默认选中"
                defaults="false"
                values="Boolean"
            >
                <q-radio default>默认选中</q-radio>
            </property-item>

            <property-item
                name="disable"
                definition="禁用状态"
                defaults="false"
                values="Boolean"
            >
                <q-radio disable>禁用</q-radio>
            </property-item>

            <property-item
                name="value"
                definition="选项值"
                defaults=""
                values="Any"
                required
            >
            </property-item>

        </property-block>

        <q-title :level="2">事件</q-title>

        <event-block>
            <event-item
                name="change"
                definition="状态改变"
                :values="['Boolean - 是否选中']"
            ></event-item>
        </event-block>

    </document>
</template>

<style lang="less" scoped>
@import "~@qiqi1996/qi-design-vue/core/standard.less";

.window {
    .q-radio { 
        margin: 0px @grid;
    }
}
</style>

<script>
export default {
    data(){
        return {
            radio: ""
        }
    },
    methods: {
        handleChange(value){
            console.log(value);
        }
    }
}
</script>