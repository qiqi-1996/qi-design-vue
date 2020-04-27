<template>
    <document>
        <q-title :level="1" colorful>徽章 <strong>Badge</strong></q-title>

        <q-title :level="2">预览</q-title>

        <window class="window">
            <q-text>感谢使用 Qi Design Vue</q-text>
            <q-footnote>当前版本：{{version}}</q-footnote>
            <q-badge type="primary" value="NEW" color="enjolras">
                <q-button>检查更新</q-button>
            </q-badge>
        </window>

        <q-title :level="2">使用方式</q-title>

        <codeblock>
            &lt;q-badge value=&quot;NEW&quot; type=&quot;primary&quot; position=&quot;left-top&quot;&gt;
                &lt;!-- 可包裹几乎任意元素 --&gt;
            &lt;/q-badge&gt;
        </codeblock>

        <property-block>
            <property-item
                name="value"
                definition="徽章显示的内容"
                values="String"
            >
                <q-badge value="Badge">
                    <q-button>Useless Btn</q-button>
                </q-badge>
            </property-item>

            <property-item
                name="type"
                definition="徽章类型"
                defaults="default"
                :values="['default', 'primary', 'dot']"
            >
                <q-badge type="primary" value="Badge">
                    <q-button>Useless Btn</q-button>
                </q-badge>
                <q-badge type="dot">
                    <q-button>Useless Btn</q-button>
                </q-badge>
            </property-item>

            <property-item
                name="position"
                definition="徽章位置"
                defaults="right-top"
                :values="['left-top', 'right-top', 'left-bottom', 'right-bottom']"
            >
                <q-badge value="Badge" position="left-top">
                    <q-button>Useless Btn</q-button>
                </q-badge>
                <q-badge value="Badge" position="right-top">
                    <q-button>Useless Btn</q-button>
                </q-badge>
                <q-badge value="Badge" position="left-bottom">
                    <q-button>Useless Btn</q-button>
                </q-badge>
                <q-badge value="Badge" position="right-bottom">
                    <q-button>Useless Btn</q-button>
                </q-badge>
            </property-item>

            <property-item
                name="show"
                definition="是否可见"
                defaults="true"
                values="Boolean"
            >
            </property-item>

        </property-block>

    </document>
</template>

<style lang="less" scoped>
@import "~@/core/standard.less";

.window {
    padding-left: 6*@grid;
    padding-right: 6*@grid;

    text-align: center;
    .q-button {
        width: 120px;
    }
}

.q-badge {
    margin: @grid;
}
</style>

<script>
export default {
    data(){
        return {
            version: __VERSION__
        }
    }
}
</script>