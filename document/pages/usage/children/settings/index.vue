<template>
    <markdown :i18n="i18n"></markdown>
</template>

<script>
export default {
    data(){
        return {
            i18n: {
                "en": ()=>import("./settings.en.md"),
                "zh-CN": ()=>import("./settings.zh-CN.md"),
            }
        }
    }
}
</script>