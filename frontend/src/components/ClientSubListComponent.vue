<template>
    <v-hover v-slot:default="{ hover }">
    <v-card-subtitle
        :class="`elevation-${hover? 2: 0}`"
        class="transition-swing"
    >
        <v-row no-gutters>
            <v-col cols="12">
                <h1>{{ clientList }}</h1>
            </v-col>
        </v-row>
    </v-card-subtitle>
    </v-hover>
</template>

<script>
export default {
    name: 'ClientSubListComponent',
    props: {
        clientList: {
            type: String,
            required: true
        }
    }
}
</script>