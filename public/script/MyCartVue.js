let cartApp = new Vue({
    el: "#cartPage",
    data: {
        cartProducts: [],
        subTotal: 0
    },
    mounted() {
        this.getCarts()
    },

    methods: {
        getCarts() {
            axios.get('api/carts')
                .then((res) => {
                    this.cartProducts = res.data
                })
        },
        removeItem(productId) {
            axios.post('api/carts/removeProduct/' + productId)
                .then((req, res) => {
                    this.getCarts();
                })
                .catch((err) => {
                    console.log("Error Occured " + err)
                })
        },

        plus(productId) {
            axios.post('api/carts/addToCart/' + productId)
                .then((req, res) => {
                    this.getCarts();
                })
                .catch((err) => {
                    console.log("Error Occured " + err)
                })
        },


        minus(productId) {

            axios.post('api/carts/minusProduct/' + productId)
                .then((req, res) => {
                    this.getCarts();
                })
                .catch((err) => {
                    console.log("Error Occured " + err)
                })
        },

        calculateTotal(){
            let total = 0
            for(cartProduct of this.cartProducts){
                total += (cartProduct.quantity * cartProduct.product.price)
            }
            return total
        }

    }

})