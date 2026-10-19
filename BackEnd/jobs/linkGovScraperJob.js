import {findLinksGov} from '../controllers/allControllerRest.js'
export default async function startSearchGovLinks(){
    console.log("[Job] starting auto-capture of links Gov");
    
    const payload = {
        url: 'https://portalunico.estaleiro.serpro.gov.br/api/search/?q=searchHere&aba=servicos&ordenacao=-data&categoriasFiltro=&orgaosFiltro=&tipo=Servico%7CTema&pagina=pageHere&tam_pagina=30',
        filter: ['cadastro', 'saude', 'beneficio']
    };

    const result = await findLinksGov(payload);
        
        return result || [];
}