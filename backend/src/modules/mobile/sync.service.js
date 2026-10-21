import model from '../../shared/models/link.model.js'

export default async function syncService(datePreviousUpdate){
    const date = new Date(Number(datePreviousUpdate));
    const response = await model.find()
    .where('historicoAtualizacoes')
    .gt(date)
    .lean()
    .exec()
    return response
}
