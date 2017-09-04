require('./bootstrap');

import Vue from 'vue'
import routes from './router/router'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
    //mode: 'history',
    routes,
});

new Vue({
    router,
}).$mount('#app');