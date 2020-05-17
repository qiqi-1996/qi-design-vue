# Toast Message

## {{ $t("common.usage.preview") }}

<example></example>

## {{ $t("common.usage.usage") }}

### Popup message

In the Vue scope, the toast message can be popped up through the global method `toast(message, options)`:

```
// Pop up a toast message that lasts for the global default duration
this.$qidesign.toast("message");

// Pop up a toast message lasting 3000ms
this.$qidesign.toast("message", { duration: 3000 } );

// Pop up a toast message that automatically determines the duration based on the length of the message content
this.$qidesign.toast("message", { duration: "auto" } );
```

### Colors and themes

In `options`, pass the current scope of the component through the `scope` attribute to inherit the color and theme:

```
this.$qidesign.toast("message", { scope: this });
```

You can also directly control the theme and color of Toast Message through the `theme` and` color` attributes. This method has the highest priority. For the colors and themes, see [Theme Component](/#/usage/theme)。

```
this.$qidesign.toast("message", { theme: "dark", color: "spring" });
```

If the color and theme related attributes are not set, the global default settings will be used.

### Global settings

In addition, you can modify the default duration, color and theme of Toast Messages through global settings:

```
import { settings } from "@qiqi1996/qi-design-vue";

settings.defaults.toast_duration = 3000;
// The default lasts 3000ms

settings.defaults.toast_duration = "auto";
// By default, the duration is automatically determined according to the length of the toast message content

settings.defaults.toast_theme = "dark";
// Default theme

settings.defaults.toast_color = "poe";
// Default color
```

{{ $t("common.usage.usage-tips") }}

<!-- ## {{ $t("common.usage.property") }} -->