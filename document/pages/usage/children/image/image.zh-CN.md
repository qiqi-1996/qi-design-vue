# 图片 <strong>Image</strong>

## {{ $t("common.usage.preview") }}

<example></example>

## {{ $t("common.usage.usage") }}

<!-- ```
<q-image src="light.jpg" src-dark="dark.jpg"></q-image>
``` -->

{{ $t("common.usage.usage-tips") }}

### 配置 Vue Loader

当我们在 Vue 单文件组件中引入图片时（尤其是本地图片资源） `<img src="picture.jpg" />`，实际上是 Vue Loader 将该语句自动处理成了 `<img :src="require('picture.jpg')">`，然后 picture.jpg 才得以被 file-loader 等模块处理。因此，要想让 q-image 组件也可以直接引入图片资源，需要配置 Vue Loader 以支持这一特性，下方给出了大致的配置例子，你也可以查看 [Vue Loader 官方文档](https://vue-loader.vuejs.org/zh/guide/asset-url.html) 以了解更多。

```javascript
rules: [{
    test: /\.vue$/,
    loader: "vue-loader",
    options: {
        transformAssetUrls: {
            "q-image": ["src", "src-dark"]
        }
    }
}]
```

如果您不想进行配置，也可以使用 require 语法为 q-image 提供资源地址：

```html
&lt;q-image :src=&quot;require(&#39;./picture.jpg&#39;)&quot;&gt;&lt;/q-image&gt;
```


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
        definition="暗夜模式的图片资源，如果没有设置该属性，则在暗夜模式时使用 0.75 透明度的 src 属性的图像。"
        values="String"
    >
    </property-item>
    <property-item
        name="mode"
        definition="填充模式，等价于 object-fit 属性。使用此属性时，需要为该组件设置宽度和高度样式。"
        :values="['none', 'fill', 'cover', 'contain', 'scale-down']"
    >
    </property-item>
    <property-item
        name="lazy"
        definition="是否启用懒加载。该属性可通过全局的 settings.defaults.image_lazy 设置。"
        defaults="false"
        values="Boolean"
    >
    </property-item>
    <property-item
        name="loading"
        definition="图片加载中状态，设置为 true 时，使用组件内置的加载样式。也可以传入自定义的 Vue 组件。该属性可通过全局的 settings.defaults.image_loading 设置。"
        defaults="false"
        :values="[ 'true', 'false', 'VueComponent' ]"
    >
    </property-item>
    <property-item
        name="error"
        definition="图片加载失败状态，设置为 true 时，使用组件内置的加载失败样式。也可以传入自定义的 Vue 组件。该属性可通过全局的 settings.defaults.image_error 设置。"
        defaults="false"
        :values="[ 'true', 'false', 'VueComponent' ]"
    >
    </property-item>
</property-block>