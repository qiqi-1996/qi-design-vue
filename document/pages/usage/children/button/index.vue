<template>
    <document>
        <q-title :level="1" colorful>按钮 <strong>Button</strong></q-title>

        <q-title :level="2">预览</q-title>

        <window class="window" style="text-align: center;">
            <q-title :level="3">Do you wanna build an APP?</q-title>
            <q-button icon="close" style="width: 120px">Button No</q-button>
            <q-button icon="correct" style="width: 120px" type="primary">Button Yes</q-button>
        </window>

        <q-title :level="2">使用方法</q-title>

        <codeblock lang="html">
            &lt;q-button type=&quot;primary&quot; icon=&quot;link&quot; href=&quot;https://github.com&quot; round disable&gt;Button&lt;/q-button&gt;
            &lt;!-- 一个主要样式、圆角、带有 link 图标，且点击后跳转网页，但是被禁用了的，渲染为 a 标签的按钮示例 --&gt;
        </codeblock>

        <q-text>Button 组件可接收通用的 DOM 事件，例如（click）。组件库提供的可用属性也在下表提供，此处不再赘述。需要注意的是当使用了 <strong>href</strong> 属性时，按钮本身的样式不会有变化，但是自身会基于 a 元素而渲染，从而应用 HTML 语义。</q-text>

        <q-title :level="2">属性</q-title>

        <property-block>
            <property-item
                name="type"
                definition="按钮的类型，将被渲染为 button 元素"
                defaults="default"
                :values="['default', 'primary']"
            >
                <q-button type="default">default</q-button>
                <q-button type="primary">primary</q-button>
            </property-item>

            <property-item
                name="href"
                definition="点击后直接跳转到链接，将被渲染为 a 元素"
                values="String"
            >
                <q-button icon="link" href="https://github.com">Github</q-button>
            </property-item>
            
            <property-item
                name="icon"
                definition="前置图标"
                values="详见 Icon 组件"
            >
                <q-button icon="trash">icon</q-button>
            </property-item>

            <property-item
                name="round"
                definition="圆角按钮"
                defaults="false"
                values="Boolean"
            >
                <q-button round>round</q-button>
            </property-item>

            <property-item
                name="size"
                definition="组件尺寸"
                defaults="medium"
                :values="['small', 'large']"
            >
                <q-button size="small">small</q-button>
                <q-button size="medium">medium</q-button>
                <q-button size="large">large</q-button>
            </property-item>

            <property-item
                name="busy"
                definition="忙碌状态"
                defaults="false"
                values="Boolean"
            >
                <q-button busy>busy</q-button>
            </property-item>

            <property-item
                name="disable"
                definition="禁用状态"
                defaults="false"
                values="Boolean"
            >
                <q-button disable>disable</q-button>
            </property-item>

        </property-block>

        <q-title :level="2">事件</q-title>

        <event-block>
            <event-item comment="没有特殊事件"></event-item>
        </event-block>

    </document>
</template>

<style lang="less" scoped>
@import "~@/core/standard.less";

.window {
    .q-button {
        margin: @grid;
    }
}

.q-button {
    margin: @grid;
}
</style>