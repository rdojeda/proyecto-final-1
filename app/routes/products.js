const express = require('express')
const router = express.Router()
const {
    getProduct,
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/products')


router.get('/', getProducts)

router.get('/:id', getProduct)

router.post('/', createProduct)

router.put('/:id', updateProduct)

router.delete('/:id', deleteProduct)

module.exports = router
