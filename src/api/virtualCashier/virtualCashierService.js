const VirtualCashier = require('./virtualCashier')
const errorHandler = require('../common/errorHandler')

VirtualCashier.methods(['get', 'post', 'put', 'delete'])
VirtualCashier.updateOptions({ new: true, runValidators: true })
VirtualCashier.after('post', errorHandler).after('put', errorHandler)

VirtualCashier.route('resumo', (req, res, next) => {
    VirtualCashier.aggregate([{
        $project: {
            entrada: { $sum: "$entradas.value" },
            saida: { $sum: "$saidas.value" },
            resumo: {
                data: "$date_updated",
                id: "$_id",
                categoria: "$categoria",
                tipo: "$tipo",
                descricao: "$descricao"
            }
        },

    }, {
        $group: { _id: null, entrada: { $sum: "$entrada" }, saida: { $sum: "$saida" }, carteira: { $push: "$resumo" } }
    }, {
        $project: { _id: 0, saldoTotal: { $subtract: ["$entrada", "$saida"] }, movimentacoes: "$carteira" }
    }]).exec((error, result) => {
        if (error) {
            res.status(500).json({ errors: [error] })
        } else {
            res.json(result[0] || { saldoTotal: 0, movimentacoes: {} })
        }
    })
})

module.exports = VirtualCashier