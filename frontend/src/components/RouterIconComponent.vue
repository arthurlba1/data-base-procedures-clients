<template>
    <v-tooltip
        bottom
        opne-delay="300"
    >
        <template v-slot:activator="{ on }">
            <v-btn
                icon
                :to="url"
                v-on="on"
            >
                <v-icon color="grey lighten-2">{{ iconName }}</v-icon>
            </v-btn>
        </template>
        <span>{{iconLabel}}</span>
    </v-tooltip>
</template>

<script>
export default {
    name: 'RouterIconComponent',
    props: {
        iconName: {
            type: String,
            required: true
        },
        iconLabel: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    }    
}
</script>
