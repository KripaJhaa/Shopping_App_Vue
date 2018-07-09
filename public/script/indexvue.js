let app = new Vue({
    el: '#app',
    data: {
        selectedProduct: '',
        products: [],
        userId: '',
        userName: ''
    },
    mounted() {
        axios.get('/api/products/getAllProducts')
            .then((req, res) => {
                app.products = req.data.products
                let uId = req.data.userId

                if (uId == 0 || uId == undefined) {
                    app.userId = ''
                } else {
                    app.userId = uId
                }
            })
            .catch((err) => {
                console.log("Error " + err)
            })
    },

    methods: {
        addProduct() {
            window.location.href = "/products/addproducts"
        },
        addToCart(productId) {
            axios.post('/api/carts/addToCart/' + productId, {
                    userId: app.userId
                })
                .then((req, res) => {
                    if (req.data.message) {
                        alert("You are not logged in")
                    } else {
                        window.location.href = "/cart"
                    }
                })
                .catch((err) => {
                    console.log("Error Occured " + err)
                })
        },

        myCart() {
            if (app.userId) {
                window.location.href = "/cart"
            } else {
                window.location.href = "/login"
            }
        },

        login() {
            window.location.href = "/login"
        },

        signUp() {
            window.location.href = "/signup"
        },

        logout() {
            axios.post('/logout')
                .then((req, res) => {
                    app.userId = ''

                    console.log("Logging out....")
                    window.location.href = "/"
                })
        }


    }
})