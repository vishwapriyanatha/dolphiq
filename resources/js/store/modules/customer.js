const state = {
    search: '',
    formData: {
        id: 0,
        first_name: '',
        last_name: '',
        phone_number: '',
        email_address: '',
    },
    customers: [],
    tableOption: {
        page: 1,
        itemsPerPage: 10
    },
    totalItems: 10
};

const actions = {
    updateSearch({commit, dispatch}, value) {
        commit('setSearch', value.search);
        dispatch('getCustomers', value.page)
    },
    deleteCustomer({commit, dispatch}, id) {
        axios.delete('/customer/' + id);
    },
    getCustomer({commit, dispatch}, id) {
        axios.get('/customer/' + id).then((response) => {
            let customerData = response.data.data;
            Object.keys(customerData).forEach(function (key) {
                state.formData[key] = customerData[key];
            });
        });
    },
    createCustomer() {
        axios.post('/customer', state.formData);
    },
    updateCustomer(context) {
        axios.put('/customer/' + state.formData.id, state.formData);
    },
    updateFormData({commit}, value) {
        commit('setFormData', value);
    },

    getCustomers({commit, state}, page) {
        let page_number = page.page || state.tableOption.page;
        let rowsPerPage = page.itemsPerPage || state.tableOption.itemsPerPage;
        axios.get('/customer?page=' + page_number + '&rowsPerPage=' + rowsPerPage + '&filter=' + state.search)
            .then((response) => {
                commit('setCustomers', response.data.data);
            });
    },
};
const mutations = {
    setSearch(state, payload) {
        state.search = payload;
    },
    setFormData(state, payload) {
        state.formData = payload;
    },
    setCustomers(state, payload) {
        state.customers = payload.data
        state.tableOption.page = payload.current_page
        state.tableOption.rowsPerPage = payload.per_page
        state.totalItems = payload.total
    }
};

const getters = {
    getCustomers: (state) => state.customers,
    getTotalItems: (state) => state.totalItems,
    getPagination: (state) => state.tableOption,
    getRowsPerPage: (state) => state.tableOption.rowsPerPage,
    getFormData: (state) => state.formData,
    getSearch: (state) => state.search
}

export default {
    state,
    getters,
    actions,
    mutations
};
