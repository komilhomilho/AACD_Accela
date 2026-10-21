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
                const { data } = await axios.get(urlFormatted, {
                    headers: {
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                        'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7'
                    }
                });
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