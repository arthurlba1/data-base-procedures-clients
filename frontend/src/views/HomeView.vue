<template>
    <v-container
        fill-height
        fluid
    >
        <v-row
            no-gutters
        >
            <navbar-component />
        </v-row>
    </v-container>
</template>

<script>
import NavbarComponent from '../components/NavbarComponent.vue'

export default {
    name: 'HomeView',
    components: {
        NavbarComponent
    }
}
</script>
