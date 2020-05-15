<template>
    <document>
        <q-title :level="1" colorful>输入框 <strong>Input</strong></q-title>

        <q-title :level="2">预览</q-title>

        <window class="window">
            <q-title :level="2">Login</q-title>
            <q-input icon="user" placeholder="account"></q-input>
            <br>
            <q-input icon="lock" placeholder="password" type="password"></q-input>
            <br>
            <q-button >Register</q-button>
            <q-button type="primary" style="margin-left: 8px">Login</q-button>
        </window>

        <q-title :level="2">使用方法</q-title>

        <codeblock lang="html">
            &lt;q-input size=&quot;small&quot; placeholder=&quot;小号输入框&quot;&gt;&lt;/q-input&gt;
            &lt;q-input size=&quot;small&quot; placeholder=&quot;小号输入框带图标&quot; icon=&quot;folder&quot;&gt;&lt;/q-input&gt;
            &lt;q-input placeholder=&quot;输入框&quot;&gt;&lt;/q-input&gt;
            &lt;q-input placeholder=&quot;带图标输入框&quot; icon=&quot;folder&quot;&gt;&lt;/q-input&gt;
        </codeblock>

        <q-title :level="2">属性</q-title>

        <property-block>
            <property-item
                name="size"
                definition="组件尺寸"
                defaults="medium"
                :values="['small', 'medium', 'large']"
            >
                <q-input size="small"></q-input>
                <q-input size="medium"></q-input>
                <q-input size="large"></q-input>
            </property-item>

            <property-item
                name="type"
                definition="类型"
                defaults="text"
                values="HTML 常规属性"
            >
                <q-input type="password" value="password"></q-input>
            </property-item>

            <property-item
                name="icon"
                definition="前缀图标"
                values="详见 Icon 组件"
            >
                <q-input icon="image"></q-input>
            </property-item>

            <property-item
                name="placeholder"
                definition="占位文本"
                values="String"
            >
                <q-input placeholder="placeholder"></q-input>
            </property-item>

            <property-item
                name="value"
                definition="输入内容（v-model）"
                values="String"
            >
                <q-input value="123"></q-input>
            </property-item>

            <property-item
                name="disable"
                definition="禁用状态"
                defaults="false"
                values="Boolean"
            >
                <q-input placeholder="禁用状态" disable></q-input>
            </property-item>

        </property-block>


    </document>
</template>

<style lang="less" scoped>
@import "~@qiqi1996/qi-design-vue/core/standard.less";

.window {
    padding: 4*@grid;
    text-align: center;

    .q-title {
        text-align: left;
        border: none;
        margin: 3*@grid 0px;
    }

    .q-input {
        width: 100%;
        margin: @grid 0px;
    }

    .q-button {
        width: 103px;
        margin-top: 2*@grid;
    }
}

.q-input {
    margin: @grid;
}
</style>