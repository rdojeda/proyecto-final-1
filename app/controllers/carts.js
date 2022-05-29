const data = {
  carts: require("../models/carts.json"),
  setCart: (data) => {this.carts = data;},
};

const getCarts = (req, res) => {
  res.json(data.carts)
};

const getCart = (req, res) => {};

const createCart = (req, res) => {};

const updateCart = (req, res) => {};

const deleteCart = (req, res) => {};

module.exports = {
  getCart,
  getCarts,
  createCart,
  updateCart,
  deleteCart,
};
