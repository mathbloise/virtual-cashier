const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const url = 'mongodb://localhost/virtualcashier'
module.exports = mongoose.connect(url, { useNewUrlParser: true})

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}'."