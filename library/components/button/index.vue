<style lang="less" scoped>
@import "~@/core/standard.less";

/******* Universal *******/

.q-button {
    display: inline-block;
    line-height: 0px;
    font-size: 0px;
    border: none;
    padding: @grid 2*@grid;
    outline: none;
    cursor: pointer;
    .transition();

    .q-icon, .title {
        .font-text();
        display: inline-block;
        vertical-align: middle;
    }

    .q-icon {
        margin-left: -@grid;
        margin-right: @grid;
    }

}

.q-button[class*="type-primary"]{
    .q-icon {
        color: @color-white !important;
    }
}

/******* Type Primary *******/

.q-button[class*="theme-light"][class*="type-primary"][class*="color-poe"] {
    color: @color-light-background;
    border: 1px solid @color-light-foreground;
    background: @color-light-foreground;
}

.q-button[class*="theme-dark"][class*="type-primary"][class*="color-poe"] {
    /deep/ .q-icon {
        color: @color-dark-background !important;
    }
    color: @color-dark-background;
    border: 1px solid @color-dark-foreground;
    background: @color-dark-foreground;
}

.q-button[class*="theme-light"][class*="type-primary"][class*="color-poe"]:hover {
    background: lighten(@color-light-foreground, 20%);
}

.q-button[class*="theme-dark"][class*="type-primary"][class*="color-poe"]:hover {
    background: darken(@color-dark-foreground, 20%);
}

.q-button-primary-colors(@colorname){
    @varname: "color-@{colorname}";
    
    .q-button[class*="theme-light"][class*="type-primary"][class*=~"color-@{colorname}"] {
        color: @color-white;
        border: 1px solid @@varname;
        background-color: @@varname;
    }

    .q-button[class*="theme-light"][class*="type-primary"][class*=~"color-@{colorname}"]:hover {
        background-color: lighten(@@varname, 20%);
    }

    .q-button[class*="theme-dark"][class*="type-primary"][class*=~"color-@{colorname}"] {
        color: @color-white;
        border: 1px solid @@varname;
        background-color: lighten(@@varname, @config-lighten);
    }

    .q-button[class*="theme-dark"][class*="type-primary"][class*=~"color-@{colorname}"]:hover {
        background-color: lighten(lighten(@@varname, @config-lighten), 20%);
    }
}


/******* Type Default *******/

.q-button[class*="theme-light"][class*="type-default"] {
    color: @color-light-foreground;
    border: 1px solid @color-light-decorate;
    background: @color-light-background;

}
.q-button[class*="theme-dark"][class*="type-default"] {
    color: @color-dark-foreground;
    border: 1px solid @color-dark-decorate;
    background: @color-dark-background;
}

.q-button[class*="theme-light"][class*="type-default"][class*="color-poe"]:hover {
    color: @color-poe;
    border-color: @color-poe;
}

.q-button[class*="theme-dark"][class*="type-default"][class*="color-poe"]:hover {
    color: @color-white;
    border-color: @color-white;
}

.q-button-default-hover(@colorname){
    .q-button[class*="theme-light"][class*="type-default"][class*=~"color-@{colorname}"]:hover {
        @varname: "color-@{colorname}";
        color: @@varname;
        border-color: @@varname;
    }

    .q-button[class*="theme-dark"][class*="type-default"][class*=~"color-@{colorname}"]:hover {
        @varname: "color-@{colorname}";
        color: lighten(@@varname, @config-lighten);
        border-color: lighten(@@varname, @config-lighten);
    }
}

/******* Round *******/

.round {
    border-radius: 100px;
}

/******* Size *******/

.q-button[class*="size-small"] {
    padding: @grid/2 @grid;
    
    .q-icon, .title {
        font-size: 12px;
    }
}

.q-button[class*="size-large"] {
    padding: 2*@grid 3*@grid;

    .q-icon, .title {
        font-size: 16px;
    }
}

/******* State *******/

.disable {
    opacity: 0.5;
    pointer-events: none;
}

.q-button[class*="busy"] {
    pointer-events: none;
}

/******* Colors Apply *******/

.loop(@counter) when (@counter > 0) {
    .loop((@counter - 1));

    @colorname: extract(@color-list, @counter);
    .q-button-default-hover(@colorname);
    .q-button-primary-colors(@colorname);
}
.loop(length(@color-list));
</style>

<script>
import mixins from "@/core/mixins.js";
import utils from "@/core/utils.js";

export default {
    render(createElement){
        if(this.href?.trim()){
            return (
                <a class={this.className} href={this.href} onClick={this.mockNativeClick}>
                    <q-icon name={this.busy?'loading':this.icon} animation={this.busy?'rotate':''} v-show={this.icon || this.busy}></q-icon>
                    <span class="title">{this.$slots.default}</span>
                </a>
            )
        }else{
            return (
                <button class={this.className} onClick={this.mockNativeClick}>
                    <q-icon name={this.busy?'loading':this.icon} animation={this.busy?'rotate':''} v-show={this.icon || this.busy}></q-icon>
                    <span class="title">{this.$slots.default}</span>
                </button>
            )
            return createElement("button", { "class": this.className }, this.$slots.default);
        }
    },
    mixins: [mixins],
    props: {
        type: {
            type: String,
            default: "default",
            validator(value) {
                return utils.validator(value).belongsTo("primary", "default");
            }
        },
        href: {
            type: String
        },
        size: {
            type: String,
            default: "medium",
            validator(value){
                return utils.validator(value).belongsTo("small", "medium", "large");
            }
        },
        icon: String,
        round: Boolean,
        disable: Boolean,
        busy: Boolean,
    },
    data() {
        return {
            meta: {
                name: "button"
            }
        };
    },
    computed: {
        className() {
            return this.computeClass({
                "size": this.size,
                "type": this.type,
                "round": this.round,
                "busy": this.busy,
                "disable": this.disable,
            })
        }
    },
    mounted() {
    }
};
</script>