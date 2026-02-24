import express, { response } from "express";
import routes from "./routes/routes.ts";

const port = 8080;
const app = express();

routes(app)

app.get('/', (req, res) => {
    res.status(200).send({ response: "Api Funcionando!"})
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})