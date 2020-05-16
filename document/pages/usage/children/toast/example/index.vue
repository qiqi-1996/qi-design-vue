<i18n src="./example.toast.i18n.json"></i18n>

<template>
    <window class="window" source="toast">
        <q-text>{{ $t(randomQuestion()) }}</q-text>
        <q-footnote v-html="$t('tips')"></q-footnote>
        <q-button type="primary" @click="duang(true)">{{ $t("yes") }}</q-button>
        <q-button @click="duang(false)">{{ $t("no") }}</q-button>
    </window>
</template>

<style lang="less" scoped>
.window {
    text-align: center;

    .q-button {
        width: 96px;
        margin: 0px 8px;
    }
}
</style>

<script>
export default {
    methods: {
        randomQuestion(){
            if(Math.random()>0.5){
                return "dog"
            }else{
                return "cat"
            }
        },
        duang(liked){
            if(liked){
                this.$qidesign.toast(this.$t("me-too"));
            }else{
                this.$qidesign.toast(this.$t("me-neither"));
            }
        }
    }
}
</script>