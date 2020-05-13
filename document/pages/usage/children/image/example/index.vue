<i18n src="./example.image.i18n.json"></i18n>

<template>
    <window class="window" source="image">
        <q-image class="theme-image" src="./theme_light.png" src-dark="./theme_dark.png"></q-image>
        <q-text>{{ $t("description") }}</q-text>
        <q-image class="image" src="./image_light.jpg" src-dark="./image_dark.jpg" mode="cover" style="width: 600px; height: 300px;"></q-image>
        <q-footnote v-html="$t('copyright')"></q-footnote>
    </window>
</template>

<style lang="less" scoped>
@import "~@/core/standard.less";

.window {
    width: 600px - 32px;
    text-align: center;
    padding-top: 6*@grid;
    padding-bottom: 0px;
}

.theme-image {
    width: 50px;
    height: 50px;
    margin: 2*@grid;
    margin-bottom: 0px;
}

.image {
    margin-left: -2*@grid;
}
</style>