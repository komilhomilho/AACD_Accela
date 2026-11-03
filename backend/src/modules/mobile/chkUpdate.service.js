import model from '../../shared/models/link.model.js'

export default async function chkUpdate(last_sync) {
    const response = await model.find({
        historicoAtualizacoes: {
            $gt: last_sync
        }
    })
    const validation = response.length > 0
    return validation;
}