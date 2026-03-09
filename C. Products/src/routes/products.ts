import express from 'express'
import ProductController from '../controllers/ProductController';
import { validateBodyNotEmpty, validateObjectIdParam, validateRequiredFields } from '../middlewares/productMiddleware';

const router = express.Router();

router
  .post('/products', validateBodyNotEmpty, ProductController.registerProduct)
  .get('/products', ProductController.getProducts)
  .get('/products/:id', validateObjectIdParam("id"), ProductController.getProductById)
  .put('/products/:id', validateObjectIdParam("id"), validateRequiredFields, ProductController.update)
  .delete('/products/:id', validateObjectIdParam("id"), ProductController.delete)

export default router;