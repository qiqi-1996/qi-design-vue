<template>
    <div class="q-toast">
        <transition-group>
            <div v-for="item in messageList" :key="item.id" :class="['theme-' + item.theme, 'color-' + item.color]">
                <div class="q-toast-item">{{item.message}}</div>
            </div>
        </transition-group>
    </div>
</template>

<style lang="less" scoped>
@import "~@qiqi1996/qi-design-vue/core/standard.less";

.q-toast {
    z-index: @top + 100;
    position: fixed;
    left: 50%;
    bottom: 38.2%;
    transform: translateX(-50%);
    pointer-events: none;
    text-align: center;

    .q-toast-item {
        display: inline-block;
        color: @color-light-background;
        background: @color-light-foreground;
        box-shadow: @color-light-secondary-background 0px 10px 0px -5px;

        padding: @grid;
        margin-bottom: @grid;
    }

    .theme-dark {
        .q-toast-item {
            color: @color-dark-background;
            background: @color-light-background;
            box-shadow: @color-dark-secondary-background 0px 10px 0px -5px;
        }
    }

    /******* Colors Apply *******/

    .loop(@counter) when (@counter > 0) {
        .loop((@counter - 1));
        @colorname: extract(@color-list, @counter);
        @varname: ~"color-@{colorname}";
        
        .@{varname} {
            .q-toast-item {
                color: @color-light-background !important;
                background: @@varname !important;
            }
        }
    }
    .loop(length(@color-list));

    /******* Transition *******/

    .v-enter-active, .v-leave-active {
        .transition(all, 800ms);
    }

    .v-enter {
        opacity: 0;
        transform: scale(0.85) translateY(50%);
    }

    .v-leave-to {
        opacity: 0;
        transform: scale(0.85) translateY(-50%);
    }

    .v-move {
        .transition(all, 800ms);
    }
}
</style>

<script>
import utils from "@qiqi1996/qi-design-vue/core/utils.js";
import mixins from "@qiqi1996/qi-design-vue/core/mixins.js";
import settings from "@qiqi1996/qi-design-vue/core/settings.js";

export default {
    mixins: [mixins],
    data(){
        return {
            messageList: [
                // { id: String, message: String, timeoutID: Number, theme: String }
            ],
        }
    },
    mounted(){
        utils.event.on("q-message-toast", this.duang);
    },
    beforeDestroy(){
        this.clearTimeout();
        utils.event.off("q-message-toast", this.duang);
    },
    methods: {
        duang(message, options){
            let theme = settings.defaults.toast_theme;
            let color = settings.defaults.toast_color;
            if(options.theme){
                theme = options.theme;
                color = options.color;
            }else if(options.scope){
                theme = this.findThemeNode(options.scope)._theme || settings.defaults.toast_theme;
                color = this.findThemeNode(options.scope)._color || settings.defaults.toast_color;
            }

            let messageItem = {
                id: utils.id(),
                message,
                theme,
                color,
                timeoutID: setTimeout(()=>{
                    this.messageList.forEach((item, index)=>{
                        if(item.id === messageItem.id){
                            this.messageList.splice(index, 1);
                        }
                    })
                }, options.duration)
            }

            this.messageList.push(messageItem);
        },
        clearTimeout(id){
            this.messageList.forEach((item)=>{
                if(id === undefined || item.timeoutID === id){
                    clearTimeout(item.timeoutID);
                }
            })
        }
    }
}
</script>