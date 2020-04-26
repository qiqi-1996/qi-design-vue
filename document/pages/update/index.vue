<template>
    <page>
        <article class="container">
            <q-panel class="description" secondary>
                <q-footnote>此处的版本指代组件库版本，文档内容的更新将根据相关性合并到当前或下一个组件库版本的更新内容中。</q-footnote>
            </q-panel>

            <q-title :level="1" colorful>V0.0.2</q-title>
            <q-footnote>2020-04-26</q-footnote>
            <ul>
                <q-title :level="2">优化</q-title>
                <li>优化文档打包体积</li>
                <li>完善安装及使用文档</li>
                <q-title :level="2">修复</q-title>
                <li>因兼容问题，将 uuid 改为 shortid。</li>
                <li>修复 IE10 下的样式兼容问题</li>
            </ul>

            <q-divider></q-divider>

            <q-title :level="1" colorful>V0.0.1 <span>- Initial Release</span></q-title>
            <q-footnote>2020-04-26</q-footnote>
            <ul>
                <li>初始发布</li>
                <li>包含组件：Radio、Checkbox、Switch、Input、Button、Tab、Theme、Panel、Icon、Typography、Divider、Progress</li>
                <li>未开放组件：Select、Tree、Image</li>
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