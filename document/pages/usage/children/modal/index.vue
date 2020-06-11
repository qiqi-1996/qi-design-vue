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
                "en": ()=>import("./modal.en.md"),
                "zh": ()=>import("./modal.zh.md"),
            }
        }
    }
}
</script>