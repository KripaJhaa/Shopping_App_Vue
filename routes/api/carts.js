const Cart = require('../../db').Cart
const User = require('../../db').User
const Product = require('../../db').Product
const route = require('express').Router()
const path = require('path')



route.get('/', (req, res) => {

    Cart.findAll({
            where: {
                userId: req.user.id
            },
            include: [{
                model: Product,
                as: 'product'
            }]
        })
        .then((carts) => {
            if (carts) {
                res.json(carts)
            } else {
                console.log('no products found in cart')
            }
        })
})

route.post('/minusProduct/:productId', (req, res) => {

    let uId = parseInt(req.session.passport.user)
    Cart.findOne({
            where: {
                productId: parseInt(req.params.productId),
                userId: parseInt(uId)
            }
        })
        .then((cart) => {
            if (cart && cart.quantity > 0) {
                cart.quantity--;
                cart.save()
            } else {
                cart.destroy({
                    where: {
                        productId: parseInt(req.params.productId),
                        userId: parseInt(uId)
                    }
                });
            }
        })

    res.json({
        success: true
    })
})


route.post('/removeProduct/:productId', (req, res) => {

    let uId = parseInt(req.session.passport.user)
    Cart.findOne({
            where: {
                productId: parseInt(req.params.productId),
                userId: parseInt(uId)
            }
        })
        .then((cart) => {
            if (cart) {
                cart.destroy({
                    where: {
                        productId: parseInt(req.params.productId),
                        userId: parseInt(uId)
                    }
                });
            } else {
                console.log("element not present")
            }
        })

    res.json({
        success: true
    })
})

route.post('/addToCart/:productId', (req, res) => {

    console.log("WRR")
    if (req.user) {

        let uId = parseInt(req.user.id)
        Cart.findOne({
                where: {
                    productId: parseInt(req.params.productId),
                    userId: parseInt(uId)
                }
            })
            .then((cart) => {
                if (cart) {
                    cart.quantity++
                        cart.save()
                } else {
                    const productCartAdd = new Cart({
                        productId: parseInt(req.params.productId),
                        userId: parseInt(uId),
                        quantity: 1
                    })
                    productCartAdd.save()
                }

                res.json({
                    success: true
                })
            })
            .catch((err) => console.log(err))
    } else {
        res.json({
            message: "You are not logged in"
        })
    }
})


exports = module.exports = route