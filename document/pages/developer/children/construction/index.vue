<template>
    <document>
        <q-title :level="1" colorful>项目构建</q-title>

        <q-text>
            本项目主要使用 <strong>Webpack</strong> 作为构建工具，<strong>Babel</strong> 进行代码转译。并使用 <strong>Esm</strong> 处理 NodeJS 侧（构建相关代码）的 ES6/7 支持。在项目略微完善的后期，将考虑开发环境和编译时，分别使用 <strong>Webpack</strong> 和 <strong>Rollup</strong> 进行构建，以此获得最好的开发体验和编译结果。
        </q-text>

        <q-title :level="2">启动</q-title>

        <q-text>
            在 <strong>package.json</strong> 中可以看到项目的各项启动脚本，如下：
        </q-text>

        <codeblock lang="json">
            {
                "scripts": {
                    "start": "cross-env NODE_ENV=development node -r esm bootstrap.js development",
                    "dev": "cross-env NODE_ENV=development node -r esm bootstrap.js development",
                    "build": "cross-env NODE_ENV=production node -r esm bootstrap.js production",
                    "clean": "rm -rf dist/* state*.json",
                    "preview": "serve dist/document",
                    "analyse:document": "webpack-bundle-analyzer stats_document.json",
                    "analyse:library": "webpack-bundle-analyzer stats_library.json",
                    "publish:document": "node -r esm script/publish-document.js"
                }
            }
        </codeblock>

        <q-title :level="3">bootstrap.js</q-title>

        <q-text>
            在上述代码中可以看到项目都是通过 <strong>bootstrap.js</strong> 启动的，但是实际上主要的构建相关代码均放置在 <strong>/constructor</strong> 目录中。bootstrap.js 在这里时作为一个启动跳板，用于接收启动参数，并调配开发后编译任务的最终配置。有关这些内容将在后面讲解。
        </q-text>

        <q-title :level="3">开发环境</q-title>

        <q-text>
            <strong>npm run start</strong> 和 <strong>npm run dev</strong> 是相同的，都是用于启动开发环境。命令上，为了解决 Linux, Windows, ... 下设置环境变量的差异，因此通过 <strong>cross-env</strong> 传入环境变量。然后启动 <strong>node</strong>，通过 <strong>-r</strong> 参数选择启动时引用的包，以此通过 <strong>esm</strong> 使运行于 NodeJS 中的构建相关代码也可以使用 ES6/7 语法。最终通过 <strong>bootstrap.js</strong> 文件启动。
        </q-text>

        <q-title :level="3">编译构建</q-title>

    </document>
</template>