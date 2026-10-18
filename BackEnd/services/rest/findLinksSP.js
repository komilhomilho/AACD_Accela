import axios from "axios";
import * as cheerio from "cheerio";

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const log = console.log

export default async function findServiceRest(url, filter) {
    try {
        let links = []
        for (const tag of filter) {
            let urlFormated = url.replace(/searchHere/, tag);

            for (let i = 1; ; i++) {
                await sleep(2000);
                urlFormated = urlFormated.replace(/page=.*/, `page=${i}`);

                log(`For List: ${urlFormated}`);
                const { data } = await axios.get(urlFormated);
                const $main = cheerio.load(data);

                const linkForPage = $main('a');
                if (linkForPage.length === 0) {
                    log(`Not Find Link ${i}. Final Tag tag: ${tag}`);
                    break;
                }

                const containsTag = new RegExp(tag, 'i');

                const elementosLink = linkForPage.toArray();

                for (const element of elementosLink) {
                    const link = $main(element).attr('href');
                    const titleLink = $main(element).text().trim();

                    if (link && containsTag.test(titleLink)) {

                        const linkCompleto = link.startsWith('http') ? link : new URL(link, urlFormated).href;

                        log(`Open Service: ${titleLink} | Link: ${linkCompleto}`);

                        await sleep(1500);

                        try {
                            const { data: pageData } = await axios.get(linkCompleto);

                            const $details = cheerio.load(pageData);

                            const description = $details('.descricao-servico').text().trim();

                            links.push({
                                tag: tag,
                                link: linkCompleto,
                                title: titleLink,
                                desc: description || "Description not Find."
                            });
                        } catch (err) {
                            log(`Erro catch description service: ${titleLink}: ${err.message}`);
                        }
                    }
                }
                const titleLink = linkForPage.text().trim();
                if(!containsTag.test(titleLink)){
                    break
                }
            }
        }
        log(links.tag)
    } catch (error) {
        console.error(`Erro ao acessar ${url}:`, error.message);
        return [];
    }
}