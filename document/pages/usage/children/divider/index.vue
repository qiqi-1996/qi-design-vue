<template>
    <document>
        <q-title :level="1" colorful>分割线 <strong>Divider</strong></q-title>

        <q-title :level="2">预览</q-title>

        <window class="window">
            <q-footnote>横向分割线</q-footnote>
            <q-divider></q-divider>
            <q-footnote>纵向分割线</q-footnote>
            <q-divider type="vertical"></q-divider>
            <q-divider type="vertical"></q-divider>
            <q-divider type="vertical"></q-divider>
            <q-divider type="vertical"></q-divider>
            <q-divider type="vertical"></q-divider>
            <q-divider type="vertical"></q-divider>
            <q-divider type="vertical"></q-divider>
            <q-divider type="vertical"></q-divider>
            <q-divider type="vertical"></q-divider>
            <q-divider type="vertical"></q-divider>
            <q-divider type="vertical"></q-divider>
        </window>

        <q-title :level="2">使用方法</q-title>

        <codeblock lang="html">
            &lt;q-divider&gt;&lt;/q-divider&gt;
            &lt;!-- 横向分割线 --&gt;
            &lt;q-divider type=&quot;vertical&quot;&gt;&lt;/q-divider&gt;
            &lt;!-- 纵向分割线 --&gt;
        </codeblock>

        <q-title :level="2">属性</q-title>

        <property-block>
            <property-item
                name="type"
                definition="分割线类型（水平或垂直）"
                defaults="horizontal"
                :values="['horizontal', 'vertical']"
            ></property-item>
        </property-block>

    </document>
</template>

<style lang="less" scoped>
@import "~@qiqi1996/qi-design-vue/core/standard.less";

.window {
    width: 300px;
    height: 150px;

    .type-vertical {
        height: 16px;
        display: inline-block;
        vertical-align: middle;
        margin-right: @grid;
    }
}

</style>