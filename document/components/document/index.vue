<template>
    <q-panel class="document-container">
        <slot></slot>
    </q-panel>
</template>

<style lang="less">
// 此处不使用 scoped 以降低该组件下的 CSS 权重

@import "~@qiqi1996/qi-design-vue/core/standard.less";

/******* Base *******/

.document-container {
    padding-bottom: 120px;

    h1 {
        .font-headline(2);
        margin-top: 4*@grid;
        margin-bottom: 4*@grid;
    }

    h2 {
        .font-title(2);
        margin-top: 4*@grid;
        margin-bottom: 4*@grid;
        padding-bottom: @grid;
        border-bottom: 1px solid @color-light-decorate;
    }

    h3, h4, h5, h6 {
        .font-subtitle(2);
        margin-top: 2*@grid;
        margin-bottom: 2*@grid;
    }

    p {
        .font-text(2);
        margin-top: 2*@grid;
        margin-bottom: 2*@grid;
    }

    img {
        text-align: center;
        max-width: 50%;
        max-height: 400px;
    }

    .center {
        text-align: center;
    }

    .center-block {
        display: block;
        margin: 0px auto;
    }
}

.document-container[class*="theme-dark"] {
    h2 {
        border-bottom: 1px solid @color-dark-decorate;
    }
}
</style>