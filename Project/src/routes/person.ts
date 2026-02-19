import express, { Request, response, Response, Router } from 'express';

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

    .get('/usuarios/:id', (req: Request, res: Response) => {
        const { id } = req.params
        let convertedId = Number(id)
       res.status(200).send({ response: people[convertedId] })
   })

    .get('/filtro', (req: Request, res: Response) => {
        const { name, lastname } = req.query
       res.status(200).send({ response: `${name}, ${lastname}` })
   })

   .put('/atualizar/:id', (req: Request, res: Response) => {
        const {id} = req.params
        const {name,lastname} = req.body
   })

//...

export default router;