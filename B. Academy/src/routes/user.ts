import express, { Request, response, Response, Router } from 'express';
import User from '../models/User';
import UserController from '../controllers/UserController';

const router = express.Router();

router  
    .post('/register', UserController.registerUser)

    .get('/users', UserController.getUsers)

    .get('/users/:id', UserController.getUserById);

export default router;