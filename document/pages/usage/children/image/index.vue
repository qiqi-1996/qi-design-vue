<template>
    <markdown :i18n="i18n" :components="components"></markdown>
</template>

<script>
import example from "./example/index.vue";

export default {
    data(){
        return {
            i18n: {
                "en": ()=>import("./image.en.md"),
                "zh-CN": ()=>import("./image.zh-CN.md"),
            },
            components: {
                example
            },
        }
    }
}
</script>