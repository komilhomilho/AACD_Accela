import services from '../../services/servicesRestOffered.js';
import { ArgumentError } from '../../utils/wrapper/grpcWrapper.js';
const {findLinks} = services;

export default async function findServiceController (payload){

    if (!payload || typeof payload.url !== 'string'){
        throw new ArgumentError('The url field is mandatory and must be of type string.')
    }

    if (typeof payload.filter !== 'string'){
        throw new ArgumentError('The filter field is mandatory and must be of type string.')
    }
    const url = payload.url
    const filter = payload.filter
    const results = await findLinks(url, filter)
    return ({
        message: 'Links Found:',
        data: results
    })
}