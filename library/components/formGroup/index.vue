<template>
    <span :class="className"><slot></slot></span>
</template>

<script>
import mixins from "@/core/mixins.js";

export default {
    mixins: [mixins],
    model: {
        event: "change"
    },
    props: {
        value: {}
    },
    data(){
        return {
            meta: {
                id: null,
                name: "form-group"
            },
            type: "",
            data: ""
        }
    },
    computed: {
        className(){
            return this.computeClass({});
        }
    },
    methods: {
        initValueType(type){
            if(this.type){
                if(this.type!=type){
                    return false;
                }
                return true;
            }
            this.type = type
            switch(type){
                case "set":
                    this.data = new Set();
            }
            return true;
        },
        setValue(value){
            switch(this.type){
                case "value":
                    // TODO
                case "set":
                    this.data.add(value)
                    break;
            }
            this.$emit("change", Array.from(this.data));
        },
        deleteValue(value) {
            switch(this.type){
                case "value":
                    // TODO
                case "set":
                    this.data.delete(value)
                    break;
            }
            this.$emit("change", Array.from(this.data));
        },
        hasValue(value){
            switch(this.type){
                case "value":
                    // TODO
                case "set":
                    return this.data.has(value)
                    break;
            }
        }
    }
}
</script>