<template>
    <div class="page">
        <slot></slot>
    </div>
</template>

<style lang="less" scoped>
@import "~@qiqi1996/qi-design-vue/core/standard.less";

.page {
    padding-bottom: 96px;
}

@media screen and (max-width: @responsive-mobile) {
    .page {
        padding-bottom: 5*@grid;
    }
}

</style>