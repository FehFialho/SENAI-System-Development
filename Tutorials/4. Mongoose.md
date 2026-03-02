## 1. Instalar

```npm i mongoose config```
```npm i --save-dev @types/config```

## 2. Configurar conexão com o Mongo

- Adquirir conexão de string com o BD
- Criar pasta config na raiz do projeto 
- Crair arquivo ```default.json``` dentro e inserir:

```
{
"db": "mongodb://127.0.0.1:27017/"
}
```
- Dentro da src, criar pasta database com ```database.ts``` dentro

```
import mongoose from 'mongoose';
import config from 'config'

const connectDB = async () => {
try {
const db: string = config.get('db');
await mongoose.connect(db);
console.log('MongoDB Connected');
} catch (error) {
console.error('MongoDB Connection Failed', error);
process.exit(1);
}
};

export default connectDB;
```
- Importar o ```connectDB``` em src/server.ts com ```connectDB()```

## 3. Modelos MongoDB

- Modelos definem a estrutura dos dados que serão armazenados
- O Mongoose adiciona uma camada de abstração
- A camada permite definir estrutura dos documentos facilitando consultas, validações, etc
- A pasta models fica dentro da src

```
import mongoose, { Schema, Document } from 'mongoose';

interface IPerson extends Document {
name: string;
age: number;
}

const personSchema: Schema = new Schema({
name: { type: String, required: true },
age: { type: Number, required: true },
});

const Person = mongoose.model<IPerson>('Person', personSchema);

export default Person;
```
## 4. CRUD do Mongoose

### Create

```
router.post('/register', async (req: Request, res: Response) => {
const { name, age } = req.body;

try {
const person = new Person({ name, age });
await person.save();
res.status(201).json(person);
} catch (error) {
res.status(400).json({ message: 'Erro ao criar pessoa', error });
}
});
```

### Read

```
router.get('/people', async (req: Request, res: Response) => {
try {
const people = await Person.find();
res.status(200).json(people);
} catch (error) {
res.status(400).json({ message: 'Erro ao buscar pessoas', error });
}
});
```

### Update

```
router.put('/person/:id', async (req: Request, res: Response) => {
const { id } = req.params;
const { name, age } = req.body;

try {
const person = await Person.findByIdAndUpdate(id, { name, age }, { new: true });
if (!person) {
res.status(404).json({ message: 'Pessoa não encontrada' });
}
res.status(200).json(person);
} catch (error) {
res.status(400).json({ message: 'Erro ao atualizar pessoa', error });
}
});
```

### Delete

```
router.delete('/person/:id', async (req: Request, res: Response) => {
const { id } = req.params;

try {
const person = await Person.findByIdAndDelete(id);
if (!person) {
res.status(404).json({ message: 'Pessoa não encontrada' });
}
res.status(200).json({ message: 'Pessoa deletada com sucesso' });
} catch (error) {
res.status(400).json({ message: 'Erro ao deletar pessoa', error });
}
});
```