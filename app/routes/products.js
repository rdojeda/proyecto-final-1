const express = require('express')
const router = express.Router()
const {
    getProduct,
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/products')

const validationRoute = require('../helpers/security')

router.get('/', getProducts)

router.get('/:id', getProduct)

router.post('/',validationRoute, createProduct)

router.put('/:id', validationRoute, updateProduct)

router.delete('/:id',validationRoute, deleteProduct)

module.exports = router
