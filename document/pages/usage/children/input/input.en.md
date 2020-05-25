# Input

## {{ $t("common.usage.preview") }}

<example></example>

## {{ $t("common.usage.usage") }}

```
&lt;q-input size=&quot;small&quot; placeholder=&quot;Small input&quot;&gt;&lt;/q-input&gt;
&lt;q-input size=&quot;small&quot; placeholder=&quot;Small input with icon&quot; icon=&quot;folder&quot;&gt;&lt;/q-input&gt;
&lt;q-input placeholder=&quot;Input&quot;&gt;&lt;/q-input&gt;
&lt;q-input placeholder=&quot;Input with icon&quot; icon=&quot;folder&quot;&gt;&lt;/q-input&gt;
```

{{ $t("common.usage.usage-tips") }}

## {{ $t("common.usage.property") }}

<property-block>
    <property-item
        name="size"
        definition="Input size"
        defaults="medium"
        :values="['small', 'medium', 'large']"
    >
        <q-input size="small"></q-input>
        <q-input size="medium"></q-input>
        <q-input size="large"></q-input>
    </property-item>
    <property-item
        name="type"
        definition="Input type"
        defaults="text"
        values="Same as HTML attributes"
    >
        <q-input type="password" value="password"></q-input>
    </property-item>
    <property-item
        name="icon"
        definition="Input icon"
        values="See Icon component"
    >
        <q-input icon="image"></q-input>
    </property-item>
    <property-item
        name="placeholder"
        definition="Placeholder"
        values="String"
    >
        <q-input placeholder="placeholder"></q-input>
    </property-item>
    <property-item
        name="value"
        definition="Content（v-model）"
        values="String"
    >
        <q-input value="123"></q-input>
    </property-item>
    <property-item
        name="disable"
        definition="Disabled"
        defaults="false"
        values="Boolean"
    >
        <q-input placeholder="Disabled" disable></q-input>
    </property-item>
</property-block>