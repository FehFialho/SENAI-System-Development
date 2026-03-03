import express, { Request, response, Response, Router } from 'express';
import User from '../models/User';
import UserController from '../controllers/UserController';
import { validateBodyNotEmpty, validateDuplicatedEmail } from '../middlewares/userMiddleware';

const router = express.Router();

router  
    .post('/register', validateBodyNotEmpty, validateDuplicatedEmail, UserController.registerUser)

    .get('/users', UserController.getUsers)

    .get('/users/:id', UserController.getUserById)

    .put('/users/replace/:id', validateDuplicatedEmail, UserController.replaceById)

    .patch('/users/update/:id', validateBodyNotEmpty, UserController.updateById)

    .delete('/users/delete/:id', validateBodyNotEmpty, validateDuplicatedEmail, UserController.deleteById);

export default router;