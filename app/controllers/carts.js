const data = {
  carts: require("../models/carts.json"),
  setCart: (data) => {
    this.carts = data;
  },
};

const getCarts = (req, res) => {
  res.json(data.carts)
};

const getCart = () => {};

const createCart = () => {};

const updateCart = () => {};

const deleteCart = () => {};

module.exports = {
  getCart,
  getCarts,
  createCart,
  updateCart,
  deleteCart,
};
