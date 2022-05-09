<template>
    <v-row no-gutters>
        <v-col cols="12">
            <v-data-table
                :headers="headers"
                :items="clients"
                class="elevation-1"
            ></v-data-table>
        </v-col>
    </v-row>
</template>

<script>
import api from '../service/api'

export default {
    name: 'ClientSubListComponent',
    data: function() {
        return {
            clients: {},
            headers: [
            {
                align: 'start',
                sortable: false,
                value: 'name',
            },
            { text: 'ID', value: 'CustomerID' },
            { text: 'Name', value: 'CompanyName' },
            { text: 'Country', value: 'Country' },
            { text: 'Phone', value: 'Phone' },
            ],
        }
    },
    created () {
        this.clients = this.getClients()
    },
    methods: {
        getClients() {
            let clients = api.get('/getCustomers').then(response => (this.clients = response.data))
            console.log(clients.data)
            return clients.data
        },
    },
}
</script>