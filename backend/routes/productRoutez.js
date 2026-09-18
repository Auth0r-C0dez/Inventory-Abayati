const express = require("express");
const router = express.Router();
const Product = require('../model/Products');


router.use('/products',productController);
module.exports= router;