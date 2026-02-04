use('challenge')

// #### REGEX SEARCH ####

db.users.find({nome: /^A/i}) // Starts with A

db.users.find({telefone: /^9/}) // Starts with 9

db.users.find({email: /@gmail.com/}) // Has @gmail.com

db.users.find({cidade: /São Paulo/}) // From SP

db.users.find({dataCadastro: {$gt: new Date("2023-01-01")}}) // Date Before 2023