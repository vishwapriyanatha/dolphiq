import Vue from 'vue';
import Router from 'vue-router';
import MainLayout from './components/MainComponent';
import Customer from "./components/Customer";

Vue.use(Router);
const router = new Router({
    routes: [
        {
            name: 'home',
            path: '/',
            component: MainLayout,
            redirect: {name: 'dolphiq'},
            children: [
                {
                    name: 'dolphiq',
                    path: '/dolphiq/',
                    component: Customer,

                }
            ]
        }]
});

export default router;
