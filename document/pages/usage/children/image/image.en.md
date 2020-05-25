# 图片 <strong>Image</strong>

## {{ $t("common.usage.preview") }}

<example></example>

## {{ $t("common.usage.usage") }}

{{ $t("common.usage.usage-tips") }}

### Configure Vue Loader

When we include local pictures in Vue Single File component as `<img src="picture.jpg" />`. But in fact, it's Vue Loader automatically processed the statement into `<img :src="require('picture.jpg')">`, Then picture.jpg can be processed by file-loader and other modules. Therefore, if you want the q-image component to directly import image resources, you need to configure Vue Loader to support this feature. The following gives a rough configuration example. You can also check the [Vue Loader Official Document](https://vue-loader.vuejs.org/guide/asset-url.html) to learn more

```javascript
rules: [{
    test: /\.vue$/,
    loader: "vue-loader",
    options: {
        transformAssetUrls: {
            "q-image": ["src", "src-dark"]
            "q-avatar": ["src", "src-dark"],
            // QAvatar may also involve local image includes
        }
    }
}]
```

If you do not want to configure, you can also use require syntax to provide the resource address for q-image:

```html
&lt;q-image :src=&quot;require(&#39;./picture.jpg&#39;)&quot;&gt;&lt;/q-image&gt;
```

## {{ $t("common.usage.property") }}

<property-block>
    <property-item
        name="src"
        definition="Image Resource (for Light Mode)"
        values="String"
    >
    </property-item>
    <property-item
        name="src-dark"
        definition="Image Resource for Dark Mode, If this attribute is not set, the image with the src attribute of 0.7 transparency is used in Dark Mode."
        values="String"
    >
    </property-item>
    <property-item
        name="mode"
        definition="Fill mode of the image, equivalent to object-fit attribute. When using this property, you need to set the width and height styles for the component."
        :values="['none', 'fill', 'cover', 'contain', 'scale-down']"
    >
    </property-item>
    <property-item
        name="lazy"
        definition="Whether to enable lazy loading. This property also can be set via global settings.defaults.image_lazy."
        defaults="false"
        values="Boolean"
    >
    </property-item>
    <property-item
        name="loading"
        definition="Image loading status, when set to true, use the built-in loading style of the component. You can also pass in custom Vue components. This property also can be set via global settings.defaults.image_loading."
        defaults="false"
        :values="[ 'true', 'false', 'VueComponent' ]"
    >
    </property-item>
    <property-item
        name="error"
        definition="Image loading failure status, when set to true, use the built-in failure style. You can also pass in custom Vue components. This property also can be set via global settings.defaults.image_error."
        defaults="false"
        :values="[ 'true', 'false', 'VueComponent' ]"
    >
    </property-item>
</property-block>