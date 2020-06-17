<template>
    <document>
        <q-title :level="1" colorful>图标 <strong>Icon</strong></q-title>

        <q-title :level="2">使用方法</q-title>

        <codeblock lang="html">
            &lt;q-icon name=&quot;loading&quot; animation=&quot;rotate&quot;&gt;&lt;/q-icon&gt;
            &lt;!-- 显示一个线性旋转的加载图标 --&gt;
        </codeblock>

        <q-title :level="2">属性</q-title>

        <property-block>

            <property-item
                name="name"
                definition="图标名称"
                values="详见下面的可用图标列表"
            >
                <q-icon name="user" style="font-size: 24px;"></q-icon>
                <q-icon name="lock" style="font-size: 24px;"></q-icon>
                <q-icon name="user-fill" style="font-size: 24px;"></q-icon>
                <q-icon name="lock-fill" style="font-size: 24px;"></q-icon>
                <q-icon name="dots" style="font-size: 24px;"></q-icon>
            </property-item>

            <property-item
                name="animation"
                definition="动画效果"
                :values="['rotate']"
            >
                <q-icon name="loading" animation="rotate" style="font-size: 24px;"></q-icon>
                <q-icon name="waiting" animation="rotate" style="font-size: 24px;"></q-icon>
            </property-item>

            <property-item
                name="container"
                definition="改变图标容器"
                defaults="i"
                values="String"
            >
                <q-icon container="a" href="#" name="earth">使用 &lt;a&gt; 进行包裹</q-icon>
            </property-item>

        </property-block>

        <q-title :level="2">可用图标列表</q-title>

        <q-title :level="3">纯线性图标</q-title>

        <icon-item v-for="(name, index) in linear" :key="'linear_'+index" :name="name"></icon-item>

        <q-title :level="3">可填充图标</q-title>
        <div class="filter">
            <q-footnote>筛选</q-footnote>
            <q-radio v-model="filterValue" value="all">全部</q-radio>
            <q-radio v-model="filterValue" value="linear">仅线性</q-radio>
            <q-radio v-model="filterValue" value="surface">仅面性（填充）</q-radio>
        </div>

        <span v-for="(name, index) in surface" :key="'surface_'+index">
            <icon-item v-show="filterValue=='all' || filterValue=='linear'" :name="name"></icon-item>
            <icon-item v-show="filterValue=='all' || filterValue=='surface'" :name="name + '-fill'"></icon-item>
        </span>

    </document>
</template>

<style lang="less" scoped>
@import "~@qiqi1996/qi-design-vue/core/standard.less";

.filter * {
    display: inline-block;
    vertical-align: middle;
    margin-left: 2*@grid;
}
</style>

<script>
import IconItem from "./icon-item.vue";

// 纯线性图标
const linear = [
    // 交互元素
    "left",
    "right",
    "up",
    "down",
    "arrow-left",
    "arrow-right",
    "arrow-up",
    "arrow-down",
    "close",
    "plus",
    "draggable",

    // 软件元素
    "menu",
    "link",
    "loading",
    "waiting",
    "download",
    "upload",
    "correct",
    "forbidden",
    "open",
    "code",
    "search",
    "align-left",
    "align-center",
    "align-right",
    "align-justify",

    // 社交元素

    "smile",
    "calm",
    "sad",
    "male",
    "female",
    "gender",

    // 品牌图标
    "vue",
    "react",
    "flutter",

    // 其他
    "dot",
    "dots"
]

// 面性图标（可填充）
const surface = [
    // 社交相关
    "star",
    "user",
    "lock",
    "unlock",

    // 文件相关
    "folder",
    "image",
    "trash",
    "document",
    "copy",
    "paste",

    // 软件元素
    "setting",
    "warning",
    "warning-circle",
    "question-circle",
    "info-circle",
    "error-circle",

    // 杂项
    "earth",
    "shirt",
]

export default {
    components: {
        IconItem
    },
    data(){
        return {
            linear,
            surface,
            filterValue: "all"
        }
    }
}
</script>