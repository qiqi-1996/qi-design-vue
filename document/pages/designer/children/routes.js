export default [
    {
        name: "icons",
        path: "icons",
        component: ()=>import(/* webpackChunkName: "icons" */"./icons/index.vue"),
    },
]