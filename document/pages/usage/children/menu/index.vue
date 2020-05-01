<i18n src="./i18n.json"></i18n>

<template>
    <document>
        <q-title :level="1" colorful>{{$t("title")}} <strong v-show="$i18n.locale!='en'">{{$t("id")}}</strong></q-title>

        <q-title :level="2">{{$t("common.usage.preview")}}</q-title>

        <example></example>

        <q-title :level="2">{{$t("common.usage.usage")}}</q-title>

        <q-footnote>请点击上方窗口的 "查看源码"</q-footnote>

        <q-title :level="2">{{$t("common.usage.property")}}</q-title>

        <property-block>

            <property-item
                name="data"
                definition="菜单数据"
                values="Object（详见 Data 详解）"
            >
            </property-item>

            <property-item
                name="open"
                definition="是否打开菜单（v-model）"
                defaults="false"
                values="Boolean | String"
            ></property-item>

            <property-item
                name="size"
                definition="菜单大小"
                defaults="normal"
                :values="['small', 'normal']"
            ></property-item>

            <property-item
                name="full"
                definition="菜单宽度是否与被包裹的元素等宽"
                values="Boolean"
            ></property-item>

        </property-block>

        <q-title :level="2">{{$t("common.usage.property")}} : Data</q-title>

        <codeblock lang="javascript">
            {
                text: String
                // 菜单标题

                value: String
                // 菜单标识 ID

                icon: String
                // 菜单 Icon
                
                note: String
                // 菜单附注

                is: Vue Components
                // 使用 &lt;component :is=&quot;is&quot;&gt;&lt;/component&gt; 呈现内容

                children: [ {} ...]
                // 子菜单，数组成员与本对象的结构一致

            }
        </codeblock>

        <q-title :level="2">{{$t("common.usage.events")}}</q-title>

        <event-block>
            <event-item
                name="select"
                definition="当菜单项被点击选择"
                values="data - 该参数内容等同于当前被选择的菜单项的 data { text, value, icon ... } 对象"
            ></event-item>
        </event-block>

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