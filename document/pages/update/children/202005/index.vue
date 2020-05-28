<template>
        <article class="container">
            <q-panel class="description" secondary>
                <q-footnote>此处的版本指代组件库版本，文档内容的更新将根据相关性合并到当前或下一个组件库版本的更新内容中。</q-footnote>
                <q-footnote>设计规范修改、重构将提升 主版本号（Major Version Number）</q-footnote>
                <q-footnote>新增组件和特性将提升 子版本号（Minor Version Number）</q-footnote>
                <q-footnote>Bug 修复、样式调整将提升 修正版本号（Revision Number）</q-footnote>
            </q-panel>

            <q-title :level="1" colorful>Version 0.8.0</q-title>
            <q-footnote>2020-05-28</q-footnote>
            <ul>
                <q-title :level="3">新增</q-title>
                <li>新增 Mask 组件</li>
                <li>新增 open & close API 方法</li>
                <q-title :level="3">变更</q-title>
                <li>优化 更新日志 呈现方式</li>
            </ul>

            <q-divider></q-divider>

            <q-title :level="1" colorful>Version 0.7.0</q-title>
            <q-footnote>2020-05-25</q-footnote>
            <ul>
                <q-title :level="3">新增</q-title>
                <li>新增 Avatar 组件</li>
                <q-title :level="3">变更</q-title>
                <li>Sketch Library 资源库中的命名将逐步修正为英语</li>
                <q-title :level="3">修复</q-title>
                <li>修复 Image 组件的文档错误</li>
            </ul>

            <q-divider></q-divider>

            <q-title :level="1" colorful>Version 0.6.5</q-title>
            <q-footnote>2020-05-22</q-footnote>
            <ul>
                <q-title :level="3">新增</q-title>
                <li>文档增加 Switch、Input 组件英语翻译</li>
                <q-title :level="3">修复</q-title>
                <li>修复 Popover 组件的层级及 Hover 重复触发的问题</li>
                <li>修复 Radio 文档错误</li>
            </ul>

            <q-divider></q-divider>

            <q-title :level="1" colorful>Version 0.6.4</q-title>
            <q-footnote>2020-05-22</q-footnote>
            <ul>
                <q-title :level="3">修复</q-title>
                <li>修复 Checkbox 图标错位问题</li>
                <li>修复 Popover 组件的层级问题</li>
            </ul>

            <q-divider></q-divider>

            <q-title :level="1" colorful>Version 0.6.3</q-title>
            <q-footnote>2020-05-19</q-footnote>
            <ul>
                <q-title :level="3">修复</q-title>
                <li>修复 Image 组件的加载 BUG</li>
                <q-title :level="3">变更</q-title>
                <li>优化移动端 Menubar 呈现</li>
                <li>SideRouter 组件响应式处理</li>
                <li>文档增加 Radio、Checkbox 组件英语翻译</li>
            </ul>

            <q-divider></q-divider>
            
            <q-title :level="1" colorful>Version 0.6.2</q-title>
            <q-footnote>2020-05-18</q-footnote>
            <ul>
                <q-title :level="3">新增</q-title>
                <li>新增 Icon</li>
                <q-title :level="3">变更</q-title>
                <li>基于响应式对文档首页及导航进行优化</li>
            </ul>

            <q-divider></q-divider>

            <q-title :level="1" colorful>Version 0.6.1</q-title>
            <q-footnote>2020-05-17</q-footnote>
            <ul>
                <q-title :level="3">变更</q-title>
                <li>Toast 增加主题和颜色功能</li>
                <li>文档增加 GitHub 链接</li>
            </ul>

            <q-divider></q-divider>

            <q-title :level="1" colorful>Version 0.6.0</q-title>
            <q-footnote>2020-05-16</q-footnote>
            <ul>
                <q-title :level="3">新增</q-title>
                <li>新增 Toast 消息</li>
            </ul>

            <q-divider></q-divider>

            <q-title :level="1" colorful>Version 0.5.1</q-title>
            <q-footnote>2020-05-15</q-footnote>
            <ul>
                <q-title :level="3">变更</q-title>
                <li>Popover 组件更正为行内块样式</li>
                <li>Popover 组件增加弹出动效</li>
                <li>优化&完善 Popover 组件的文档案例及代码</li>
                <li>文档增加具名打包</li>
                <li>优化编译策略，缩减输出体积</li>
            </ul>

            <q-divider></q-divider>

            <q-title :level="1" colorful>Version 0.5.0</q-title>
            <q-footnote>2020-05-13</q-footnote>
            <ul>
                <q-title :level="3">新增</q-title>
                <li>新增 Popover 组件</li>
                <q-title :level="3">修复</q-title>
                <li>修复文档语言选择框 BUG </li>
                <q-title :level="3">变更</q-title>
                <li>文档首页增加响应式，优化颜色切换的交互方式</li>
            </ul>

            <q-divider></q-divider>

            <q-title :level="1" colorful>Version 0.4.0</q-title>
            <q-footnote>2020-05-10</q-footnote>
            <ul>
                <q-title :level="3">新增</q-title>
                <li>新增 Image 组件</li>
                <li>新增 Icons</li>
                <li>新增 开发者文档页的文档编写规范（部分）</li>
                <q-title :level="3">修复</q-title>
                <li>修复文档属性呈现组件的 i18n 问题</li>
                <li>修复 Icon 文档的呈现问题</li>
            </ul>

            <q-divider></q-divider>

            <q-title :level="1" colorful>Version 0.3.1</q-title>
            <q-footnote>2020-05-09</q-footnote>
            <ul>
                <q-title :level="3">新增</q-title>
                <li>新增 Icons</li>
                <q-title :level="3">修复</q-title>
                <li>修复 Collapse 组件展开动效 BUG</li>
                <q-title :level="3">变更</q-title>
                <li>重新设计 首页 UI</li>
                <li>针对 i18n 优化文档渲染组件</li>
                <li>完善 Summary、Install、Global Settings 的英语翻译</li>
                <li>优化 Collapse 组件的内置样式，新增 title-colorful 属性，修改文档错误</li>
            </ul>

            <q-divider></q-divider>

            <q-title :level="1" colorful>Version 0.3.0</q-title>
            <q-footnote>2020-05-06</q-footnote>
            <ul>
                <q-title :level="3">新增</q-title>
                <li>新增 Collapse 组件</li>
                <li>新增 全局设置 功能（默认值）</li>
                <li>新增 Icons</li>
            </ul>

            <q-divider></q-divider>

            <q-title :level="1" colorful>Version 0.2.3</q-title>
            <q-footnote>2020-05-05</q-footnote>
            <ul>
                <q-title :level="3">变更</q-title>
                <li>Progress 组件新增 animation 属性</li>
            </ul>

            <q-divider></q-divider>

            <q-title :level="1" colorful>Version 0.2.2</q-title>
            <q-footnote>2020-05-03</q-footnote>
            <ul>
                <q-title :level="3">修复</q-title>
                <li>修复 Switch、Input 组件的数据响应问题</li>
                <q-title :level="3">变更</q-title>
                <li>Icon 组件新增 container 属性</li>
            </ul>

            <q-divider></q-divider>

            <q-title :level="1" colorful>Version 0.2.1</q-title>
            <q-footnote>2020-05-02</q-footnote>
            <ul>
                <q-title :level="3">修复</q-title>
                <li>修复 Checkbox 组件的数据问题</li>
            </ul>

            <q-divider></q-divider>

            <q-title :level="1" colorful>Version 0.2.0</q-title>
            <q-footnote>2020-05-01</q-footnote>
            <ul>
                <q-title :level="3">新增</q-title>
                <li>新增 Menu 组件</li>
                <li>新增图标：code, shirt, smile, calm, sad</li>
                <q-title :level="3">修复</q-title>
                <li>修复 Button 组件在 small size 下的图标边距问题</li>
                <q-title :level="3">变更</q-title>
                <li>优化 README.md 文档的内容呈现</li>
            </ul>

        </article>
</template>

<style lang="less" scoped>
@import "~@qiqi1996/qi-design-vue/core/standard.less";

.description {
    padding: @grid;
    margin-bottom: 4*@grid;
}

.container {
    margin: 5*@grid auto;
    padding-bottom: 4*@grid;
}

.q-title span {
    opacity: 0.75;
    font-size: 16px;
}

ul {
    margin-top: 4*@grid;

    li {
        margin: 2*@grid 0px;
        .font-text(2);
        list-style: circle;
    }
}

.q-divider {
    margin: 4*@grid;
}
</style>