import { Express } from 'express';
import express from 'express'
import product from './products'
import auth from './auth';

export default function (app: Express) {
    app
        .use(express.json()) // Valida se o objeto está nos padrões
        .use('/api', product)
        .use('/api/auth', auth)
}