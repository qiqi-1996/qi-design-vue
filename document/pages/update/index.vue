<template>
    <page>
        <article class="container">
            <q-panel class="description" secondary>
                <q-footnote>此处的版本指代组件库版本，文档内容的更新将根据相关性合并到当前或下一个组件库版本的更新内容中。</q-footnote>
                <q-footnote>设计规范修改、重构将提升 主版本号（Major Version Number）</q-footnote>
                <q-footnote>新增组件和特性将提升 子版本号（Minor Version Number）</q-footnote>
                <q-footnote>Bug 修复、样式调整将提升 修正版本号（Revision Number）</q-footnote>
            </q-panel>

            <q-title :level="1" colorful>Version 0.2.0</q-title>
            <!-- <q-footnote>2020-04-27</q-footnote> -->
            <ul>
                <q-title :level="3">新增</q-title>

                <q-title :level="3">变更</q-title>
                <li>优化文档首页呈现</li>
            </ul>

            <q-title :level="1" colorful>Version 0.1.0</q-title>
            <q-footnote>2020-04-27</q-footnote>
            <ul>
                <q-title :level="3">新增</q-title>
                <li>新增 Badge 组件和文档</li>
                <li>新增 春天（Inspired by 莫奈） 配色 </li>
                <q-title :level="3">修复</q-title>
                <li>修复 ColorBlock 组件在白昼模式下的样式问题</li>
                <li>完善文档更新说明</li>
                <q-title :level="3">变更</q-title>
                <li>变更文档页标题文案内容</li>
                <li>变更文档更新说明样式</li>
            </ul>

            <q-divider></q-divider>

            <q-title :level="1" colorful>Version 0.0.2</q-title>
            <q-footnote>2020-04-26</q-footnote>
            <ul>
                <q-title :level="3">优化</q-title>
                <li>优化文档打包体积</li>
                <li>完善安装及使用文档</li>
                <q-title :level="3">修复</q-title>
                <li>因兼容问题，将 uuid 改为 shortid。</li>
                <li>修复 IE10 下的样式兼容问题</li>
            </ul>

            <q-divider></q-divider>

            <q-title :level="1" colorful>Version 0.0.1 <span>- Initial Release</span></q-title>
            <q-footnote>2020-04-26</q-footnote>
            <ul>
                <li>初始发布</li>
                <li>包含组件：Radio、Checkbox、Switch、Input、Button、Tab、Theme、Panel、Icon、Typography、Divider、Progress</li>
                <li>未开放组件：Select、Tree、Image、ColorBlock</li>
            </ul>
        </article>
    </page>
</template>

<style lang="less" scoped>
@import "~@/core/standard.less";

.description {
    padding: @grid;
    margin-bottom: 4*@grid;
}

.container {
    width: 38.2%;
    min-width: 600px;
    margin: 5*@grid auto;
    padding-bottom: 4*@grid;
}

.q-title span {
    opacity: 0.75;
    font-size: 16px;
}

ul {
    margin-top: 4*@grid;

    li {
        margin: 2*@grid 0px;
        .font-text(2);
        list-style: circle;
    }
}

.q-divider {
    margin: 4*@grid;
}
</style>