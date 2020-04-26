<style lang="less" scoped>
@import "~@/core/standard.less";

.q-quote {
    position: relative;
    .font-text();
    .transition();

    /deep/ strong {
        font-weight: bolder;
    }
}

.q-quote[class*="block"] {
    padding: 2*@grid 3*@grid;
}

// .q-quote[class*="block"]::before {
//     content: "Quote";
//     opacity: 0.5;
//     font-size: 12px;
//     line-height: 12px;
//     padding: 2*@grid;
//     display: inline;
//     position: absolute;
//     top: -2*@grid;
//     left: 0px;
// }

.q-quote[class*="block"][class*="theme-light"][class*="color-poe"] {
    border-left: 2px solid @color-light-foreground;
    background: @color-light-secondary-background;
}

.q-quote[class*="block"][class*="theme-dark"][class*="color-poe"] {
    border-left: 2px solid @color-dark-foreground;
    background: @color-dark-secondary-background;
}

.q-quote[class*="mode-compact"] {
    .font-text(1);
}

.q-quote[class*="mode-normal"] {
    .font-text(2);
}

.q-quote[class*="theme-light"] {
    color: @color-light-foreground;
}

.q-quote[class*="theme-dark"] {
    color: @color-dark-foreground;
}

.q-quote-colors(@colorname){
    @varname: "color-@{colorname}";

    .q-quote[class*="theme-light"][class*=~"color-@{colorname}"] {
        border-left: 2px solid @@varname;
        background: @color-light-secondary-background;
    }

    .q-quote[class*="theme-dark"][class*=~"color-@{colorname}"] {
        border-left: 2px solid lighten(@@varname, @config-lighten);
        background: @color-dark-secondary-background;
    }
}

/******* Colors Apply *******/

.loop(@counter) when (@counter > 0) {
    .loop((@counter - 1));
    @colorname: extract(@color-list, @counter);
    
    .q-quote-colors(@colorname);
}
.loop(length(@color-list));

</style>

<script>
import mixins from "@/core/mixins.js";
import utils from "@/core/utils.js";

export default {
    render(createElement){
        return createElement(this.block?"blockquote":"quote", { "class": this.className }, this.$slots.default);

    },
    mixins: [mixins],
    props: {
        mode: {
            type: String,
            default: "normal",
            validator(value){
                return utils.validator(value).belongsTo("single", "compact", "normal")
            }
        },
        block: Boolean,
        colorful: Boolean
    },
    data(){
        return {
            meta: {
                name: "quote"
            }
        }
    },
    computed: {
        className(){
            return this.computeClass({
                mode: this.mode,
                block: this.block,
                colorful: this.colorful
            });
        }
    }
}
</script>