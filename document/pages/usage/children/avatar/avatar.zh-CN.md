# 头像 <strong>Avatar</strong>

## {{ $t("common.usage.preview") }}

<example></example>

## {{ $t("common.usage.usage") }}

```
&lt;q-avatar src=&quot;./avatar.png&quot; size=&quot;large&quot; shape=&quot;circle&quot;&gt;&lt;/q-avatar&gt;
&lt;!-- 显示一个大号并且呈圆形的头像图片 --&gt;
```

{{ $t("common.usage.usage-tips") }}

## {{ $t("common.usage.property") }}

<property-block>
    <property-item
        name="src"
        definition="（白昼模式的）图片资源"
        values="String"
    >
    </property-item>
    <property-item
        name="src-dark"
        definition="暗夜模式的图片资源，如果没有设置该属性，则在暗夜模式时使用 0.7 透明度的 src 属性的图像。"
        values="String"
    >
    </property-item>
    <property-item
        name="size"
        definition="头像的尺寸"
        :values="['small', 'normal', 'large']"
    >
    </property-item>
    <property-item
        name="size"
        definition="头像的形状"
        :values="['square', 'rounded-square', 'circle']"
    >
    </property-item>
    <property-item
        name="lazy"
        definition="是否启用懒加载。该属性可通过全局的 settings.defaults.avatar_lazy 设置。默认使用 settings.defaults.image_lazy 的值。"
        defaults="false"
        values="Boolean"
    >
    </property-item>
    <property-item
        name="loading"
        definition="图片加载中状态，设置为 true 时，使用组件内置的加载样式。也可以传入自定义的 Vue 组件。该属性可通过全局的 settings.defaults.avatar_loading 设置。默认使用 settings.defaults.image_loading 的值。"
        defaults="false"
        :values="[ 'true', 'false', 'VueComponent' ]"
    >
    </property-item>
    <property-item
        name="error"
        definition="图片加载失败状态，设置为 true 时，使用组件内置的加载失败样式。也可以传入自定义的 Vue 组件。该属性可通过全局的 settings.defaults.avatar_error 设置。默认使用 settings.defaults.image_error 的值。"
        defaults="false"
        :values="[ 'true', 'false', 'VueComponent' ]"
    >
    </property-item>
</property-block>