import express, { Request, Response } from 'express';
import routes from './routes/routes';

const app = express();
const port = 8080;

routes(app);

app.get('/', (req: Request, res: Response) => {
    res.send('Olá, mundo!');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});