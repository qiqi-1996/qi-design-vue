<i18n src="./i18n.json"></i18n>
<template>
    <document>
        <q-title :level="1" colorful>{{ $t("h1#1")}}</q-title>

        <q-title :level="2">{{ $t("h2#1") }} <span style="font-size: 16px; opacity: 0.75;">{{ $t('recommand') }}</span></q-title>

        <q-text colorful v-html="$t('h2#1-p#1')">
        </q-text>

        <codeblock lang="javascript">
            import Vue from "vue";
            import QiDesignVue from "@qiqi1996/qi-design-vue";
            
            Vue.use(QiDesignVue);
        </codeblock>

        <q-title :level="2">直接引用</q-title>

        <q-button :href="`./qi-design-vue@${version}.zip`" icon="download" type="primary" size="large">直接下载 qi-design-vue@{{version}}.zip</q-button>

        <q-text colorful>
            下载完成后解压到项目中，按下述方式进行引用即可：
        </q-text>

        <codeblock lang="html">
            &lt;!-- 通过 HTML 方式引入组件库 --&gt;
            &lt;link rel=&quot;stylesheet&quot; href=&quot;path/to/qi-deisgn-vue.css&quot;&gt;
            &lt;script src=&quot;vue.js&quot;&gt;&lt;/script&gt;
            &lt;script src=&quot;path/to/qi-design-vue.js&quot;&gt;&lt;/script&gt;
        </codeblock>

        <codeblock lang="javascript">
            // 如果你使用了构建工具，也可以在入口文件中引入
            // 并且 Babel 需要开启 modules 转换
            import Vue from "vue";
            import QiDesignVue from "path/to/qi-design-vue.js";
            import path/to/qi-design-vue.css";
        </codeblock>

        <codeblock lang="javascript">
            // 最后在 Vue 中注册即可使用
            Vue.use(QiDesignVue);

            var vm = new Vue({
                el: "#app"
                ...
            });
        </codeblock>

    </document>
</template>

<style lang="less" scoped>
@import "~@/core/standard.less";

.q-button {
    margin-bottom: 2*@grid;
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