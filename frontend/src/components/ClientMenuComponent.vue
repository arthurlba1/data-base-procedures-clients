<template>
    <v-container fluid>
        <v-row align="center">
            <v-col
                class="d-flex"
                cols="12"
                sm="6"
            >
                <v-select
                :items="crud"
                label="Clients Options"
                prepend-icon="mdi-account-details"
                />
            </v-col>
        </v-row>
  </v-container>
</template>

<script>
export default {
    name: 'ClientMenuComponent',
    props: {
        crud: {
            type: Array,
            required: true
        }
    }
}
</script>