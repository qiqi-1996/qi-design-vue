<template>
    <document>
        <q-title :level="1" colorful>进度条 <strong>Progress</strong></q-title>

        <q-title :level="2">预览</q-title>

        <window class="window">
            <q-title :level="2">{{symbol>0?"正在安装":"正在卸载"}}</q-title>
            <q-progress :current="current" :total="total" round></q-progress>
        </window>

        <q-title :level="2">使用方法</q-title>

        <codeblock lang="html">
            &lt;q-progress :current=&quot;current&quot; :total=&quot;total&quot; round&gt;&lt;/q-progress&gt;
        </codeblock>

        <q-title :level="2">属性</q-title>

        <property-block class="property">
            <property-item
                name="current"
                definition="当前进度值"
                defaults="0"
                values="Number"
            ></property-item>

            <property-item
                name="total"
                definition="进度总体值"
                defaults="1"
                values="Number"
            ></property-item>

            <property-item
                name="format"
                definition="格式化进度条数显，需提供一个返回字符串的函数，函数的第一个参数是为对象，包含属性：current-当前值, total-总体值, percent-百分比"
                values="Function"
            >
                <q-progress :current="current" :total="total" :format="formator"></q-progress>
            </property-item>

            <property-item
                name="size"
                definition="进度条尺寸"
                defaults="normal"
                :values="['small', 'normal']"
            >
                <q-progress :current="current" :total="total" size="small"></q-progress>
            </property-item>

            <property-item
                name="round"
                definition="进度条圆角"
                defaults="false"
                values="Boolean"
            >
                <q-progress :current="current" :total="total" round></q-progress>
            </property-item>

            <property-item
                name="animation"
                definition="是否启用动画。对于数值变更非常频繁（小于500ms）的进度，由于 transition 缓动而导致进度条更新不及时，可以使用此属性禁用动画效果。并且在如此高频变化的进度中，缺少动效也不会很明显。"
                defaults="true"
                values="Boolean"
            >
                <q-progress :current="current" :total="total" round :animation="false"></q-progress>
            </property-item>
        </property-block>

    </document>
</template>

<style lang="less" scoped>
@import "~@/core/standard.less";

.window {
    width: 300px;

    .q-progress {
        margin-bottom: 2*@grid;
    }
}

.property {
    .q-progress {
        width: 200px;
    }
}
</style>

<script>
export default {
    data(){
        return {
            current: 0,
            total: 1,
            symbol: +1,
        }
    },
    mounted(){
        setTimeout(this.step, 500);
    },
    methods: {
        step(){
            this.current = this.current + (this.symbol * Math.random()/10);
            if(this.current > this.total){
                this.current = this.total;
                this.symbol = -1;
            } else if(this.current < 0){
                this.current = 0;
                this.symbol = +1;
            }
            setTimeout(this.step, 500);
        },
        formator(progress){
            return "Loading - " + Math.floor(progress.percent*100) + "%";
        }
    }
}
</script>