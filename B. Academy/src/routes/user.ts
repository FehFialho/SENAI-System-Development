import express, { Request, response, Response, Router } from 'express';

const router = express.Router();

// Simulando banco de dados
let users: any[] = []

router.post('/register', (req: Request, res: Response) => {
const { name, email, type } = req.body
    console.log(name, email)
    const id = users.length + 1
    const isActive = true
    const createdAt = new Date().toISOString()
    users.push({name, email, type, isActive, createdAt, id})
    res.status(201).send({ message: `Usuário ${name} registrado com sucesso [ID - ${id}]!`})
})

export default router;

// {
//   "name": "Fernanda Fialho",
//   "email": "fernanda@email.com",
//   "type": "coordenador"
// }