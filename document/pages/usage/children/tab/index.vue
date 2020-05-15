<template>
    <document>
        <q-title :level="1" colorful>选项卡 <strong>Tab</strong></q-title>

        <q-title :level="2">预览</q-title>

        <window class="window">
            <q-tab value="1">
                <q-tab-item value="1">Awful</q-tab-item>
                <q-tab-item disable>Bug</q-tab-item>
                <q-tab-item>Can't</q-tab-item>
                <q-tab-item>Debug</q-tab-item>
                <q-tab-item>Error</q-tab-item>
                <q-tab-item>Failed</q-tab-item>
                <q-tab-item>Gross</q-tab-item>
            </q-tab>
            <q-panel secondary>
                <q-icon name="loading" animation="rotate" size="24"></q-icon>
                <q-footnote>Don't waste your time, this will never loaded. <br>It's a fake loading that it exists just for a good looking.</q-footnote>
            </q-panel>
        </window>

        <q-title :level="2">使用方法</q-title>

        <codeblock lang="html">
            &lt;q-tab v-model=&quot;currentTabValue&quot; @change=&quot;handleTabChange&quot;&gt;
                &lt;q-tab-item value=&quot;1&quot;&gt;A&lt;/q-tab-item&gt;
                &lt;q-tab-item value=&quot;2&quot;&gt;B&lt;/q-tab-item&gt;
                &lt;q-tab-item value=&quot;3&quot;&gt;C&lt;/q-tab-item&gt;
            &lt;/q-tab&gt;
        </codeblock>

        <q-title :level="2">Tab 属性</q-title>

        <property-block>
            <property-item
                name="value"
                definition="当前激活的选项卡的 Value 值，支持通过 v-model 取值和赋值。"
                values="Any"
            ></property-item>

            <property-item
                name="size"
                definition="选项卡尺寸"
                defaults="normal"
                :values="['small', 'normal']"
            >
                <q-tab size="small">
                    <q-tab-item>Tab A</q-tab-item>
                    <q-tab-item>Tab B</q-tab-item>
                    <q-tab-item>Tab C</q-tab-item>
                </q-tab>
            </property-item>
        </property-block>

        <q-title :level="2">Tab Item 属性</q-title>

        <property-block>
            <property-item
                name="value"
                definition="选项卡的标识值，需在 Tab 内唯一。"
                values="Any"
            ></property-item>
            <property-item
                name="disable"
                definition="是否禁用选项卡"
                defaults="false"
                values="Boolean"
            ></property-item>
        </property-block>

    </document>
</template>

<style lang="less" scoped>
@import "~@qiqi1996/qi-design-vue/core/standard.less";

.window {
    width: 450px;

    .q-panel {
        margin-top: 2*@grid;
        text-align: center;
        padding: @grid;
        border-radius: 5px;
    }

    .q-icon {
        font-size: 24px;
        margin: @grid;
    }

    .q-footnote {
        margin: 0px;
    }
}
</style>