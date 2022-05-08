<template>
    <v-card
        width="900"
        elevation="2"
    >
        <v-card-title class="pa-0">
            <v-toolbar
            flat
            color="deep-purple"
            >
                <v-toolbar-title>
                    <v-icon left>
                        mdi-account-multiple
                    </v-icon>
                    Clients
                </v-toolbar-title>
            </v-toolbar>
        </v-card-title>
        <v-card-actions>
            <client-menu-component
                :crud="options"
            />
        </v-card-actions>
        <v-card-text>
            <v-list>
                <client-list-component
                />
            </v-list>
        </v-card-text>
    </v-card>
</template>

<script>
import ClientMenuComponent from '../components/ClientMenuComponent.vue'
import ClientListComponent from './ClientListComponent.vue'

export default {
    name: 'ClientCardComponent',
    components: {
        ClientMenuComponent,
        ClientListComponent
    },
    data: () => ({
       options: [
            'Create Client',
            'View Client',
            'Update Client',
            'Delete Client'
        ],
    }),
}
</script>
