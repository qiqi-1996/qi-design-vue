<template>
    <q-theme color="starrynight">
        <div class="container">
            <div class="left">

                <q-panel class="option-block" secondary style="margin-top: 35px;">
                    <q-divider></q-divider>
                    <div class="switch-block">
                        <q-title>启用多彩标题</q-title>
                        <q-switch v-model="colorful"></q-switch>
                    </div>
                </q-panel>

            </div>

            <window class="window">
                <div class="header">
                    <q-title :level="2" :colorful="colorful">使用 Sketch 组件库</q-title>
                    <q-text style="margin-top: 8px;">拖拽、调整、填数据<br>设计出图，<strong>快人一步</strong></q-text>
                </div>
                <div class="footer">
                    <q-button href="./qi-design-standard.sketch" :type="primary?'primary':'default'" :round="round" size="large" icon="download">立即下载</q-button>
                </div>
            </window>

            <div class="right">
                <q-panel class="option-block" secondary style="margin-top: 165px;">
                    <q-divider></q-divider>
                    <div class="switch-block">
                        <q-title>主要样式</q-title>
                        <q-switch v-model="primary"></q-switch>
                    </div>
                    <div class="switch-block">
                        <q-title>圆角按钮</q-title>
                        <q-switch v-model="round"></q-switch>
                    </div>
                </q-panel>
            </div>
        </div>
    </q-theme>
</template>

<style lang="less" scoped>
@import "~@/core/standard.less";

.container {
    max-width: 100%;
    min-width: 600px;
    margin: 0px auto;
    margin-top: 5*@grid;
    text-align: center;
    white-space: nowrap;
}

.left, .right {
    position: relative;
    display: inline-block;
    vertical-align: top;
    padding: 2*@grid;
}

.window {
    text-align: left;
    width: 50%;
    max-width: 400px;
    margin: 0px auto;
    z-index: 10;

    .header, .footer {
        padding: 2*@grid;
    }

    .footer {
        text-align: right;
    }
}

.left {
    transform: translateX(-50px);
    .option-block .q-divider {
        position: absolute;
        width: 50px;
        right: -50px;
    }
}

.right {
    transform: translateX(50px);
    .option-block .q-divider {
        position: absolute;
        width: 50px;
        left: -50px;
    }
}

.option-block {
    min-width: 180px;
    padding: 3*@grid;
    border-radius: 10px;

    .switch-block {
        display: flex;
        justify-content: space-between;
        margin-bottom: 2*@grid;
    }

    .switch-block:last-of-type {
        margin: 0px;
    }
}

</style>

<script>
export default {
    data(){
        return {
            colorful: false,
            primary: false,
            round: false
        }
    },
    mounted(){
        this.duang();
    },
    methods: {
        async duang(){

            await this.delay(()=>{
                this.colorful = !this.colorful;
            });

            await this.delay(()=>{
                this.primary = !this.primary;
            });

            await this.delay(()=>{
                this.round = !this.round;
            });

            setTimeout(this.duang, 2000);
        },
        delay(fn){
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    fn();
                    resolve();
                }, 200);
            });
        }
    }
}
</script>