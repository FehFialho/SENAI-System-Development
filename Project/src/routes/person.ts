import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();
const people: object[] = [];

router
    .post('/registrar', (req: Request, res: Response) => {
        const { name, lastname } = req.body
        console.log(name, lastname)
        people.push({name, lastname})
        res.status(200).send({ message: `Usuário ${name} ${lastname} registrado com sucesso!`})
    })

    .get('/usuarios', (req: Request, res: Response) => {
        res.status(200).send({ users: people})
    })

//...

export default router;