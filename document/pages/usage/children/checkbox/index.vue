<template>
    <document>
        <q-title :level="1" colorful>复选框 <strong>Checkbox</strong></q-title>

        <q-title :level="2">预览</q-title>

        <window class="window">
            <q-form-group v-model="checkbox">
                <q-checkbox value="A" default>Checkbox A</q-checkbox>
                <q-checkbox value="B">Checkbox B</q-checkbox>
                <q-checkbox value="C">Checkbox C</q-checkbox>
                <q-checkbox value="D" disable>Checkbox D</q-checkbox>
                <q-footnote>您的选择是：</q-footnote>
                <q-panel class="chosen" border v-for="(item, index) in checkbox" :key="index">{{item}}</q-panel>
            </q-form-group>
        </window>

        <q-title :level="2">使用方法</q-title>

        <codeblock lang="html">
            &lt;q-form-group v-model=&quot;checkbox&quot;&gt;
                &lt;q-checkbox value=&quot;A&quot; default&gt;Checkbox A&lt;/q-checkbox&gt;
                &lt;q-checkbox value=&quot;B&quot;&gt;Checkbox B&lt;/q-checkbox&gt;
                &lt;q-checkbox value=&quot;C&quot;&gt;Checkbox C&lt;/q-checkbox&gt;
                &lt;q-checkbox value=&quot;D&quot; disable&gt;Checkbox D&lt;/q-checkbox&gt;
            &lt;/q-form-group&gt;
        </codeblock>

        <q-text>
            复选框的使用与单选框略有不同，需要包裹一个外层组件 <strong>q-form-group</strong> 来接收多选的值。
        </q-text>

        <q-title :level="2">属性</q-title>

        <property-block>

            <property-item
                name="default"
                definition="默认选中"
                defaults="false"
                values="Boolean"
            >
                <q-checkbox default>默认选中</q-checkbox>
            </property-item>

            <property-item
                name="disable"
                definition="禁用状态"
                defaults="false"
                values="Boolean"
            >
                <q-checkbox disable>禁用</q-checkbox>
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

        <q-title :level="2">Checkbox 事件</q-title>

        <event-block>
            <event-item
                name="change"
                definition="状态改变"
                :values="['Boolean - 是否选中']"
            ></event-item>
        </event-block>

        <q-title :level="2">Form Group 事件</q-title>

        <q-text>以下为针对 Checkbox 组件 Form Group 的特定事件文档，此时 Form Group 会将自身管理的数据类型设置为 <strong>Set</strong>，但是回调时会处理成普通数组。</q-text>

        <event-block>
            <event-item
                name="change"
                definition="状态改变"
                :values="['Array - 所有选中的 Checkbox 的 value 值']"
            ></event-item>
        </event-block>

    </document>
</template>

<style lang="less" scoped>
@import "~@qiqi1996/qi-design-vue/core/standard.less";

.window {
    .q-checkbox {
        margin: 0px @grid;
    }

    .chosen {
        display: inline-block;
        vertical-align: middle;
        margin-left: @grid;
        padding: @grid;
    }
}
</style>

<script>
export default {
    data(){
        return {
            checkbox:null
        }
    },
    watch: {
        checkbox(value){
            console.log("v-model",value);
        }
    },
    methods: {
        handleGroupChange(value){
            console.log(value);
        }
    }
}
</script>