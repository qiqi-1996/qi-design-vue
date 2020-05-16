# Toast 消息

## {{ $t("common.usage.preview") }}

<example></example>

## {{ $t("common.usage.usage") }}

在 Vue 作用域下，通过全局方法 `toast` 即可弹出消息：

```
// 弹出一个持续全局默认时长的消息
this.$qidesign.toast("message");

// 弹出一个持续 3000ms 的消息
this.$qidesign.toast("message", { duration: 3000 } );

// 弹出一个根据消息内容长度自动决定持续时间的消息
this.$qidesign.toast("message", { duration: "auto" } );
```

此外，您可以通过全局设置，修改 Toast 消息默认的持续时间：

```
import { settings } from "@qiqi1996/qi-design-vue";

settings.defaults.toast_duration = 3000;
// 默认持续 3000ms

settings.defaults.toast_duration = "auto";
// 默认根据消息内容长度自动决定持续时间
```

{{ $t("common.usage.usage-tips") }}

<!-- ## {{ $t("common.usage.property") }} -->