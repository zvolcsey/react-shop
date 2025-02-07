import express from 'express'
import { getProductsHandler } from '../controllers/productController'

const productRoutes = express.Router()

// desc     List products
// route    GET /api/v1/products/
productRoutes.get('/', getProductsHandler)

export default productRoutes
