//show databases


// db.people.insertOne({
    //     name: 'Nicolas',
    //     lastname: 'Marques',
    //     salar: 1
    // })
    
use('bosch')
    
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
    },
    {
        name: 'Nicolas',
        lastname: 'Marques',
        salar: 3
    },
    {
        name: 'Patrick',
        lastname: 'Estrelo',
        salar: 3
    },
    {
        name: 'Cesar',
        lastname: 'Stati',
        salar: 3
    }
])