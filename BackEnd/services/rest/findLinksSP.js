import axios from "axios";
import * as cheerio from "cheerio";

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const log = console.log;

export default async function findLinksSP(url, filter) {
    try {
        let links = [];
        for (const tag of filter) {
            const baseUrlByTag = url.replace(/searchHere/, tag);

            for (let page = 1; ; page++) {
                await sleep(2000);
                const urlFormatted = baseUrlByTag.replace(/pageHere/, page);

                log(`Fetching list: ${urlFormatted}`);
                const { data } = await axios.get(urlFormatted);
                const $main = cheerio.load(data);

                const linkForPages = $main('a');
                
                if (linkForPages.length === 0) {
                    log(`No links found on page ${page}. End of search for tag: ${tag}`);
                    break;
                }

                const containsTag = new RegExp(tag, 'i');
                const elementsLink = linkForPages.toArray();
                let foundMatchesOnPage = false;
                for (const element of elementsLink) {
                    const link = $main(element).attr('href');
                    const titleLink = $main(element).text().trim();
                    if (link && containsTag.test(titleLink)) {
                        const fullLink = link.startsWith('http') ? link : new URL(link, urlFormatted).href;
                        foundMatchesOnPage = true;
                        log(`Opening service: ${titleLink} | Link: ${fullLink}`);

                        await sleep(1500);

                        try {
                            const { data: pageData } = await axios.get(fullLink);
                            const $details = cheerio.load(pageData);
                            const description = $details('.descricao-servico').text().trim();

                            links.push({
                                tag: tag,
                                link: fullLink,
                                title: titleLink,
                                description: description || "No description found."
                            });
                        } catch (err) {
                            log(`Error extracting description for ${titleLink}: ${err.message}`);
                        }
                    }
                }
                if (!foundMatchesOnPage) {
                    log(`No matching links found on page ${page}. End of search for tag: ${tag}`);
                    break;
                }
                log(`Finished page: ${page}`);
            }
        }
        
        return links;
        
    } catch (err) {
        console.error(`Error accessing ${url}:`, err.message);
        return [];
    }
}