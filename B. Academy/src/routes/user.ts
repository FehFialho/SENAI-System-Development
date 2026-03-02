import express, { Request, response, Response, Router } from 'express';
import User from '../models/User';
import UserController from '../controllers/UserController';
import { validateUserRegister } from '../middlewares/userMiddleware';

const router = express.Router();

router  
    .post('/register', validateUserRegister, UserController.registerUser)

    .get('/users', UserController.getUsers)

    .get('/users/:id', UserController.getUserById)

    .put('/users/replace/:id', UserController.replaceById)

    .put('/users/update/:id', UserController.updateById)

    .delete('/users/delete/:id', UserController.deleteById);

export default router;