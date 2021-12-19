import Vue from 'vue';
import VueRouter from 'vue-router';

import routes from './router.map.js'; //mapeamento das rotas
import store from './store';          //store de serviços

Vue.use(VueRouter);

const router = new VueRouter({
    routes
});

router.beforeEach((to, from, next) => {
    if(!store.state.auth.check && to.meta.auth){
        return router.push({name: 'auth.login'});
    }
    next();
});

export default router;