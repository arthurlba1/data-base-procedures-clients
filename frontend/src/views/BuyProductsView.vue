<template>
    <v-container fluid>
        <v-row
            no-gutters
            justify="center"
            >
            <v-col cols="6">
                <v-spacer/>
                <product-component
                    v-for="(product, index) in this.products"
                    :key="index"
                    :name="product.ProductName"
                    :quantity="product.UnitsInStock"
                    :price="product.UnitPrice"
                />
                <v-btn
                    color="primary"
                >
                    Buy
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import api from '../service/api'
import ProductComponent from '../components/ProductComponent'

export default {
  components: { ProductComponent },
    name: 'BuyProductsView',
    data: () => ({
        products: null
    }),
    created () {
        this.products = this.getProducts()
    },
    methods: {
        getProducts() {
            let products = api.get('/getProducts').then(response => (this.products = response.data))
            console.log(products.data)
            return products.data
        }
    }
}
</script>
