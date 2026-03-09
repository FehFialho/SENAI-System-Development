import express from 'express'
import ProductController from '../controllers/ProductController';
import { validateBodyNotEmpty, validateRequiredFields } from '../middlewares/productMiddleware';

const router = express.Router();

router
  .post('/products', validateBodyNotEmpty, ProductController.registerProduct)
  
  .get('/products', ProductController.getProducts)
  .get('/products/filter', ProductController.filter)

  .get('/products/:id', ProductController.getProductById)
  .put('/products/:id', validateBodyNotEmpty, ProductController.update)
  .delete('/products/:id', ProductController.delete)

export default router;