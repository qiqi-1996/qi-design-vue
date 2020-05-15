# Popover

## {{ $t("common.usage.preview") }}

<example></example>

## {{ $t("common.usage.usage") }}

{{ $t("common.usage.usage-tips") }}

```
&lt;!-- Default Style --&gt;

&lt;q-popover
    title=&quot;...&quot;
    text=&quot;...&quot;
    confirmText=&quot;Confirm&quot;
    cancelText=&quot;Cancel&quot;
&gt;
    &lt;q-button&gt;...&lt;/q-button&gt;
&lt;/q-popover&gt;

&lt;!-- Customize Content --&gt;

&lt;q-popover&gt;
    &lt;q-button&gt;...&lt;/q-button&gt;
    &lt;div slot=&quot;content&quot;&gt;
        &lt;q-text&gt;...&lt;/q-text&gt;
    &lt;/div&gt;
&lt;/q-popover&gt;
```

## {{ $t("common.usage.property") }}

<property-block>
    <property-item
        name="mode"
        definition="Activation mode"
        defaults="hover"
        :values="['none', 'click', 'hover']"
    >
        <q-popover text="Hover pop-up mode">
            <q-button>Hover Me</q-button>
        </q-popover>
    </property-item>
    <property-item
        name="open"
        definition="Whether to open (v-model)"
        defaults="false"
        values="Boolean"
    >
    </property-item>
    <property-item
        name="position"
        definition="Popup position"
        defaults="top"
        :values="['top-left', 'top', 'top-right', 'bottom-left', 'bottom', 'bottom-right', 'left-top', 'left', 'left-bottom', 'right-top', 'right', 'right-bottom']"
    >
        <q-popover text="Pop up left" position="left">
            <q-button>Hover Me</q-button>
        </q-popover>
    </property-item>
    <property-item
        name="width"
        definition="The width of the pop-up box rendered using the built-in style"
        defaults="100px"
        values="String"
    >
    </property-item>
    <property-item
        name="title"
        definition="Set the title of the built-in style of the pop-up box"
        values="String"
    >
        <q-popover title="Popup Title">
            <q-button>Hover Me</q-button>
        </q-popover>
    </property-item>
    <property-item
        name="text"
        definition="Set the text content of the built-in style of the pop-up box"
        values="String"
    >
        <q-popover text="Popup text content">
            <q-button>Hover Me</q-button>
        </q-popover>
    </property-item>
    <property-item
        name="confirmText"
        definition="Set the confirm button text of the built-in style of the pop-up box"
        values="String"
    >
        <q-popover title="Popover" confirmText="Confirm">
            <q-button>Hover Me</q-button>
        </q-popover>
    </property-item>
    <property-item
        name="cancelText"
        definition="Set the cancel button text of the built-in style of the pop-up box"
        values="String"
    >
        <q-popover title="Popover" cancelText="Cancel">
            <q-button>Hover Me</q-button>
        </q-popover>
    </property-item>
</property-block>

## {{ $t("common.usage.events") }}

<event-block>
    <event-item
        name="confirm"
        definition="Confirm button was clicked"
    ></event-item>
    <event-item
        name="cancel"
        definition="Cancel button was clicked"
    ></event-item>
</event-block>