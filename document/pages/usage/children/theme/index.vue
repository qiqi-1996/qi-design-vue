<template>
    <document>
        <q-title :level="1" colorful>主题 <strong>Theme</strong></q-title>

        <q-text>
            Theme 组件可用于切换其所包裹的组件的样式（例如下方的预览），具体可调整的样式有：切换白昼模式与暗夜模式的 <strong>theme</strong> 属性，和修改组件主色的 <strong>color</strong> 属性。出于对暗夜模式适配的最佳实践考虑，建议将 <strong>Theme</strong> 组件和 <strong>Panel</strong> 组件的嵌套作为整个应用的根容器。
        </q-text>

        <q-text>
            但实际上，几乎所有组件都有 <strong>theme</strong> 和 <strong>color</strong> 这两个通用属性，也就是说，即便不通过 <strong>Theme</strong> 组件，也可以单独为某个组件修改主题样式。此外，任何通过 slot 接收内容的组件（作为容器），例如 <strong>Panel</strong> 组件，都会将当前组件的样式向子集应用，或者说所有组件都会向最近的父级（容器）组件<strong>继承主题样式</strong>。
        </q-text>

        <q-text>
            顺便一提，内置的组件可选颜色来源于我喜欢的作家和艺术作品，例如：作家爱伦坡笔下的总是重复着 “Nevermore” 一句话的黑色乌鸦，《悲惨世界》中身着红衣的革命青年领袖安灼拉，文森特·梵高的星月夜和向日葵等等。并且最终使用了我最为喜爱的 爱伦坡 作为本组件库的默认颜色。如果您对设计方面很感兴趣，请参阅 <a href="#">设计师文档</a>
        </q-text>

        <!-- <q-text>
            综上所述，这注定是一个极具个人主义色彩的开源项目，因此可能较难接收开源社区的 Pull Request，也注定会有人对此有争议。但是，人与人的信念本来就不互通，追求理解只是在浪费时间。
        </q-text> -->

        <!-- <q-quote block>从童年时起我就一直与别人不一样，我看待世间的事情与众不同，我从来就不能从一个寻常的春天获得激情。<br>—— 爱伦坡，《孤独》</q-quote> -->

        <q-title :level="2">预览</q-title>

        <q-theme :theme="theme" :color="color">
            <window class="window">
                <q-text>请使用下方的主题控制器<strong>单独控制</strong>此窗口的主题和颜色</q-text>
                <q-panel secondary class="controller">
                    <q-footnote>暗夜模式</q-footnote>
                    <q-switch @change="handleThemeChange"></q-switch>

                    <q-divider type="vertical"></q-divider>

                    <q-footnote>控件颜色</q-footnote>
                    <q-hover
                        v-for="(colorname, index) in colorList"
                        class="color"
                        :actived="{border: 'default'}"
                        :active="color==colorname"
                        :key="index"
                        @click="handleColorChange(colorname)"
                    >
                        <q-color-block round :color="colorname"></q-color-block>
                    </q-hover>

                </q-panel>
            </window>
        </q-theme>

        <q-title :level="2">属性</q-title>

        <property-block class="property-block" :general="false">
            <property-item
                name="theme"
                definition="主题模式，优先从父级继承。"
                defaults="light"
                :values="['light', 'dark']"
            >
            </property-item>
            <property-item
                name="color"
                definition="控件颜色，优先从父级继承。"
                defaults="poe"
                :values="['poe', 'starrynight', 'enjolras', 'sunflower']"
            >
            </property-item>
        </property-block>

    </document>
</template>

<style lang="less" scoped>
@import "~@/core/standard.less";

.window {
    .controller * {
        display: inline-block;
        vertical-align: middle;
    }

    .q-panel {
        padding: @grid;
        border-radius: 5px;
    }

    .q-footnote {
        margin-right: @grid;
    }

    .q-divider {
        height: 2*@grid;
        margin: @grid;
    }

    .color {
        font-size: 0px;
        cursor: pointer;
        margin-right: @grid;
        border-radius: 16px;
        padding: @grid/2;

        .q-color-block {
            margin: 0px;
        }
    }

    .selected {
        .q-color-block {
            transform: scale(1.2);
        }
    }
}
</style>

<script>
export default {
    data(){
        return {
            color: "poe",
            theme: "light",
            colorList: ["poe", "starrynight", "enjolras", "sunflower"]
        }
    },
    methods: {
        handleThemeChange(value){
            if(value){
                this.theme = "dark";
            }else{
                this.theme = "light";
            }
        },
        handleColorChange(colorname){
            this.color = colorname;
        }
    }
}
</script>