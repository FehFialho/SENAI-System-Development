import express, { Request, response, Response, Router } from 'express';

const router = express.Router();

// Simulando banco de dados
let users: any[] = []

// Registrar usuários
router
    .post('/register', (req: Request, res: Response) => {
        const { name, email, type } = req.body

        // Verificação!
        if (!name || !email || !type) {
            return res.status(400).send({
                message: "Campos obrigatórios: name, email e type"
            })
        }

        const id = users.length + 1 // Id Auto
        const isActive = true // Criou agora, deve estar ativo ne mkkk
        const createdAt = new Date().toISOString() // Tempo de agora

        users.push({ name, email, type, isActive, createdAt, id })

        res.status(201).send({
            message: `Usuário ${name} registrado com sucesso [ID - ${id}]!`
        })
    })

    .get('/get', (req: Request, res: Response) => {
        res.status(200).send({ users: users})

        if (users.length == 0)
        {
            return res.status(404).send({
                message: "Erro: Nenhum usuário registrado!"
            })    
        }
    })

export default router;

// {
//   "name": "Fernanda Fialho",
//   "email": "fernanda@email.com",
//   "type": "coordenador"
// }