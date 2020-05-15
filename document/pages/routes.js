export default [
    {
        name: "404",
        path: "/404",
        component: ()=>import(/* webpackChunkName: "404" */"./404/index.vue"),
    },
    {
        name: "designer",
        path: "/designer",
        component: ()=>import(/* webpackChunkName: "designer" */"./designer/index.vue"),
        children: require(/* webpackChunkName: "designer" */"./designer/children/routes.js").default,
    },
    {
        name: "developer",
        path: "/developer",
        component: ()=>import(/* webpackChunkName: "developer" */"./developer/index.vue"),
        children: require(/* webpackChunkName: "developer" */"./developer/children/routes.js").default,
    },
    {
        name: "development",
        path: "/development",
        component: ()=>import(/* webpackChunkName: "development" */"./development/index.vue"),
    },
    {
        name: "index",
        path: "/index",
        component: ()=>import(/* webpackChunkName: "index" */"./index/index.vue"),
    },
    {
        name: "playground",
        path: "/playground",
        component: ()=>import(/* webpackChunkName: "playground" */"./playground/index.vue"),
    },
    {
        name: "playground2",
        path: "/playground2",
        component: ()=>import(/* webpackChunkName: "playground2" */"./playground2/index.vue"),
    },
    {
        name: "resource",
        path: "/resource",
        component: ()=>import(/* webpackChunkName: "resource" */"./resource/index.vue"),
    },
    {
        name: "update",
        path: "/update",
        component: ()=>import(/* webpackChunkName: "update" */"./update/index.vue"),
    },
    {
        name: "usage",
        path: "/usage",
        component: ()=>import(/* webpackChunkName: "usage" */"./usage/index.vue"),
        children: require(/* webpackChunkName: "usage" */"./usage/children/routes.js").default,
    },
    {
        name: "404",
        path: "*",
        component: ()=>import(/* webpackChunkName: "404" */"./404/index.vue"),
    },
]