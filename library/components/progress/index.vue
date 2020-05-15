<template>
    <q-panel :class="className" secondary ref="total">
        <div class="progress-bar" ref="bar" :style="{ width: progressWidth }">
            <span ref="value" class="progress-value" v-show="size=='normal'" :style="{ left: `${offset}px`}">{{progressValue}}</span>
        </div>
    </q-panel>
</template>

<style lang="less" scoped>
@import "~@qiqi1996/qi-design-vue/core/standard.less";

.q-progress {
    width: 100%;
    padding: 0px;

    .progress-value {
        position: relative;
        .font-note();
    }

    .progress-bar {
        height: 100%;
        text-align: right;
        white-space: nowrap;
    }
}

.q-progress[class*="animation"]{
    .progress-bar, .progress-value {
        .transition();
    }
}

/******* size *******/

.q-progress[class*="size-small"] {
    .progress-bar {
        height: 2px;
    }
}

.q-progress[class*="size-normal"] {
    .progress-value {
        display: inline-block;
        margin: @grid/2;
    }
}

/******* round *******/

.q-progress[class*="round"] {
    border-radius: 20px;
    overflow: hidden;

    .progress-bar {
        border-radius: 20px;
    }
}

/******* need offset *******/

.q-progress[class*="theme-light"][class*="need-offset"] {
    .progress-value {
        color: @color-light-foreground;
    }
}

.q-progress[class*="theme-dark"][class*="need-offset"] {
    .progress-value {
        color: @color-dark-foreground;
    }
}

/******* theme *******/

.q-progress[class*="theme-light"][class*="color-poe"] {
    .progress-bar {
        color: @color-light-background;
        background: @color-light-foreground;
    }
}

.q-progress[class*="theme-dark"][class*="color-poe"] {
    .progress-bar {
        color: @color-dark-background;
        background: @color-dark-foreground;
    }
}

.q-progress-colors(@colorname) {
    @varname: "color-@{colorname}";
    .q-progress[class*="theme-light"][class*="@{varname}"] {
        .progress-bar {
            color: @color-light-background;
            background: @@varname;
        }
    }
    .q-progress[class*="theme-dark"][class*="@{varname}"] {
        .progress-bar {
            color: @color-dark-foreground;
            background: lighten(@@varname, @config-lighten);
        }
    }
}

/******* Colors Apply *******/

.loop(@counter) when (@counter > 0) {
    .loop((@counter - 1));
    @colorname: extract(@color-list, @counter);
    
    .q-progress-colors(@colorname);
}
.loop(length(@color-list));

</style>

<script>
import mixins from "@qiqi1996/qi-design-vue/core/mixins.js";
import utils from "@qiqi1996/qi-design-vue/core/utils.js";

export default {
    mixins: [ mixins ],
    props: {
        current: {
            type: Number,
            default: 0
        },
        total: {
            type: Number,
            default: 1
        },
        size: {
            type: String,
            default: "normal",
            validator(value){
                return utils.validator(value).belongsTo("small", "normal")
            }
        },
        format: Function,
        round: Boolean,
        animation: {
            type: Boolean,
            default: true
        }
    },
    data(){
        return {
            meta: {
                name: "progress"
            },
            offset: 0
        }
    },
    computed: {
        className(){
            return this.computeClass({
                size: this.size,
                round: this.round,
                animation: this.animation,
                "need-offset": (this.offset!==0)
            });
        },
        progressWidth(){
            let percent = Number((this.current / this.total).toFixed(4));
            if(this.$refs["total"]){
                let totalWidth = this.$refs["total"].$el.clientWidth;
                let barWidth = totalWidth * percent;
                this.checkOffset(barWidth);
            }    
            
            return percent*100+"%";
        },
        progressValue(){
            if(this.format){
                return this.format({
                    current: this.current,
                    total: this.total,
                    percent: (this.current / this.total).toFixed(4)
                });
            } else {
                return Math.floor((this.current / this.total)*100)+"%"
            }
        },
    },
    mounted(){
        this.checkOffset();
    },
    methods: {
        checkOffset(forceBarWidth){
            let barWidth = forceBarWidth || this.$refs["bar"].clientWidth;
            let valueWidth = this.$refs["value"].clientWidth;
            if(barWidth < valueWidth){
                this.offset = barWidth + 8;
            }else{
                this.offset = 0;
            }
        }
    }
}
</script>