import chkUpdate from './chkUpdate.service.js'
import { ArgumentError } from './wrapper.js';

export default async function checkUpdateController(req,res,next) {
    const last_sync = req.query.last_sync ?? req.body.last_sync;
    if(last_sync == null){
        throw new ArgumentError('The Parameter "last_sync" is mandatory!')
    }
    const is_update = await chkUpdate(last_sync)
    return res.status(200).json({
        "is_update": is_update
    })
}