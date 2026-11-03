<<<<<<< HEAD:BackEnd/services/mobile/syncServiceDB.js
// import link from '../../DB/templates/links.js'

// export default async function syncService(datePreviousUpdate){
//     const date = new Date(Number(datePreviousUpdate));
//     const response = await link.find()
//     .where('historicoAtualizacoes')
//     .gt(date)
//     .lean()
//     .exec()
//     console.log(response)
//     return response
// }
=======
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
>>>>>>> origin/main:backend/src/modules/mobile/sync.service.js
