<template>
    <v-container fluid>
        <v-row
                no-gutters
                justify="center"
            >
                <client-list-card-component/>
            </v-row>
        </v-container>
</template>

<script>
import ClientListCardComponent from '../components/ClientListCardComponent.vue'

export default {
    name: 'ClientListView',
    components: {
        ClientListCardComponent
    },
    data: function() {
        return {
            clients: null
        }
    },
}
</script>
