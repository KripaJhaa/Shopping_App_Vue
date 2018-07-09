const route = require('express').Router()
const product = require('../../db').Product
const vendor = require('../../db').Vendor

route.get('/getAllProducts', (req, res) => {
    if (req.session.passport) {
        id = req.session.passport.user
    } else {
        id = 0
    }
    product.findAll({
            include: {
                all: true
            }
        })
        .then((ProductList) => {
            res.status(200).json({
                products: ProductList,
                userId: id
            })
        })
        .catch((err) => {
            res.status(500).json({
                error: err
            })
        })
})
route.post('/addproduct', (req, res) => {
    
    console.log("add product")
    const productAdd = new product({
        name: req.body.name,
        price: parseFloat(req.body.price),
        vendorId: parseInt(req.body.vendorId)
    })

    productAdd.save()
    console.log(" data saved " + productAdd)

    res.json({
        success: true,
        id: productAdd.length - 1
    })
})


module.exports = route