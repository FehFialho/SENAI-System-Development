## Passo 0: Preparação

**Se o projeto não existir:**

1. Crie o diretório do projeto e navegue até ele:
    ```bash
    mkdir nome-do-projeto
    cd nome-do-projeto
    ```

2. Inicialize o projeto com `npm`:
    ```bash
    npm init -y
    ```

**Se o projeto já existir:**

1. Execute:
    ```bash
    npm install
    ```

## Passo 1: Instalar Dependências

Instale o TypeScript, os tipos do Node e o tsx:

```npm install typescript @types/node tsx --save-dev```

Adicione node_modules/ no .gitignore.

## Passo 2: Configuração do TypeScript

Crie o arquivo tsconfig.json:

```npx tsc --init```

Baixe o TsConfig

1. Pesquisar tsconfig/bases
2. Ver versao com node -v na cmd 
3. Baixar os Comandos
4. Substituir o tsconfig.json

Altere ou adicione no tsconfig.json:

```
"compilerOptions": {
  "allowImportingTsExtensions": true,
  "noEmit": true
}
```

## Passo 3: Script de Desenvolvimento

No package.json, adicione o script para rodar o projeto:

```
"scripts": {
  "dev": "npx tsx watch src/server.ts"
}
```

## Passo 4: Instalar o Express

Instale o Express e os tipos para ele:

```npm install express @types/express```

Passo 5: Estrutura Básica

Crie o arquivo src/server.ts com o seguinte código:

```
import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Olá, mundo!');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
```

### Por fim, execute o servidor: ```npm run dev```