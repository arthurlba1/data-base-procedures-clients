<template>
    <v-app-bar
        class="deep-purple darken-2 white--text"
        app
    >
        <v-toolbar-title
            class="mr-3"
            style="cursor: pointer"
            @click="goToHomeView"
        >
            Future Orders
        </v-toolbar-title>
        <v-spacer />
        <router-icon-component
            iconName="mdi-account"
            iconLabel="Clients"
            url="/clients-list"
        />
        <router-icon-component
            iconName="mdi-account-plus"
            iconLabel="Create Client"
            url="/create-client"
        />
        <router-icon-component
            iconName="mdi-account-edit"
            iconLabel="Update Client"
            url="/update-client"
        />
        <router-icon-component
            iconName="mdi-account-remove"
            iconLabel="Delete Client"
            url="/delete-client"
        />
    </v-app-bar>
</template>

<script>
import RouterIconComponent from '../components/RouterIconComponent.vue'

  export default {
    name: "NavbarComponent",
    components: {
        RouterIconComponent
    },
    methods: {
        goToHomeView: function () {
            if (this.$router.currentRoute.name !== "/") {
                this.$router.push({name: "/"})
            }
        }
    }
  }
</script>
