<i18n src="./example.popover.i18n.json"></i18n>

<template>
    <window source="popover">
        <div class="item">
            <q-text>{{ $t("built-in-style") }}</q-text>
            <q-popover
                mode="click"
                position="top"
                width="200px"
                :title="$t('title')"
                :text="$t('content')"
                :confirmText="$t('confirm')"
                :cancelText="$t('cancel')"
            >
                <q-button type="primary">{{ $t("click-me") }}</q-button>
            </q-popover>
        </div>

        <div class="item">
            <q-text>{{ $t("customize-content") }}</q-text>
            <q-popover>
                <q-button>{{ $t("hover-me") }}</q-button>
                <div slot="content">
                    <q-image mode="cover" class="image" src="~document/assets/image-light.jpg"></q-image>
                    <q-footnote :level="6" v-html="$t('copyright')"></q-footnote>
                </div>
            </q-popover>
        </div>
    </window>
</template>

<style lang="less" scoped>
@import "~@qiqi1996/qi-design-vue/core/standard.less";

.item {

    .q-text {
        margin-right: 4*@grid;
    }

    * {
        display: inline-block;
        vertical-align: middle;
    }

    .q-popover {
        float: right;
        margin-top: 12px;
    }

    .content {

        .q-footnote {
            margin: 0px;
            margin-bottom: 2*@grid;
            text-align: center;
            width: 100%;
        }
        .image {
            width: 400px;
            height: 200px;
            margin-bottom: 2*@grid;
        }
    }


}
</style>