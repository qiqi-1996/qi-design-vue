<style lang="less" scoped>
@import "~@/core/standard.less";

.q-title {
    .font-subtitle();
    .transition();

    /deep/ strong, /deep/ span {
        font-weight: lighter
    }
}

.q-title[class*="mode-single"]{
    .font-subtitle(0);
}

.q-title[class*="mode-compact"] {
    .font-subtitle(1);
}

.q-title[class*="mode-normal"] {
    .font-subtitle(2);
}

.q-title[class*="level-1"][class*="mode-single"] {
    .font-headline();
}

.q-title[class*="level-2"][class*="mode-single"] {
    .font-title();
}

.q-title[class*="level-1"][class*="mode-compact"] {
    .font-headline(1);
}

.q-title[class*="level-2"][class*="mode-compact"] {
    .font-title(1);
}

.q-title[class*="level-1"][class*="mode-normal"] {
    .font-headline(2);
}

.q-title[class*="level-2"][class*="mode-normal"] {
    .font-title(2);
}

.q-title[class*="theme-light"] {
    color: @color-light-foreground;
}

.q-title[class*="theme-dark"] {
    color: @color-dark-foreground;
}

.q-title-colors(@colorname){
    @varname: "color-@{colorname}";

    .q-title[class*="theme-light"][class*=~"color-@{colorname}"][class*="colorful"] {
        color: @@varname;
    }

    .q-title[class*="theme-dark"][class*=~"color-@{colorname}"][class*="colorful"] {
        color: lighten(@@varname, @config-lighten);
    }

}

/******* Colors Apply *******/

.loop(@counter) when (@counter > 0) {
    .loop((@counter - 1));
    @colorname: extract(@color-list, @counter);
    
    .q-title-colors(@colorname);
}
.loop(length(@color-list));

</style>

<script>
import mixins from "@/core/mixins.js";
import utils from "@/core/utils.js";
import settings from "@/core/settings.js";

export default {
    render(createElement){
        return createElement("h"+this.level, { "class": this.className }, this.$slots.default);
    },
    mixins: [mixins],
    props: {
        level: {
            type: Number,
            default: 6
        },
        colorful: Boolean,
        mode: {
            type: String,
            default: ()=>(settings.defaults.title_mode || settings.defaults.typography_mode),
            validator(value){
                return utils.validator(value).belongsTo("single", "compact", "normal")
            }
        },
    },
    data(){
        return {
            meta: {
                name: "title"
            }
        }
    },
    computed: {
        className(){
            return this.computeClass({
                level: this.level,
                mode: this.mode,
                colorful: this.colorful
            });
        }
    }
}
</script>