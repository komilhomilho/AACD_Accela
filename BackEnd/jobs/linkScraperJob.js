import { findLinks } from '../controllers/allControllerRest.js';

export default function startSearchLinks() {
    console.log("[Job] starting auto-capture of links");
    
    const payload = {
        url: 'https://servicos.sp.gov.br/search/?q=searchHere&codOrgao=&page=2',
        filter: ['cadastro', 'saude', 'beneficio']
    };

    findLinks(payload).then(resultado => {
        if (resultado) {
            console.log("\n", resultado.message);
            console.log(resultado.data);
        }
    });
}