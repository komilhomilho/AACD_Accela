import syncService from './sync.service.js'
import { ArgumentError } from './wrapper.js';

export default async function syncServiceController(req,res,next) {
    const last_sync = req.query.last_sync ?? req.body.last_sync;
    if(last_sync == null){
        throw new ArgumentError('The Parameter "last_sync" is mandatory!')
    }
    const data = await syncService(last_sync)
    console.log(data)
    return res.status(200).json({
        "links": data
    })
}