<template>
    <v-card
        width="1500"
        elevation="4"
    >
        <v-card-title class="pa-0">
            <v-toolbar
            flat
            class="deep-purple darken-1 white--text"
            >
                <v-toolbar-title>
                    <v-icon
                        left
                        color="grey lighten-2"
                    >
                        mdi-account-multiple
                    </v-icon>
                    Clients
                </v-toolbar-title>
            </v-toolbar>
        </v-card-title>
        <v-card-text>
            <v-row no-gutters>
                <v-col cols="12">
                    <v-list>
                        <client-list-component
                            :clients="clients"
                        />
                    </v-list>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>
import ClientListComponent from './ClientListComponent.vue'

export default {
    name: 'ClientListCardComponent',
    components: {
        ClientListComponent
    },
    props: {
        clients: {
            type: Object,
            required: true
        }
    },
}
</script>
