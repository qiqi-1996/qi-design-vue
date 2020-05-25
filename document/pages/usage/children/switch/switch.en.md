# Switch

## {{ $t("common.usage.preview") }}

<example></example>

## {{ $t("common.usage.usage") }}

```
&lt;q-switch&gt;&lt;/q-switch&gt;
&lt;!-- Disabled --&gt;

&lt;q-switch :value=&quot;true&quot;&gt;&lt;/q-switch&gt;
&lt;!-- Enabled --&gt;

&lt;q-switch disable&gt;&lt;/q-switch&gt;
&lt;!-- Turn off and disabled --&gt;

&lt;q-switch disable :value=&quot;true&quot;&gt;&lt;/q-switch&gt;
&lt;!-- Turn on and disabled --&gt;
```

{{ $t("common.usage.usage-tips") }}


## {{ $t("common.usage.property") }}

<property-block>
    <property-item
        name="size"
        definition="Size of switch"
        defaults="medium"
        :values="['small', 'medium', 'large']"
    >
        <q-switch size="small"></q-switch>
        <q-switch size="medium"></q-switch>
        <q-switch size="large"></q-switch>
    </property-item>
    <property-item
        name="value"
        definition="Active state of switch"
        defaults="false"
        values="Boolean"
    >
        <q-switch value></q-switch>
    </property-item>
    <property-item
        name="disable"
        definition="Disabled"
        defaults="false"
        values="Boolean"
    >
        <q-switch disable></q-switch>
    </property-item>
</property-block>
