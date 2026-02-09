import express, { response } from "express";

const port = 8080;
const app = express();

const pessoa = {
    name: "FehFita",
    lastname: "Fialho"
}

// Hello World!
app.get('/', (req, res) => {
    res.send({ response: "Api Funcionando!"})
})

// RECOMENDADO!
app.get('/objeto', (req, res) => {
    res.send({ pessoa: pessoa })
})

// Funciona, mas é ruim para pegar dados depois...
app.get('/direto', (req, res) => {
    res.send({ pessoa })
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})