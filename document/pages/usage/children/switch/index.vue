<template>
    <markdown :i18n="i18n" :components="components"></markdown>
</template>

<script>
import example from "./example/index.vue";
export default {
    data(){
        return {
            components: { example },
            i18n: {
                "en": ()=>import("./switch.en.md"),
                "zh-CN": ()=>import("./switch.zh-CN.md"),
            }
        }
    }
}
</script>