<i18n src="./example.popover.i18n.json"></i18n>

<template>
    <window>
        <div class="item">
            <q-text>{{ $t("content") }}</q-text>
            <q-popover
                mode="click"
                position="top"
                width="200px"
                :title="$t('title')"
                :text="$t('content')"
                :confirmText="$t('confirm')"
                :cancelText="$t('cancel')"
            >
                <q-button type="primary">{{ $t("container") }}</q-button>
            </q-popover>
        </div>
    </window>
</template>

<style lang="less" scoped>
@import "~@/core/standard.less";

.item {

    .q-text {
        margin-right: 4*@grid;
    }

    * {
        display: inline-block;
        vertical-align: middle;
    }

    .content {
        margin: @grid;
        width: 120px;
    }

}
</style>