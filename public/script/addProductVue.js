let app = new Vue({
    el: '#app',
    data: {
        productName: '',
        vendorId: '',
        Price: '',
        vendors: []
    },
    mounted() {
        axios.get('/api/vendors/vendorlist ')
            .then((req, res) => {
                app.vendors = req.data
            })
            .catch((err) => console.log(err))
    },
    methods: {
        AddToDb() {
            
            axios.post('/api/products/addproduct', {
                    name: app.productName,
                    vendorId: app.vendorId,
                    price: app.Price,
                })
                .then(function (response) {
                    console.log(" ProductAdded")
                    window.location.href = "/"
                })
        }
    }

})