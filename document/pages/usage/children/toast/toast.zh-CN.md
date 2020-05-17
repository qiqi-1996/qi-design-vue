# Toast 消息

## {{ $t("common.usage.preview") }}

<example></example>

## {{ $t("common.usage.usage") }}

### 弹出消息

在 Vue 作用域下，通过全局方法 `toast(message, options)` 即可弹出消息：

```
// 弹出一个持续全局默认时长的消息
this.$qidesign.toast("message");

// 弹出一个持续 3000ms 的消息
this.$qidesign.toast("message", { duration: 3000 } );

// 弹出一个根据消息内容长度自动决定持续时间的消息
this.$qidesign.toast("message", { duration: "auto" } );
```

### 颜色与主题

在 `options` 中，通过 `scope` 属性传入当前组件作用域来继承颜色和主题：

```
this.$qidesign.toast("message", { scope: this });
```

也可以通过 `theme` 和 `color` 属性直接控制 Toast 消息的主题和颜色，这个方法的优先级最高。有关颜色和主题的内容，请参见 [主题组件](/#/usage/theme)。

```
this.$qidesign.toast("message", { theme: "dark", color: "spring" });
```

如果没有设置颜色和主题相关的属性，将会使用全局的默认设置。

### 全局设置

您可以通过全局设置，修改 Toast 消息默认的持续时间、颜色和主题等内容：

```
import { settings } from "@qiqi1996/qi-design-vue";

settings.defaults.toast_duration = 3000;
// 默认持续 3000ms

settings.defaults.toast_duration = "auto";
// 默认根据消息内容长度自动决定持续时间

settings.defaults.toast_theme = "dark";
// 默认主题

settings.defaults.toast_color = "poe";
// 默认颜色
```

{{ $t("common.usage.usage-tips") }}

<!-- ## {{ $t("common.usage.property") }} -->