import { ArgumentError } from "../../utils/wrapper/grpcWrapper.js";
import { syncServices } from "../../services/servicesMobileOffered.js";

export default async function controllerSyncServices(request) {
    const { query } = request;
    if (!query || query.trim() === '') {
        throw new ArgumentError('the query cannot be empty');
    }
    const dbResponse = await syncServices(query);
    return dbResponse;
}