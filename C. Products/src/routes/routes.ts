import { Express } from 'express';
import express from 'express'
import product from './products'

export default function (app: Express) {
    app
        .use(express.json()) // Valida se o objeto está nos padrões
        .use('/api/product', product)
}