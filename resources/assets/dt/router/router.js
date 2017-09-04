import App from '../App'

const example = r => require.ensure([], () => r(require('../page/Example')), './js/dt/example')

export default [{
    path: '',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
        //地址为空时跳转home页面
        {
            path: '',
            redirect: '/example'
        },
        {
            path: '/example',
            component: example
        },
    ]
}]
