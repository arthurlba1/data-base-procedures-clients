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

                <v-text-field
                    label="Company Name"
                    v-model="createBean.companyName"
                    :counter="40"
                    :rules="companyNameRules"
                    required
                ></v-text-field>

                <v-text-field
                    label="Contact Name"
                    v-model="createBean.contactName"
                    :counter="30"
                    :rules="contactNameRules"
                ></v-text-field>

                <v-text-field
                    label="Contact Title"
                    v-model="createBean.contactTitle"
                    :counter="30"
                    :rules="contactTitleRules"
                ></v-text-field>

                <v-text-field
                    label="Address"
                    v-model="createBean.address"
                    :counter="60"
                    :rules="addressRules"
                ></v-text-field>

                <v-text-field
                    label="City"
                    v-model="createBean.city"
                    :counter="15"
                    :rules="cityRules"
                ></v-text-field>

                <v-text-field
                    label="Region"
                    v-model="createBean.region"
                    :counter="15"
                    :rules="regionRules"
                ></v-text-field>

                <v-text-field
                    label="Postal Code"
                    v-model="createBean.postalCode"
                    :counter="10"
                    :rules="createBean.postalCodeRules"
                ></v-text-field>

                <v-text-field
                    label="Country"
                    v-model="createBean.country"
                    :counter="15"
                    :rules="countryRules"
                ></v-text-field>

                <v-text-field
                    label="Phone"
                    v-model="createBean.phone"
                    :counter="24"
                    :rules="phoneRules"
                ></v-text-field>

                <v-text-field
                    label="Fax"
                    v-model="createBean.fax"
                    :counter="24"
                    :rules="faxRules"
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
                id: '',
                companyName: '',
                contactName: '',
                contactTitle: '',
                address: '',
                city: '',
                region: '',
                postalCode: '',
                country: '',
                phone: '',
                fax: ''
            },
            valid: true,
            id: '',
            idRules: [
                v => !!v || 'ID is required',
                v => (v && v.length == 5) || 'ID should have 5 caracters'
            ],
            companyName: '',
            companyNameRules: [
                v => !!v || 'Company name is required',
                v => (v.length <= 40) || 'Company name should have less then 40 caracters'
            ],
            contactName: '',
            contactNameRules: [
                v => (v.length <= 30) || 'Contact name should have less then 30 caracters'
            ],
            contactTitle: '',
            contactTitleRules: [
                v => (v.length <= 30) || 'Contact title should have less then 30 caracters'
            ],
            address: '',
            addressRules: [
                v => (v.length <= 60) || 'Address should have less then 60 caracters'
            ],
            city: '',
            cityRules: [
                v => (v.length <= 15) || 'City should have less then 15 caracters'
            ],
            region: '',
            regionRules: [
                v => (v.length <= 15) || 'Region should have less then 15 caracters'
            ],
            postalCode: '',
            postalCodeRules: [
                v => (v.length <= 10) || 'Postal code should have less then 10 caracters'
            ],
            country: '',
            countryRules: [
                v => (v.length <= 15) || 'Country should have less then 15 caracters'
            ],
            phone: '',
            phoneRules: [
                v => (v.length <= 24) || 'Phone should have less then 24 caracters',
                v => /(\(d{2,3}\))?\d+(-\d+)?/.test(v) || 'Phone should folow the correct format',
            ],
            fax: '',
            faxRules: [
                v => (v.length <= 24) || 'Phone should have less then 24 caracters',
                v => /(\(d{2,3}\))?\d+(-\d+)?/.test(v) || 'Phone should folow the correct format',
            ],
        }),

        methods: {
            submit () {
                let data = {
                    CustomerID: this.createBean.id,
                    CompanyName: this.createBean.companyName,
                    ContactName: this.createBean.contactName,
                    ContactTitle: this.createBean.contactTitle,
                    Address: this.createBean.address,
                    City: this.createBean.city,
                    Region: this.createBean.region,
                    PostalCode: this.createBean.postalCode,
                    Country: this.createBean.country,
                    Phone: this.createBean.phone,
                    Fax: this.createBean.fax
                };
                data = JSON.parse(JSON.stringify(data).replace(/:""/gi, ":null"));
                console.log(data)
                api.post('/createCustomer', data)
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
