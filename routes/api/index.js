const route = require('express').Router()
const product = require('../../db').Product

route.use('/products', require('./products'))
route.use('/carts', require('./carts'))
route.use('/vendors', require('./vendors'))

module.exports = {
    route
}