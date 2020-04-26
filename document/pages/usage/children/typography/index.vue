<template>
    <document>
        <q-title :level="1" colorful>文字排版 <strong>Typography</strong></q-title>

        <q-text>
            在 Qi Design Standard 中，文字类的元素预设了以下几种类型：标题、正文、脚注、引用。
        </q-text>

        <q-title :level="2">预览</q-title>

        <q-theme color="enjolras">
            <window>
                <q-title :level="1" colorful>头条标题</q-title>
                <q-divider></q-divider>
                <q-title :level="2">大标题</q-title>
                <q-title :level="3">小标题及其他层级标题</q-title>
                <q-text>正文文本正文文本<strong>正文文本</strong>正文文本</q-text>
                <q-footnote>脚注文本脚注文本脚注文本脚注文本</q-footnote>
                <q-quote block>引用文本引用文本引用文本引用文本</q-quote>
            </window>
        </q-theme>

        <q-title :level="2">使用方法</q-title>

        <q-panel class="typo-block" border>
            <q-title class="type" :level="3">q-title</q-title>
            <q-footnote class="description">标题类文字</q-footnote>
            <q-divider></q-divider>
            <property-block :general="false">
                <property-item
                    name="level"
                    definition="标题层级(h1 ~ h6)"
                    defaults="6"
                    values="Number"
                >
                </property-item>

                <property-item
                    name="mode"
                    definition="段落（行高）模式"
                    defaults="normal"
                    :values="['single - 单行', 'compact - 紧凑', 'normal - 正常']"
                >
                </property-item>

                <property-item
                    name="colorful"
                    definition="文字是否随控件颜色改变"
                    defaults="false"
                    values="Boolean"
                >
                    <q-theme color="enjolras">
                        <q-title :level="3" colorful>Title</q-title>
                    </q-theme>
                </property-item>

            </property-block>
        </q-panel>

        <!-- 正文组件 -->

        <q-panel class="typo-block" border>
            <q-title class="type" :level="3">q-text</q-title>
            <q-footnote class="description">正文文字</q-footnote>
            <q-divider></q-divider>
            <property-block :general="false">
                <property-item
                    name="mode"
                    definition="段落（行高）模式"
                    defaults="normal"
                    :values="['single - 单行', 'compact - 紧凑', 'normal - 正常']"
                >
                </property-item>

                <property-item
                    name="colorful"
                    definition="强调文字是否随控件颜色改变"
                    defaults="true"
                    values="Boolean"
                >
                    <q-theme color="enjolras">
                        <q-text>text<strong>strong</strong></q-text>
                    </q-theme>
                </property-item>

                <property-item
                    comment="在 q-text 组件内，使用 strong 标签包裹的元素将作为强调元素显示"
                ></property-item>

            </property-block>
        </q-panel>

        <q-panel class="typo-block" border>
            <q-title class="type" :level="3">q-footnote</q-title>
            <q-footnote class="description">脚注文字</q-footnote>
            <q-divider></q-divider>
            <property-block :general="false">
                <property-item
                    name="mode"
                    definition="段落（行高）模式"
                    defaults="normal"
                    :values="['single - 单行', 'compact - 紧凑', 'normal - 正常']"
                >
                </property-item>

                <property-item
                    comment="在 q-footnote 组件内，使用 strong 标签包裹的元素将作为强调元素显示"
                ></property-item>

            </property-block>
        </q-panel>

        <q-panel class="typo-block" border>
            <q-title class="type" :level="3">q-quote</q-title>
            <q-footnote class="description">引用文字</q-footnote>
            <q-divider></q-divider>
            <property-block :general="false">
                <property-item
                    name="mode"
                    definition="段落（行高）模式"
                    defaults="normal"
                    :values="['single - 单行', 'compact - 紧凑', 'normal - 正常']"
                >
                </property-item
                >
                <property-item
                    name="block"
                    definition="是否为块级引用"
                    defaults="false"
                    values="Boolean"
                >
                    <q-quote block>我向来是不惮以最坏的恶意来揣测程序员的，然而我还不曾料到这份代码的注释会少到这个地步！<br> —— 鲁迅</q-quote>
                </property-item>

                <property-item
                    comment="在 q-quote 组件内，使用 strong 标签包裹的元素将作为强调元素显示"
                ></property-item>

            </property-block>
        </q-panel>

    </document>
</template>

<style lang="less" scoped>
@import "~@/core/standard.less";

.window {
    padding: 4*@grid;
    padding-top: 6*@grid;

    .q-title {
        margin: 2*@grid 0px;
        border: none;
    }
}

.typo-block {
    padding: @grid 2*@grid;
    margin-bottom: 2*@grid;

    .type {
        margin-left: 2*@grid;
        margin-bottom: 0px;
    }

    .description {
        margin-left: 2*@grid;
        margin-top: 0px;
    }
}
</style>