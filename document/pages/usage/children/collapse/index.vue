<template>
    <document>
        <q-title :level="1" colorful>收缩面板 <strong>Collapse</strong></q-title>

        <q-title :level="2">{{$t("common.usage.preview")}}</q-title>

        <example></example>

        <q-title :level="2">{{$t("common.usage.usage")}}</q-title>

        <q-footnote>请点击上方窗口的 "查看源码"</q-footnote>

        <codeblock>
            &lt;q-collapse title=&quot;内置样式&quot;&gt;
                &lt;q-text&gt;Lorem ipsum dolor sit amet consectetur adipisicing elit.&lt;/q-text&gt;
            &lt;/q-collapse&gt;
        </codeblock>

        <q-title :level="2">{{$t("common.usage.property")}}</q-title>

        <property-block>
            <property-item
                name="title"
                definition="收缩面板标题，设置该属性时即使用默认样式（标题 + icon 指示器）。如果不满足需求，可不设置该属性，而自己实现任意布局和效果（详见上方源码）"
                values="String"
            >
            </property-item>

            <property-item
                name="title-level"
                definition="标题等级，默认使用 3 级标题。"
                values="String"
            >
            </property-item>

            <property-item
                name="value"
                definition="是否展开（v-model）"
                defaults="false"
                values="Boolean"
            >
            </property-item>
        </property-block>

    </document>
</template>

<script>
import example from "./example/index.vue";

export default {
    components: {
        example
    }
}
</script>