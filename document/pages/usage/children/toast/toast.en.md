# Toast Message

## {{ $t("common.usage.preview") }}

<example></example>

## {{ $t("common.usage.usage") }}

In the Vue scope, the toast message can be popped up through the global method `toast`:

```
// Pop up a toast message that lasts for the global default duration
this.$qidesign.toast("message");

// Pop up a toast message lasting 3000ms
this.$qidesign.toast("message", { duration: 3000 } );

// Pop up a toast message that automatically determines the duration based on the length of the message content
this.$qidesign.toast("message", { duration: "auto" } );
```

In addition, you can modify the default duration of toast messages through global settings:

```
import { settings } from "@qiqi1996/qi-design-vue";

settings.defaults.toast_duration = 3000;
// The default lasts 3000ms

settings.defaults.toast_duration = "auto";
// By default, the duration is automatically determined according to the length of the toast message content
```

{{ $t("common.usage.usage-tips") }}

<!-- ## {{ $t("common.usage.property") }} -->