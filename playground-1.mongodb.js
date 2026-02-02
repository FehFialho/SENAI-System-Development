//show databases

use('bosch')

db.people.insertOne({
    name: 'Nicolas',
    lastname: 'Marques',
    salar: 1
})

db.people.insertMany([
    {
        name: 'Donathan',
        lastname: 'Ramalho',
        salar: 2
    },
    {
        name: 'Queila',
        lastname: 'Lima',
        salar: 2
    },
    {
        name: 'Trevisan',
        lastname: 'Silio',
        salar: 3
    }
])