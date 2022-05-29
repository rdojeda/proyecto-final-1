const express = require("express");
const router = express.Router();
const {
  getCart,
  getCarts,
  createCart,
  updateCart,
  deleteCart
} = require("../controllers/carts");

router.get("/", getCarts);

router.get("/:id", getCart);

router.post("/", createCart);

router.put("/:id", updateCart);

router.delete("/:id", deleteCart);

module.exports = router;
