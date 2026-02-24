## Instalar Dependências

Instalar manualmente ou rodar ``` npm i```

## Estrutura de Pastas

Crie a seguinte estrutura:

```
src/
 ├── server.ts
 └── routes/
      └── person.ts
```
## Criando o Arquivo de Rotas

Crie o arquivo:

```
src/routes/person.ts
```

### Código base de rotas (CRUD simples):

```ts
import { Router, Request, Response } from 'express'

const router = Router()

// Simulando banco de dados
let people: any[] = []

// CREATE
router.post('/', (req: Request, res: Response) => {
  const { name, lastname } = req.body
  const newUser = { id: people.length + 1, name, lastname }

  people.push(newUser)

  res.status(201).json(newUser)
})

// READ - TODOS
router.get('/', (req: Request, res: Response) => {
  res.json(people)
})

// READ - POR ID
router.get('/:id', (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const user = people.find(p => p.id === id)

  if (!user) {
    return res.status(404).json({ message: 'Usuário não encontrado' })
  }

  res.json(user)
})

// UPDATE
router.put('/:id', (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const { name, lastname } = req.body

  const user = people.find(p => p.id === id)

  if (!user) {
    return res.status(404).json({ message: 'Usuário não encontrado' })
  }

  user.name = name ?? user.name
  user.lastname = lastname ?? user.lastname

  res.json(user)
})

// DELETE
router.delete('/:id', (req: Request, res: Response) => {
  const id = Number(req.params.id)

  const index = people.findIndex(p => p.id === id)

  if (index === -1) {
    return res.status(404).json({ message: 'Usuário não encontrado' })
  }

  people.splice(index, 1)

  res.status(204).send()
})

export default router
```
## Conectando as Rotas no Servidor

Abra ou crie o arquivo:

```
src/server.ts
```

Adicione:

```ts
import express from 'express'
import personRoutes from './routes/person'

const app = express()
const port = 3000

app.use(express.json()) // Permite usar req.body

// Definindo prefixo das rotas
app.use('/person', personRoutes)

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})
```
## Como Testar as Rotas

Base da URL:

```
http://localhost:3000/person
```

1. Criar usuário - POST → `/person`

2. Listar todos - GET → `/person`

3. Buscar por ID - GET → `/person/1`

4. Atualizar - PUT → `/person/1`

5. Deletar - DELETE → `/person/1`