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

new Vue({
    router,
}).$mount('#app');