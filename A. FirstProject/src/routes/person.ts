import express, { Request, response, Response, Router } from 'express';

const router: Router = express.Router();
//const people: object[] = [];
const people: any[] = []


router
    .post('/registrar', (req: Request, res: Response) => {
        const { name, lastname, id } = req.body
        console.log(name, lastname)
        people.push({name, lastname, id})
        res.status(200).send({ message: `Usuário ${name} ${lastname} registrado com sucesso [ID - ${id}]!`})
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
        res.status(200).send({ response: `Atualizando usuário ${id} -> ${name} ${lastname}` })
   })

    .delete('/deletar/:id', (req: Request, res: Response) => {
        const id = Number(req.params.id)

        const index = people.findIndex(p => p.id === id)

        if (index === -1) {
            return res.status(404).send("Usuário não encontrado")
        }

        people.splice(index, 1)

        res.status(200).send("Usuário deletado com sucesso")
    })
//...

export default router;