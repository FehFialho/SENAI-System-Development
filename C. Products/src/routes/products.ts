import express from 'express'
import ProductController from '../controllers/ProductController';

const router = express.Router();

router.get('/all', ProductController.getProducts)

export default router;