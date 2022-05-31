const data = {
  carts: require("../models/carts.json"),
  setCart: (data) => {this.carts = data;},
};

const dataProd = {
  products: require("../models/products.json"),
  setProducts: (dataProd) => { this.products = dataProd; }
};

const _ = require("underscore");

const getCarts = (req, res) => {
  res.json(data.carts)
};


const getCart = (req, res) => {
  const cart = data.carts.find(
    (cart) => cart.id === parseInt(req.params.id)
  );
  if (!cart) return res.status(404).send("Carrito no encontrado");
  else res.send(cart);
};


const createCart = (req, res) => {
  const { products} = req.body
    if ( products) {
   
    const id = data.carts.length + 1
    const timestamp = Date.now()
    const newCart = { ...req.body, id, timestamp }
    data.carts.push(newCart)
    res.json(data.carts)
  } else {
    res.status(500).send("Error en Alta del Carrito");
  }
  
  
};

const addProduct = (req, res) => {
  const product = dataProd.products.find((product) => product.id === parseInt(req.params.id));
  if (!product) return res.status(404).send("Producto no encontrado");
  else   
    data.carts.push({ products:[product] })
  res.json(data.carts)
      
  }

const deleteCartProduct = (req, res) => {
  
}


const deleteCart = (req, res) => {
      const { id } = req.params;
      _.each(data.carts, (cart, i) => {
        if (cart.id == id) {
          data.carts.splice(i, 1);
        }
      });
      res.send(data.carts);
};



module.exports = {
  getCart,
  getCarts,
  createCart,
  addProduct,
  deleteCart,
  deleteCartProduct
};
