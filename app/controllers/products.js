
const data = {
  products: require("../models/products.json"),
  setProducts: (data) => { this.products = data; }
};

const _ = require('underscore');


const getProducts = (req, res) => {
  res.json(data.products)

};

const getProduct = (req, res) => {
  const product = data.products.find(prod => prod.id === parseInt(req.params.id))
  if (!product) return res.status(404).send('Producto no encontrado')
  else res.send(product)

};


const createProduct = (req, res) => {
  const { name, description, code, price, photo, stock } = req.body
  if (name && description && code && price && photo && stock) {
    const id = data.products.length + 1
    const timestamp = Date.now()
    const newProduct = { ...req.body, id, timestamp }
    data.products.push(newProduct)
    res.json(data.products)
  } else {
    res.status(500).send('Error en Alta del Producto')
  }
}


  const updateProduct = (req, res) => {
    const { id } = req.params;
    const { name, description, code, price, photo, stock } = req.body;
    if (name && description && code && price && photo && stock) {
      _.each(data.products, (product, i) => {
        if (product.id == id) {
          product.name = name;
          product.description = description;
          product.code = code;
          product.price = price;
          product.photo = photo;
          product.stock = stock;

        }
      })
      
      res.json(data.products)
    } else {
      res.status(500).json({ error: 'Error en actualización del producto'})
    }
    
  }

  
  const deleteProduct = (req, res) => {
    const { id } = req.params
    _.each(data.products, (product, i) => {
      if (product.id == id) {
          data.products.splice(i, 1)
        }
    })
    res.send(data.products)
  };

  module.exports = {
    getProduct,
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
  }


