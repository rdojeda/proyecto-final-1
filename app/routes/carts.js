const express = require("express");
const router = express.Router();
const {
  getCart,
  getCarts,
  createCart,
  addProduct,
  deleteCart,
  deleteCartProduct
} = require("../controllers/carts");

const validationRoute = require("../helpers/security");

router.get("/", getCarts);

router.get("/:id", getCart);

router.post("/", validationRoute, createCart);

router.post("/:id", validationRoute, addProduct);

router.delete("/:id", validationRoute, deleteCart);

router.delete("/:id/productos:id_prod", validationRoute, deleteCartProduct)


module.exports = router;
