import axios from "axios";
import * as cheerio from "cheerio";

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export default async function findServiceRest(url, filter) {
    try {
        await sleep(2000); 

        const { data } = await axios.get(url);
        const $main = cheerio.load(data);
    
        const results = [];
        
        $main('a').each((index, element) => {
            const link = $main(element).attr('href');
            if (link.includes(filter)) {
                
                const titleService = $main(element).text().trim();
                
                let linkComplet = url + link;
                
                results.push({
                    titulo: titleService,
                    link: linkComplet
                });
            }
        });
        
        return results;        
    } catch (error) {
        console.error(`Erro ao acessar ${url}:`, error.message);
        return [];
    }
}