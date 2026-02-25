import express, { Request, Response } from 'express';
import routes from './routes/routes';
import { connect } from 'node:http2';
import connectDB from './database/database';

const app = express();
const port = 8080;

connectDB();
routes(app);

app.get('/', (req: Request, res: Response) => {
    res.send('Olá, mundo!');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});