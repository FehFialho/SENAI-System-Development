// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("bosch");

// Just Like SQL Where
//db.people.find({name: 'Trevisan'})


// REGEX - Sequencia de caracteres que forma um padrão de busca.
// Utilizada para buscar, substituir ou validar texto de acordo com padrões.
// Like do SQL.

db.people.find({name: /n/ }) //Contem N

db.people.find({name: /^D.*n$/ }) // Começa com D e termina com N

db.people.find({$and: [{ name: 'Cesar'}, { lastname: 'Stati'}]} ) // And SQL

db.people.find({salar: { $gt: 1}}) // Greater Than

db.people.find({salar: { $gte: 2}}, {name :1, lastname:1}) // 1 é como True

// UPDATE

db.people.updateOne(
    { _id: ObjectId('6981f370401f37942252f87d')},
    { $set: { lastname: 'Status'}}
)

db.people.updateMany(
    { salar: 1 },
    { $set: { salar: 2}}
)

// DELETE

db.people.deleteMany({ name: /n/ })