import { findLinksSP } from '../controllers/allControllerRest.js';

export default async function startSearchLinksSp() {
    console.log("[Job] starting auto-capture of links SP");
    
    const payload = {
        url: 'https://servicos.sp.gov.br/search/?q=searchHere&codOrgao=&page=pageHere',
        filter: ['cadastro', 'saude', 'beneficio']
    };

    const result = await findLinksSP(payload);
    
    return result || [];
}