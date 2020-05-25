<i18n src="./example.input.i18n.json"></i18n>

<template>
    <window class="window" source="input">
        <q-title :level="2">{{ $t("title") }}</q-title>
        <q-input icon="user" :placeholder="$t('account')"></q-input>
        <br>
        <q-input icon="lock" :placeholder="$t('password')" type="password"></q-input>
        <br>
        <q-button>{{ $t("register") }}</q-button>
        <q-button type="primary" style="margin-left: 8px">{{ $t("login") }}</q-button>
    </window>
</template>

<style lang="less" scoped>
@import "~@qiqi1996/qi-design-vue/core/standard.less";

.window {
    padding: 4*@grid;
    text-align: center;

    .q-title {
        text-align: left;
        border: none;
        margin: 3*@grid 0px;
    }

    .q-input {
        width: 100%;
        margin: @grid 0px;
    }

    .q-button {
        width: 103px;
        margin-top: 2*@grid;
    }
}

.q-input {
    margin: @grid;
}
</style>