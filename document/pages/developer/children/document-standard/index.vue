<template>
    <markdown :i18n="i18n"></markdown>
</template>

<script>
export default {
    data(){
        return {
            i18n: {
                "en": ()=>import("./document-standard.en.md"),
                "zh-CN": ()=>import("./document-standard.zh-CN.md"),
            }
        }
    }
}
</script>