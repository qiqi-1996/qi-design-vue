# 遮罩 <strong>Mask</strong>

## {{ $t("common.usage.preview") }}

<example></example>

## {{ $t("common.usage.usage") }}

```html
&lt;q-mask name=&quot;fullscreen-mask&quot;&gt;
    &lt;p&gt;点击关闭&lt;/p&gt;
&lt;/q-mask&gt;
&lt;!-- 全屏遮罩 --&gt;

&lt;q-mask name=&quot;wrap-mask&quot;&gt;
    &lt;p&gt;点击关闭&lt;/p&gt;
    &lt;div style=&quot;width: 77px; height: 77px&quot; slot=&quot;wrap&quot;&gt;
        &lt;p&gt;任意内容&lt;/p&gt;
    &lt;/div&gt;
&lt;/q-mask&gt;
&lt;!-- 包裹住 div 的遮罩, 使用 scope-slot 指示被包装的元素 --&gt;
```

使用 JS 打开和关闭遮罩

```
this.$qidesign.open("fullscreen-mask")
this.$qidesign.close("fullscreen-mask")
this.$qidesign.open("wrap-mask")
this.$qidesign.close("wrap-mask")
```

使用 v-model 控制遮罩

```html
&lt;q-mask v-model=&quot;isOpen&quot;&gt;&lt;/q-mask&gt;
```

{{ $t("common.usage.usage-tips") }}

## {{ $t("common.usage.property") }}

<property-block>
    <property-item
        name="name"
        definition="遮罩唯一名称"
        values="String"
    >
    </property-item>
    <property-item
        name="open"
        definition="遮罩是否打开（v-model）"
        defaults="false"
        values="Boolean"
    >
    </property-item>
    <property-item
        name="noclose"
        definition="是否禁止点击即关闭"
        defaults="false"
        values="Boolean"
    >
    </property-item>
</property-block>