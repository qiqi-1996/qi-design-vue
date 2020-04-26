<template>
    <document>
        <q-title :level="1" colorful>开关 <strong>Switch</strong></q-title>

        <q-title :level="2">预览</q-title>

        <window class="window">
            <q-title :level="3">The Spider Man Suit Options Panel</q-title>
            <q-panel secondary>
                <div class="item"><q-text>Training Wheels Protocol</q-text><q-switch v-model="twp"></q-switch></div>
                <div class="item"><q-text>Instant Kill Mode</q-text><q-switch v-model="ikm" :disable="twp"></q-switch></div>
            </q-panel>
        </window>

        <q-title :level="2">使用方法</q-title>

        <codeblock lang="html">
            &lt;q-switch&gt;&lt;/q-switch&gt;
            &lt;!-- 关闭状态 --&gt;

            &lt;q-switch :value=&quot;true&quot;&gt;&lt;/q-switch&gt;
            &lt;!-- 打开状态 --&gt;

            &lt;q-switch disable&gt;&lt;/q-switch&gt;
            &lt;!-- 关闭且禁用状态 --&gt;

            &lt;q-switch disable :value=&quot;true&quot;&gt;&lt;/q-switch&gt;
            &lt;!-- 打开且禁用状态 --&gt;
        </codeblock>

        <q-title :level="2">属性</q-title>

        <property-block>
            <property-item
                name="size"
                definition="组件尺寸"
                defaults="medium"
                :values="['small', 'medium', 'large']"
            >
                <q-switch size="small"></q-switch>
                <q-switch size="medium"></q-switch>
                <q-switch size="large"></q-switch>
            </property-item>

            <property-item
                name="value"
                definition="激活状态"
                defaults="false"
                values="Boolean"
            >
                <q-switch value></q-switch>
            </property-item>

            <property-item
                name="disable"
                definition="禁用状态"
                defaults="false"
                values="Boolean"
            >
                <q-switch disable></q-switch>
            </property-item>

        </property-block>


    </document>
</template>

<style lang="less" scoped>
@import "~@/core/standard.less";

.q-button {
    margin: @grid;
}

.window {
    .item {
        overflow: hidden;
        .q-text {
            margin: @grid;
            margin-right: 4*@grid;
            float: left;
        }

        .q-switch {
            float: right;
            margin-top: 6px;
        }
    }

    .q-panel {
        padding: @grid;
        border-radius: 5px;
    }
}
</style>

<script>
export default {
    data(){
        return {
            twp: true,
            ikm: false
        }
    }
}
</script>