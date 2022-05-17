<template>
    <v-card
    elevation="2"
    shaped
    outlined
    >
        <v-card-title>
            {{this.name}}
        </v-card-title>
        <v-card-text>
            Price: ${{this.price}}
            <v-card-actions>
                <v-btn
                    fab
                    @click="remove"
                >
                    <v-icon>
                        mdi-minus
                    </v-icon>
                </v-btn>
                <v-btn
                    disabled
                >
                    {{this.count}}
                </v-btn>
                <v-btn
                    fab
                    @click="add"
                >
                    <v-icon>
                        mdi-plus
                    </v-icon>
                </v-btn>
            </v-card-actions>
        </v-card-text>
    </v-card>
</template>

<script>

export default {
    name: 'ProductComponent',
    props: {
        name: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    },
    data: () => ({
        count: 0,
    }),
    methods: {
        add() {
            if(this.count < this.quantity) {
                this.count++;
            }
        },
        remove() {
            if(this.count > 0) {
                this.count--;
            }
        }
    }
}
</script>