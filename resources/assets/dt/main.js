require('./bootstrap');

import Vue from 'vue'
import Iview from 'iview'
import routes from './router/router'
import VueRouter from 'vue-router';
import 'iview/dist/styles/iview.css'

Vue.use(VueRouter);
Vue.use(Iview);

const router = new VueRouter({
    //mode: 'history',
    routes,
});

/*设置线上环境api前缀*/
if (process.env.NODE_ENV == 'development') {
    axios.defaults.baseURL = 'http://api.s1.lpg.com';
}else if(process.env.NODE_ENV == 'production'){
    axios.defaults.baseURL = 'http://api.lpg.com';
    axios.defaults.transformRequest = function (data) {
        return Qs.stringify(data);
    };
}

new Vue({
    router,
}).$mount('#app');