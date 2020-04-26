<template>
    <document>
        <q-title :level="1" colorful>安装与使用</q-title>

        <q-title :level="2">1. 推荐：包管理器与构建工具</q-title>

        <q-text colorful>
            通过包管理器和构建工具可以更方便的维护项目，以 NPM 包管理器为例：通过命令 <strong>npm install --save @qiqi1996/qui-vue</strong> 将组件库安装并保存依赖。然后，使用下列代码在项目的入口文件中引入并注册组件库。
        </q-text>

        <q-footnote>当前为测试阶段，暂未发布到包管理平台</q-footnote>

        <codeblock lang="javascript">
            import Vue from "vue";
            import QuiVue from "@qiqi1996/qui-vue";
            
            Vue.use(QuiVue);
        </codeblock>

        <q-title :level="2">2. CDN</q-title>

        <q-footnote>暂无可用CDN</q-footnote>

        <q-title :level="2">3. 直接引用</q-title>

        <q-button :href="`./qui-vue@${version}.zip`" icon="download" type="primary" size="large">直接下载 qui-vui@{{version}}.zip</q-button>

        <q-text colorful>
            下载完成后解压到项目中进行引用即可。
        </q-text>

    </document>
</template>

<style lang="less" scoped>
@import "~@/core/standard.less";
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