<i18n src="./example.mask.i18n.json"></i18n>

<template>
    <q-mask name="window-mask" noclose>
        <div class="center-block">
            <q-icon class="loading" name="loading" animation="rotate"></q-icon>
            <q-button type="primary" @click="doClose('window-mask')">{{ $t("click-to-close") }}</q-button>
        </div>

        <window class="window" slot="wrap" source="mask">
            <q-mask name="fullscreen-mask"></q-mask>
            <q-button @click="doOpen('fullscreen-mask')">{{ $t("open-fullscreen") }}</q-button>
            <q-button @click="doOpen('window-mask', true)">{{ $t("open-window") }}</q-button>
        </window>

    </q-mask>
</template>

<style lang="less" scoped>
@import "~@qiqi1996/qi-design-vue/core/standard.less";

.window {
    width: 320px;
    position: relative;

    .q-button {
        display: block;
        width: 100%;
        margin: @grid auto;
    }

    .window-mask {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

}

.center-block {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .loading {
        font-size: 24px;
        margin-bottom: 2*@grid;
    }
}
</style>

<script>
export default {
    methods: {
        doOpen(name, noclose) {
            this.$qidesign.open(name);
            if (!noclose) {
                this.$qidesign.toast(this.$t("click-anywhere-to-close"));
            }
        },
        doClose(name){
            this.$qidesign.close(name);
        }
    }
};
</script>