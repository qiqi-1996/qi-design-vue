# Avatar

## {{ $t("common.usage.preview") }}

<example></example>

## {{ $t("common.usage.usage") }}

```
&lt;q-avatar src=&quot;./avatar.png&quot; size=&quot;large&quot; shape=&quot;circle&quot;&gt;&lt;/q-avatar&gt;
&lt;!-- Display a large and round avatar picture --&gt;
```

{{ $t("common.usage.usage-tips") }}

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
        name="size"
        definition="Avatar size"
        :values="['small', 'normal', 'large']"
    >
    </property-item>
    <property-item
        name="size"
        definition="Avatar shape"
        :values="['square', 'rounded-square', 'circle']"
    >
    </property-item>
    </property-item>
    <property-item
        name="lazy"
        definition="Whether to enable lazy loading. This property also can be set via global settings.defaults.avatar_lazy. By default, the value of settings.defaults.image_lazy is used."
        defaults="false"
        values="Boolean"
    >
    </property-item>
    <property-item
        name="loading"
        definition="Image loading status, when set to true, use the built-in loading style of the component. You can also pass in custom Vue components. This property also can be set via global settings.defaults.avatar_loading. By default, the value of settings.defaults.image_loading is used."
        defaults="false"
        :values="[ 'true', 'false', 'VueComponent' ]"
    >
    </property-item>
    <property-item
        name="error"
        definition="Image loading failure status, when set to true, use the built-in failure style. You can also pass in custom Vue components. This property also can be set via global settings.defaults.avatar_error. By default, the value of settings.defaults.image_error is used."
        defaults="false"
        :values="[ 'true', 'false', 'VueComponent' ]"
    >
    </property-item>
</property-block>