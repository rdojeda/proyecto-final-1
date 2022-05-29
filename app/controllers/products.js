
const data = {
  products: require("../models/products.json"),
  setProducts: (data) => {
    this.products = data;
  },
};

const _ = require('underscore');

/// FUNCIONA OK
const getProducts = (req, res) => {
  res.json(data.products)

};

///FUNCIONA OK
const getProduct = (req, res) => {
  const product = data.products.find(prod => prod.id === parseInt(req.params.id))
  if (!product) return res.status(404).send('Producto no encontrado')
  else res.send(product)

};
//FUNCIONA OK 
const createProduct = (req, res) => {
  const { name, description, code, price, photo, stock } = req.body
  if (name && description && code && price && photo && stock) {
    const id = data.products.length + 1
    const timestamp = Date.now()
    const newProduct = { ...req.body, id, timestamp }
    data.products.push(newProduct)
    res.status(200).send('Alta exitosa del Producto')
    res.json(data.products)
  } else {
    res.status(500).send('Error en Alta del Producto')
  }
}

///FUNCIONA OK
  const updateProduct = (req, res) => {
    const { id } = req.params
    const { name, description, code, price, photo, stock } = req.body
    if (name && description && code && price && photo && stock) {
      _.each(data.products, (product, i) => {
        if (product.id === id) {
          product.name = name
          product.description = description
          product.code = code
          product.price = price
          product.photo = photo
          product.stock = stock

        }
      })
      res.json(data.products)

    } else {
      res.status(500).json({ error: 'Hubo un error' })
    }
    
  }

  ///FUNCIONA  OK
  const deleteProduct = (req, res) => {
    const product = data.products.find(prod => prod.id === parseInt(req.params.id))
    if (!product) return res.status(404).send('Producto no encontrado')

    const idx = data.products.indexOf(product)
    data.products.splice(idx, 1)
    res.send(product)

  };

  module.exports = {
    getProduct,
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
  }


