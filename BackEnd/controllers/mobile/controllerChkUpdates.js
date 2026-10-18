import {chkUpdate} from "../../services/servicesMobileOffered"
import { ArgumentError } from "../../utils/wrapper/grpcWrapper.js";

export default async function controllerChkUpdates(request) {
    const { query } = request;
    if (!query || query.trim() === '') {
        throw new ArgumentError('the query cannot be empty');
    }
    const dbResponse = await chkUpdate(query);
    return dbResponse;
}