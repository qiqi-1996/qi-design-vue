<i18n src="./example.avatar.i18n.json"></i18n>

<template>
    <window class="window" source="avatar">
        <q-avatar src="./avatar.png" shape="circle" size="large"></q-avatar>
        <q-text mode="single"><strong>{{ $t("username") }}</strong></q-text>
        <q-footnote>{{ $t("description") }}</q-footnote>
        <q-button color="enjolras" type="primary">{{ $t("logout") }}</q-button>
    </window>
</template>

<style lang="less" scoped>
@import "~@qiqi1996/qi-design-vue/core/standard.less";

.window {
    width: 200px;
    text-align: center;

    .q-avatar {
        display: inline-block;
        margin-top: 4*@grid;
        box-shadow: @color-light-secondary-background 0px 4px 0px 0px;
    }

    .q-button {
        width: 100%;
        margin-top: 4*@grid;
    }
}
</style>