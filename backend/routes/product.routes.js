import express from 'express';

import {addProduct, deleteProduct, getAllProducts, updateProduct} from "../controllers/product.controllers.js";

const router = express.Router();

// create route
router.post('/', addProduct)


//update route
router.patch('/:id', updateProduct)

// read router
router.get('/', getAllProducts)

//delete route
router.delete('/:id', deleteProduct)

export default router