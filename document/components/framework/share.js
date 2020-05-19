import Vue from "vue";

const vm = new Vue({
    data() {
        return {
            layout: "default",
            // default | side-router
            layoutData: {
                title: "123"
            }
        }
    },
    methods: {
        doSideRouterBack() {
            this.$emit("side-router-back");
        }
    }
})

export default vm;