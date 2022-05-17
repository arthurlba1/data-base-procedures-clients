<template>
    <v-container fluid>        
        <v-row 
        align="center"
        no-gutters>
            <v-col>
                <v-form
                ref="form"
                v-model="valid"
                lazy-validation
                >
                <v-text-field
                    label="Customer ID"
                    v-model="createBean.id"
                    :counter="5"
                    :rules="idRules"
                    required
                ></v-text-field>

                <v-btn
                    :disabled="!valid"
                    color="success"
                    class="mr-4"
                    @click="submit"
                >
                    Submit
                </v-btn>
            
                <v-btn
                    color="error"
                    class="mr-4"
                    @click="reset"
                >
                    Close
                </v-btn>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
    import api from '../service/api'
    export default {
        data: () => ({
            createBean: {
                id: ''
            },
            valid: true,
            id: '',
            idRules: [
                v => !!v || 'ID is required',
                v => (v && v.length == 5) || 'ID should have 5 caracters'
            ]
        }),

        methods: {
            submit () {
                api.delete(`/deleteCustomer/${this.createBean.id}`)
            },
            reset () {
                this.$refs.form.clear()
            },
            resetValidation () {
                this.$refs.form.resetValidation()
            },
        },
    }
</script>
