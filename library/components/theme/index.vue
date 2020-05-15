<template>
    <span :class="className">
        <slot></slot>
    </span>
</template>

<script>
import mixins from "@qiqi1996/qi-design-vue/core/mixins.js";
export default {
    mixins: [mixins],
    props: {
        theme: {
            type: String,
            // default: "light"
        },
        color: {
            type: String,
            // default: "poe"
        }
    },
    data(){
        return {
            meta: {
                name: "theme"
            }
        }
    },
    computed: {
        className(){
            return this.computeClass({});
        }
    }
}
</script>