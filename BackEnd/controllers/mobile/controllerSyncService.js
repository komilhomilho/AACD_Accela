import { ArgumentError } from "../../utils/wrapper/grpcWrapper.js";
import servicesMobileOffered from "../../services/servicesMobileOffered.js";
const { syncService } = servicesMobileOffered;

export default async function controllerSyncService(request, call) {
    const { last_sync } = request;

    if (last_sync == null) {
        throw new ArgumentError('last_sync cannot be empty');
    }

    const dataArray = await syncService(last_sync);
    for(const item of dataArray){
        const dateAsNumber = new Date(item.historicoAtualizacoes).getTime();

        call.write({
            name: item.nome || "",       
            desc: item.desc || "",       
            url: item.url || "",         
            tags: item.tags || [],       
            update_dates: [dateAsNumber]
        });
    }
        
    
    call.end()
}