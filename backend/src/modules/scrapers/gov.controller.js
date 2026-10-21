import * as services from '../../../../services/servicesLinksOffered.js'
import { ArgumentError } from '../../utils/wrapper/linksWrapper.js'
const findLinksGov = services.findLinksGov

export default async function findLinksGovController(payload) {
    if(!payload || typeof payload.url !== 'string'){
        throw new ArgumentError('The url field is mandatory and must be of type string.')
    }
    if(typeof payload.filter !== 'object'){
        throw new ArgumentError('The filter field is mandatory and must be of type object.')
    }
    const url = payload.url
    if(!url.includes('searchHere') || !url.includes('pageHere')){
        throw new ArgumentError('The URL does not contain the search location (searchHere) or the page locations (pageHere).')
    }
    const filter = payload.filter
    const links = await findLinksGov(url, filter)
    return ({
        message: 'Links Found (Gov):',
        data: links
    })
}