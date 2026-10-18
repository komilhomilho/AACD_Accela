import services from '../../services/servicesRestOffered.js';
import { ArgumentError } from '../../utils/wrapper/grpcWrapper.js';
const {findLinksSP} = services;

export default async function findServiceController (payload){

    if (!payload || typeof payload.url !== 'string'){
        throw new ArgumentError('The url field is mandatory and must be of type string.')
    }
    console.log(typeof payload.filter)
    if (typeof payload.filter !== 'object'){
        throw new ArgumentError('The filter field is mandatory and must be of type string.')
    }
    const url = payload.url
    const filter = payload.filter
    if(!url.includes('searchHere')){
        throw new ArgumentError('The URL must contain the searchHere.')
    }
    const results = await findLinksSP(url, filter)
    return ({
        message: 'Links Found:',
        data: results
    })
}