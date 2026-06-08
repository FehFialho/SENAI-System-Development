`
## Receita

1. Install Prisma
2. Create Routes at Routes.ts
3. Create Controllers
4. Create Middlewares (Optional)
5. Create Services

Controller chama o Service
              
## Install

1. Commands

```npm install prisma@6 --save-dev```
```npm install @prisma/client@6```

Deletar ```prisma.config.ts``` e pasta Prisma

```npx prisma init```

### Instância Prisma

backend/lib/prisma.ts

```
import { PrismaClient } from "@prisma/client"

export const prisma = new PrismaClient({
    log: ['query']
})
```

### Cliente

```npx prisma generate```

Pode mudar o import do prisma cliente
```import { PrismaClient } from "@prisma/client"```

```import { PrismaClient } from "../generated/prisma/client"```

### Models

As models são criadas em conjunto dentro do schema.prisma! Não tem mais pasta.

### Migration

```npx prisma migrate dev```

## Configurar API

### Server
Tudo começa no Server.ts
- Configuração de Portas
- Configuração do Cors
- Importação de Rotas

### Routes
- Chamada do App para registrar rotas
- Colocar no .use a rota e o ts que tem os endpoints

```
const route = express.Router();

    route
        .post('/create')
        .get('/show')
        .put('/update')
        .delete('/delete')
```