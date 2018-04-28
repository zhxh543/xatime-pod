const routers = [{
    path: '/',
    meta: {
        title: ''
    },
    component: (resolve) => require(['./views/index.vue'], resolve)
}, {
    path: '/drag',
    meta: {
        title: '拖拽添加'
    },
    component: (resolve) => require(['./views/custom/index.vue'], resolve)
}];
export default routers;