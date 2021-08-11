import Vue from 'vue';
import Vuex from 'vuex';
import Customer from "./modules/customer.js";
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        customer: Customer
    }
});
