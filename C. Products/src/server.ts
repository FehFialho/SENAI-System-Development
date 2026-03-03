import express, { Request, Response } from 'express';
import connectDB from './database/database';
import routes from './routes/routes';
// import routes from "./routes/routes.ts";

const app = express();
const port = 3000;

connectDB();
routes(app);

app.get('/', (req: Request, res: Response) => {
    res.send('Olá, mundo!');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});