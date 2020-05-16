<template>
    <div class="q-toast">
        <transition-group>
            <div v-for="item in messageList" :key="item.id">
                <div class="q-toast-item">{{item.message}}</div>
            </div>
        </transition-group>
    </div>
</template>

<style lang="less" scoped>
@import "~@qiqi1996/qi-design-vue/core/standard.less";

.q-toast {
    z-index: @top;
    position: fixed;
    left: 50%;
    bottom: 38.2%;
    transform: translateX(-50%);
    pointer-events: none;
    text-align: center;

    .q-toast-item {
        display: inline-block;
        color: @color-dark-foreground;
        background: @color-dark-background;
        padding: @grid;
        margin-bottom: @grid;
    }

    .v-enter-active, .v-leave-active {
        .transition(all, 800ms);
    }

    .v-enter {
        opacity: 0;
        transform: scale(0.9) translateY(50%);
    }

    .v-leave-to {
        opacity: 0;
        transform: scale(0.9) translateY(-50%);
    }

    .v-move {
        .transition(all, 800ms);
    }
}
</style>

<script>
import utils from "@qiqi1996/qi-design-vue/core/utils.js";

export default {
    data(){
        return {
            messageList: [
                // { id: String, message: String, timeoutID: Number }
            ]
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
            let messageItem = {
                id: utils.id(),
                message,
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