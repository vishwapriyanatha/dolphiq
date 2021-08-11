<template>
    <v-app>
        <div class="row">

            <div class="row col-sm-12">
                <div class="col-sm-4">
                    <v-btn small color="primary" @click="openCustomer">Add Customer</v-btn>
                </div>
                <div class="col-sm-4">
                    <v-btn small @click="csvFormat">
                        <i class="fas fa-download"></i>
                        CSV format
                    </v-btn>
                </div>
                <div class="col-sm-4">
                    <v-btn small @click="importCSV">Import CSV</v-btn>
                </div>
            </div>
            <div class="row col-sm-12">
                <v-card>
                    <v-card-title>
                        <v-text-field
                            v-model="search"
                            append-icon="mdi-magnify"
                            label="Search"
                            single-line
                            hide-details
                        ></v-text-field>
                    </v-card-title>
                    <v-data-table
                        :headers="headers"
                        :items="customers"
                        :options.sync="pagination"
                        class="elevation-1">
                        <template v-slot:item.id="{ item }">
                            <div class="service-action" align="right">
                                <a title="Delete" class="normal" href="#" @click.prevent="deleteCustomer(item)">
                                    <i class="far fa-trash-alt"></i>
                                </a>
                                <a title="Edit" class="normal" href="#" @click.prevent="editCustomer(item)">
                                    <i class="fas fa-edit"></i>
                                </a>
                            </div>
                        </template>
                    </v-data-table>
                </v-card>
            </div>
        </div>

        <div class="modal" tabindex="-1" role="dialog" id="manage_customer">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Manage Customer</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <ValidationObserver ref="observer" tag="form" v-slot="{handleSubmit}">
                        <form @submit.prevent="handleSubmit(submitForm)">
                            <div class="modal-body">
                                <div class="form-group">
                                    <label>First Name*</label>
                                    <ValidationProvider rules="required" name="First Name" v-slot="{ errors }">
                                        <input type="text" v-model="formData.first_name" class="form-control"/>
                                        <span class="error-font">{{ errors[0] }}</span>
                                    </ValidationProvider>
                                </div>
                                <div class="form-group">
                                    <label>Last Name*</label>
                                    <ValidationProvider rules="required" name="Last Name" v-slot="{ errors }">
                                        <input type="text" v-model="formData.last_name" class="form-control"/>
                                        <span class="error-font">{{ errors[0] }}</span>
                                    </ValidationProvider>
                                </div>
                                <div class="form-group">
                                    <label>Phone Number*</label>
                                    <ValidationProvider rules="required" name="Phone Number" v-slot="{ errors }">
                                        <input type="text" v-model="formData.phone_number" class="form-control"/>
                                        <span class="error-font">{{ errors[0] }}</span>
                                    </ValidationProvider>
                                </div>
                                <div class="form-group">
                                    <label>Email*</label>
                                    <ValidationProvider rules="required|email" name="Email" v-slot="{ errors }">
                                        <input type="text" v-model="formData.email_address" class="form-control"/>
                                        <span class="error-font">{{ errors[0] }}</span>
                                    </ValidationProvider>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <v-col class="text-right" cols="12" sm="4">
                                    <div class="my-2">
                                        <v-btn small color="primary" type="submit">
                                            {{ (hideSaveBtn) ? 'save' : 'update' }}
                                        </v-btn>
                                    </div>
                                </v-col>
                            </div>
                        </form>
                    </ValidationObserver>
                </div>
            </div>
        </div>

        <div class="modal" tabindex="-1" role="dialog" id="import_csv">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Import Customer</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <ValidationObserver ref="observer" tag="form" v-slot="{handleSubmit}">
                        <form @submit.prevent="handleSubmit(submitCSVForm)" enctype="multipart/form-data">
                            <div class="modal-body">
                                <div class="form-group">
                                    <label>CSV*</label>
                                    <input type="file" id="file" required ref="file" accept="csv" class="form-control"
                                           v-on:change="addFile">
                                </div>
                            </div>
                            <div class="modal-footer">
                                <v-col class="text-right" cols="12" sm="4">
                                    <div class="my-2">
                                        <v-btn small color="primary" type="submit">
                                            Upload
                                        </v-btn>
                                    </div>
                                </v-col>
                            </div>
                        </form>
                    </ValidationObserver>
                </div>
            </div>
        </div>
    </v-app>
</template>

<script>
    import swal from 'sweetalert';

    export default {
        name: "Customer",
        data() {
            return {
                csvFile: '',
                search: '',
                hideSaveBtn: true,
                menu: false,
                headers: []
            }
        },
        computed: {
            formData() {
                return this.$store.getters.getFormData
            },
            customers() {
                return this.$store.getters.getCustomers
            },
            totalItems() {
                return this.$store.getters.getTotalItems
            },
            rowsPerPageItems() {
                return this.$store.getters.getRowsPerPage
            },
            pagination: {
                get: function () {
                    return this.$store.getters.getPagination;
                },
                set: function (value) {
                    this.$store.dispatch('getCustomers', value)
                }
            },
        },
        methods: {
            getTableData() {
                let self = this;
                self.headers = [
                    {
                        text: 'Name',
                        align: 'start',
                        sortable: true,
                        value: 'name',
                    },
                    {
                        text: 'Phone Number',
                        align: 'start',
                        sortable: true,
                        value: 'phone_number',
                    },
                    {
                        text: 'Email',
                        align: 'start',
                        sortable: true,
                        value: 'email_address',
                    },
                    {
                        text: 'Action',
                        value: 'id'
                    },
                ];

            },
            addFile() {
                this.csvFile = this.$refs.file.files[0];
            },
            submitCSVForm() {
                let fileFormData = new FormData();
                fileFormData.append('file', this.csvFile);
                axios.post('/customer/import',
                    fileFormData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                );
                $('#import_csv').modal('hide')
            },
            submitForm() {
                let self = this;
                if (self.hideSaveBtn) {
                    self.addCustomer();
                } else {
                    self.updateCustomer();
                }
            },
            addCustomer() {
                delete this.formData.id;
                this.$store.dispatch('createCustomer')
                this.$store.dispatch('getCustomers', this.pagination)
                $('#manage_customer').modal('hide');
            },
            updateCustomer() {
                this.$store.dispatch('updateCustomer')
                this.$store.dispatch('getCustomers', this.pagination)
                $('#manage_customer').modal('hide');
            },
            resetFrom() {
                this.formData.id = 0;
                this.formData.first_name = this.formData.last_name = this.formData.phone_number = this.formData.email_address = '';
            },
            openModel() {
                this.$refs.observer.reset();
                this.resetFrom();
                $('#manage_customer').modal('show')
            },
            openCustomer() {
                let self = this;
                self.hideSaveBtn = true;
                this.openModel();
            },
            editCustomer(itemAction) {
                let self = this;
                self.openModel();
                self.hideSaveBtn = false;
                this.$store.dispatch('getCustomer', itemAction.id)
            },
            deleteCustomer(itemAction) {
                swal({
                    title: "Are you sure?",
                    icon: "warning",
                    buttons: ["No", "Yes"],
                    dangerMode: true,
                }).then((willDelete) => {
                    if (willDelete) {
                        this.$store.dispatch('deleteCustomer', itemAction.id)
                        this.$store.dispatch('getCustomers', this.pagination)
                    }
                });

            },
            importCSV() {
                this.$refs.file.value=null;
                $('#import_csv').modal('show')
            },
            csvFormat() {
                window.location = '/customer/export';
            }
        },
        beforeMount() {
            this.getTableData();
        },
        watch: {
            search(value) {
                this.$store.dispatch('updateSearch', {
                    'page': this.pagination,
                    'search': value
                })
            },
            formData: {
                handler(value) {
                    this.$store.dispatch('updateFormData', value)
                },
                deep: true
            },
            pagination: {
                handler() {
                    this.$store.dispatch('getCustomers', this.page)
                },
                update() {
                    this.$store.dispatch('getCustomers', this.page)
                },
                deep: true
            }
        }
    }
</script>

<style scoped>

</style>
