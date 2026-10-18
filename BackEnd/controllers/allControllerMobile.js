import controllerSyncServices from "./mobile/controllerSyncService.js";
import controllerChkUpdate from "./mobile/controllerChkUpdates.js"
import {wrapController, wrapStreamController}  from "../utils/wrapper/grpcWrapper.js"

export default {
    syncService: wrapStreamController(controllerSyncServices),
    chkUpdates: wrapController(controllerChkUpdate)
}