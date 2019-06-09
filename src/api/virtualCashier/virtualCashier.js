const restful = require('node-restful')
const mongoose = restful.mongoose

const entradaSchema = new mongoose.Schema({
    value: { type: Number, min: 0, required: true },
})

const saidaSchema = new mongoose.Schema({
    value: { type: Number, min: 0, required: true },
})

const virtualCashierSchema = new mongoose.Schema({
    entradas: [entradaSchema],
    saidas: [saidaSchema],
    date_updated: { type: Date, default: Date.now },
    categoria: { type: String, required: false, uppercase: true, enum: ['PAGO', 'PENDENTE', 'AGENDADO'] },
    tipo: { type: String, required: true },
    descricao: { type: String, required: true }

})

module.exports = restful.model('VirtualCashier', virtualCashierSchema)