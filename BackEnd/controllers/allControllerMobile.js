import controllerSyncServices from "./mobile/controllerSyncService.js";
import controllerChkUpdate from "./mobile/controllerChkUpdates.js"
import grpcWrapper from "../utils/wrapper/grpcWrapper.js"

export default {
    syncService: grpcWrapper(controllerSyncServices),
    chkUpdates: grpcWrapper(controllerChkUpdate)
}