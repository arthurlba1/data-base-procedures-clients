<template>
    <v-row no-gutters>
        <v-col cols="12">
            <v-list-item>
                <v-container class="pa-0">
                    <client-sub-list-component
                        v-for="(name, index) in clients"
                        :key="index"
                        :clientList="name"
                    />
                </v-container>
            </v-list-item>
        </v-col>
    </v-row>
</template>

<script>
import ClientSubListComponent from './ClientSubListComponent.vue'

export default {

    name: 'ClientListComponent',
    components: { ClientSubListComponent },
    props: {
        clients: {
            type: Object,
            required: true
        }
    },
}
</script>
