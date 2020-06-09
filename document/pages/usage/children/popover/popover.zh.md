# 弹出框 <strong>Popover</strong>

## {{ $t("common.usage.preview") }}

<example></example>

## {{ $t("common.usage.usage") }}

{{ $t("common.usage.usage-tips") }}

```
&lt;!-- 默认样式 --&gt;

&lt;q-popover
    title=&quot;...&quot;
    text=&quot;...&quot;
    confirmText=&quot;确认&quot;
    cancelText=&quot;取消&quot;
&gt;
    &lt;q-button&gt;...&lt;/q-button&gt;
&lt;/q-popover&gt;

&lt;!-- 自定义弹出内容 --&gt;

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
        definition="激活模式"
        defaults="hover"
        :values="['none', 'click', 'hover']"
    >
        <q-popover text="悬浮弹出模式">
            <q-button>鼠标悬浮此处</q-button>
        </q-popover>
    </property-item>
    <property-item
        name="open"
        definition="是否打开（v-model）"
        defaults="false"
        values="Boolean"
    >
    </property-item>
    <property-item
        name="position"
        definition="弹窗位置"
        defaults="top"
        :values="['top-left', 'top', 'top-right', 'bottom-left', 'bottom', 'bottom-right', 'left-top', 'left', 'left-bottom', 'right-top', 'right', 'right-bottom']"
    >
        <q-popover text="左侧位置弹出" position="left">
            <q-button>鼠标悬浮此处</q-button>
        </q-popover>
    </property-item>
    <property-item
        name="width"
        definition="使用内置样式呈现的弹出框的宽度"
        defaults="100px"
        values="String"
    >
    </property-item>
    <property-item
        name="title"
        definition="设置弹出框内置样式的标题"
        values="String"
    >
        <q-popover title="弹出框标题">
            <q-button>鼠标悬浮此处</q-button>
        </q-popover>
    </property-item>
    <property-item
        name="text"
        definition="设置弹出框内置样式的文本内容"
        values="String"
    >
        <q-popover text="弹出框文本内容">
            <q-button>鼠标悬浮此处</q-button>
        </q-popover>
    </property-item>
    <property-item
        name="confirmText"
        definition="设置弹出框内置样式的确认按钮文字"
        values="String"
    >
        <q-popover title="Popover" confirmText="确认">
            <q-button>鼠标悬浮此处</q-button>
        </q-popover>
    </property-item>
    <property-item
        name="cancelText"
        definition="设置弹出框内置样式的取消按钮文字"
        values="String"
    >
        <q-popover title="Popover" cancelText="取消">
            <q-button>鼠标悬浮此处</q-button>
        </q-popover>
    </property-item>
</property-block>

## {{ $t("common.usage.events") }}

<event-block>
    <event-item
        name="confirm"
        definition="确认按钮被点击"
    ></event-item>
    <event-item
        name="cancel"
        definition="取消按钮被点击"
    ></event-item>
</event-block>