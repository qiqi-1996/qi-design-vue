<template>
    <document>
        <q-title :level="1" colorful>图标绘制规范</q-title>

        <q-title :level="2" colorful>画板规范</q-title>

        <q-text>
            图标应绘制在 256px × 256px 的画板中，距离画板四边每隔 20px 设置一条辅助线。<strong>图标内容不能超过最外层的辅助线</strong>，且图标的<strong>宽和高不能同时小于最内层的辅助线</strong>（除极特殊图标）。如下图所示：
        </q-text>

        <q-image class="center-block" src="./icon_template.png"></q-image>

        <q-title :level="2" colorful>图标规范</q-title>

        <q-text>
            <ul>
                <li>线条的宽度应为 20px</li>
                <li>元素之间的边距以 10px 为基准单位</li>
                <li>风格上，尽量使用直角</li>
            </ul>
        </q-text>

        <q-title :level="2" colorful>命名规范</q-title>
        
        <q-text>如果某线性图标的图形是闭合（或接近）的，则表示其图形也可以设计为面性图标，此时该面性图标的命名，应为原线性图标的命名加 <strong>-fill</strong>，例如：user 和 user-fill</q-text>

        <q-title :level="2" colorful>操作规范</q-title>

        <q-text>
            在 Sketch 组件库（源文件）中，图标的绘制分布在了两个图层中：<strong>Icons Source</strong> 和 <strong>Icons Export (And Component)</strong>。这是因为直接使用图标时，如果图标使用了线条元素，缩放时线条会维持固定的宽度，而线条的 20px 只是在画板尺寸为 256px × 256px 这样的比例下而设计的。因此为了让设计师可以正常使用图标，需要将图标的线条转换为图形（轮廓化 Options + Command + O）再放置到 <strong>Icons Export (And Component)</strong> 中，而轮廓化后如需修改就会很麻烦，因此还需要保留原始的线条式的 Icon 画板（即：<strong>Icons Source</strong>）。
        </q-text>

        <q-text>
            综上所述，图标绘制的具体流程为：
            <ul>
                <li>在 Icons Source 图层中，依照规范绘制图标</li>
                <li>将绘制好的图标画板复制到 Icons Export（And Component） 中</li>
                <li>将复制后的画板中所有的线条元素轮廓化，然后 <strong>联集 + 路径合并</strong></li>
                <li>将复制后的画板右键转为组件</li>
            </ul>
        </q-text>

    </document>
</template>

<style lang="less" scoped>
ul {
    li {
        list-style: circle;
    }
}
</style>