import express, { Request, Response } from 'express';
import connectDB from './database/database';
import routes from './routes/routes';
import cors from 'cors'

const app = express();
const port = 8080;

app.use(cors({
    origin: '*'
}))

connectDB();
routes(app);

app.get('/', (req: Request, res: Response) => {
    res.send('Olá, mundo!');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});