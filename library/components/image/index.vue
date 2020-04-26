<template>
    <img :class="className" :src="imageSrc" />
</template>

<style lang="less" scoped>
@import "~@/core/standard.less";

.q-image[class*="theme-dark"] {
    opacity: 0.7;
}
</style>

<script>
import mixins from "@/core/mixins.js";

export default {
    mixins: [mixins],
    props: {
        src: String,
        dark: String,
    },
    data(){
        return {
            meta: {
                name: "image"
            }
        }
    },
    computed: {
        className() {
            return this.computeClass({});
        },
        imageSrc() {
            if(this._theme == "dark" && this.dark){
                return this.dark;
            }else{
                return this.src;
            }
        }
    }
}
</script>