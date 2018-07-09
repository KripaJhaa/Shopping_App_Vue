const route = require('express').Router()
const path = require('path')
const User = require('./db').User
const Passport = require('./passport')

route.get('/', (req, res) => {
    // console.log("Redirecting...")
    res.sendFile(path.join(__dirname, 'public/views/index.html'))
})

route.get('/products/addproducts', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/views/add_product.html'))
})

route.get('/cart', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/views/cart_page.html'))
})

// Authentication
route.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/views/login.html'))
})

route.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/views/signup.html'))
})

route.post('/signup', (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password
    }).then((user) => {
        if (user) {
            res.redirect('/login')
        }
    }).catch((err) => res.send("ERROR CREATING USER" + err))
})

route.get('/checkLogin', (req, res) => {
   
    if (req.user) {
        User.find({
                where: {
                    id: req.user.id
                }
            })
            .then((user) => {
                res.send(user)
            })
    }
})


route.post('/signin', Passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/signin'
}))

route.post('/logout',(req,res)=>{
    console.log("log out")
    req.logout()
    req.user=null
    res.json({
        success:true
    })
})


route.post('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'public/views/error.html'))
})

module.exports = {
    route
}