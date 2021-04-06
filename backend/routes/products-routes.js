const express = require("express");
const { getProducts, addProduct, deleteProduct, editProduct, searchProducts } = require("../controllers/products-controllers");

const router = express.Router();

router.get("/products", getProducts);

router.post("/product",  addProduct);
router.delete("/deleteProduct/:id", deleteProduct);
router.post("/updateProduct/:id",editProduct);
router.get("/searchProducts/:name",searchProducts)
module.exports = router;