# Install and Usage

## Package Manager <span style="font-size: 16px; opacity: 0.75;">Recommand</span>

It is easier to maintain the project through the package manager and build tools. Take the NPM package manager as an example: install and save the component library through the command **npm install --save @ qiqi1996/qi-design-vue** rely. Then, use the following code to import and register the component library in the entry file of the project.

```
import Vue from "vue";
import QiDesignVue from "@qiqi1996/qi-design-vue";

Vue.use(QiDesignVue);
```

## Directly Use

<q-button :href="`./qi-design-vue@${VERSION}.zip`" icon="download" type="primary" size="large">Download qi-design-vue@{{VERSION}}.zip</q-button>

After the download is complete, unzip it into the project and include it as follows:

```
&lt;!-- Introduce the component library through HTML --&gt;
&lt;link rel=&quot;stylesheet&quot; href=&quot;path/to/qi-deisgn-vue.css&quot;&gt;
&lt;script src=&quot;vue.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;path/to/qi-design-vue.js&quot;&gt;&lt;/script&gt;
```

```javascript
// If you using a build tool, you can also include it in the entry file
import Vue from "vue";
import QiDesignVue from "path/to/qi-design-vue.js";
import path/to/qi-design-vue.css";
```

```javascript
// Finally, register in Vue to use
Vue.use(QiDesignVue);

var vm = new Vue({
    el: "#app"
    ...
});
```
