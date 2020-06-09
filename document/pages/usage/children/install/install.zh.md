# 安装和使用

## 包管理器 <span style="font-size: 16px; opacity: 0.75;">推荐</span>

通过包管理器和构建工具可以更方便的维护项目，以 NPM 包管理器为例：通过命令 **npm install --save @qiqi1996/qi-design-vue** 将组件库安装并保存依赖。然后，使用下列代码在项目的入口文件中引入并注册组件库。

```
import Vue from "vue";
import QiDesignVue from "@qiqi1996/qi-design-vue";

Vue.use(QiDesignVue);
```

## 直接引用

<q-button :href="`./qi-design-vue@${VERSION}.zip`" icon="download" type="primary" size="large">直接下载 qi-design-vue@{{VERSION}}.zip</q-button>

下载完成后解压到项目中，按下述方式进行引用即可：

```
&lt;!-- 通过 HTML 方式引入组件库 --&gt;
&lt;link rel=&quot;stylesheet&quot; href=&quot;path/to/qi-deisgn-vue.css&quot;&gt;
&lt;script src=&quot;vue.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;path/to/qi-design-vue.js&quot;&gt;&lt;/script&gt;
```

```javascript
// 如果你使用了构建工具，也可以在入口文件中引入
import Vue from "vue";
import QiDesignVue from "path/to/qi-design-vue.js";
import path/to/qi-design-vue.css";
```

```javascript
// 最后在 Vue 中注册即可使用
Vue.use(QiDesignVue);

var vm = new Vue({
    el: "#app"
    ...
});
```
