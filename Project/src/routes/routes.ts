import { Express } from 'express';
import express from 'express'
import person from './person.ts'

export default function (app: Express) {
    app
        .use(express.json()) // Valida se o objeto está nos padrões
        .use('/api/person', person)
}