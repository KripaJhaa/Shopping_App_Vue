let myapp = new Vue({
    el: '#nav-cart-component',
    data: {
        isLogged: false
    },
    template: `
    <nav class="navbar navbar-expand bg-dark navbar-dark fixed-top">
    <a class="navbar-brand" href="#" @click="home">Panda Shop</a>
    <ul class="navbar-nav" v-if="isLogged==true">
        <li class="nav-item">
            <button class="btn btn-sm btn-outline-secondary ml-2" @click="addProduct">Add Product</button>
        </li>
        <li class="nav-item">
            <button class="btn btn-sm btn-outline-secondary ml-2" @click="myCart">Cart</button>
        </li>
    </ul>

    <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul class="navbar-nav ml-auto" v-if="isLogged==false">
            <li class="nav-item">
                <button class="btn btn-sm btn-outline-primary ml-2" @click="login">Login</button>
            </li>
            <li class="nav-item">
                <button class="btn btn-sm btn-outline-primary ml-2" @click="signUp">Sign up</button>
            </li>
        </ul>
        <ul class="navbar-nav ml-auto" v-if="isLogged==true">
            <li class="nav-item">
                <button class="btn btn-sm btn-outline-danger ml-2" @click="logout">Logout</button>
            </li>
        </ul>
    </div>

</nav>    `,
    mounted() {
        this.checkLogin()
    },
    methods: {
        checkLogin() {
            axios.get('/checkLogin')
                .then((res) => {
                    console.log("Checking logging...")
                    if (res.data) {
                        this.isLogged = true
                    }
                })
        },
        addProduct() {
            window.location.href = "/products/addproducts"
        },
        home(){
            window.location.href = "/"
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