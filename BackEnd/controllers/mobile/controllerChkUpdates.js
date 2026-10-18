import servicesMobileOffered from "../../services/servicesMobileOffered.js";
const { chkUpdate } = servicesMobileOffered;

export default async function controllerChkUpdates(request) {
    const { last_sync } = request;

    if (last_sync == null) {
        throw new ArgumentError('last_sync cannot be empty');
    }

    const dbResponse = await chkUpdate(last_sync);

    const hasUpdates = dbResponse.length > 0;

    const latestDate = hasUpdates ? Date.now() : last_sync; 

    return {
        is_update: hasUpdates,
        server_latest_update: latestDate
    };
}