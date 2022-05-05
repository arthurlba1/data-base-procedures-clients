<template>
    <v-container
        fill-height
        fluid
    >
        <v-row
            align="center"
            justify="center"
            no-gutters
        >
            <client-card-component />
        </v-row>
    </v-container>
</template>

<script>
import ClientCardComponent from '../components/ClientCardComponent.vue'

export default {
    name: 'HomeView',
    components: { 
        ClientCardComponent
    }
}
</script>
