<template>
    <document>
        <q-title :level="1" colorful>面板 <strong>Panel</strong></q-title>

        <q-text>
            Panel 组件主要作为背景使用，在 QI Design Standard 中提供了<strong>主要背景</strong>和<strong>次级背景</strong>两种模式，通过 panel 组件可以很好的在<strong>明亮和暗夜模式</strong>中应用。
        </q-text>

        <q-text>
            例如，我们需要在白色背景下呈现一个浅灰色背景用于归纳元素，只有两种方法：1 是直接指定灰色的颜色值（例如：#E8E8E8），2 是通过覆盖半透明黑色（例如：rgba(0,0,0,0.09)）。在基于白色背景的明亮模式下这没有问题，但是如果我们直接将背景替换为黑色，方法 1 会直接出现一个高对比度的浅色背景块，而方法 2 则是半透明黑色覆盖在黑色上还是黑色。而 panel 组件则会在暗夜模式下使用半透明的白色作为次级背景来适配。
        </q-text>

        <q-text>
            此外，对于暗夜模式适配的最佳实践，我建议使用 &lt;theme&gt;&lt;panel&gt;&lt;/panel&gt;&lt;/theme&gt; 组件作为整个应用的根容器。
        </q-text>

        <q-title :level="2">预览</q-title>

        <window>

            <q-panel secondary style="padding: 16px; text-align: center;">
                <q-footnote>q-panel 组件主要用于作为背景使用，并自动响应主题的变化<br>请尝试文档页面当中的主题控制器来了解效果</q-footnote>
            </q-panel>

        </window>

        <q-title :level="2">属性</q-title>

        <property-block class="property-block">
            
            <property-item
                name="secondary"
                definition="是否使用次级背景"
                defaults="false"
                values="Boolean"
            >
                <q-panel secondary></q-panel>
            </property-item>

            <property-item
                name="border"
                definition="是否使用边框"
                defaults="false"
                values="Boolean"
            >
                <q-panel border></q-panel>
            </property-item>

            <property-item
                name="border"
                definition="强制次级背景使用纯色，而非半透明颜色"
                defaults="false"
                values="Boolean"
            >
                <q-panel secondary pure></q-panel>
            </property-item>

        </property-block>

    </document>
</template>

<style lang="less" scoped>
@import "~@qiqi1996/qi-design-vue/core/standard.less";

.property-block {
    .q-panel {
        margin: @grid;
        padding: 3*@grid;
        display: inline-block;
        vertical-align: middle;
    }
}
</style>