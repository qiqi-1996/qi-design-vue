<template>
    <markdown :i18n="i18n"></markdown>
</template>

<script>
export default {
    data(){
        return {
            i18n: {
                "en": ()=>import("./install.en.md"),
                "zh": ()=>import("./install.zh.md"),
            }
        }
    }
}
</script>