import axios from "axios";

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const log = console.log;

export default async function findServiceGov(url, filter) {
    try {
        let links = [];
        for (const tag of filter) {
            const baseUrlByTag = url.replace(/searchHere/, tag);

            for (let page = 1; ; page++) {
                await sleep(2000);
                const urlFormatted = baseUrlByTag.replace(/pageHere/, page);
                const { data } = await axios.get(urlFormatted, {
                    headers: {
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                        'Accept': 'application/json, text/plain, */*',
                        'Accept-Language': 'pt-BR,pt;q=0.9',
                        'Referer': 'https://portalunico.estaleiro.serpro.gov.br/',
                        'Origin': 'https://portalunico.estaleiro.serpro.gov.br',
                        'Connection': 'keep-alive'
                    }
                });

                if (!data.items || data.items.length === 0) {
                    log(`No more items found. End of search for tag: ${tag}`);
                    break;
                }

                for (const item of data.items) {
                    let isValid = false;

                    if (!item.uf) {
                        isValid = true;
                    } else if (Array.isArray(item.uf)) {
                        if (item.uf.includes("SP") || item.uf.length === 0) {
                            isValid = true;
                        }
                    } else if (typeof item.uf === 'string') {
                        if (item.uf === "SP" || item.uf === "") {
                            isValid = true;
                        }
                    }

                    if (isValid) {
                        const title = item.title;
                        const category = item.idsCategorias;
                        const tags = item.tags;
                        const link = item.url_solicitacao_servico_digital;
                        const uf = item.uf
                        let finalDescription = "No description.";

                        if (item.description) {
                            if (Array.isArray(item.description)) {
                                finalDescription = item.description.join(' ');
                            } else {
                                finalDescription = item.description;
                            }

                            finalDescription = finalDescription
                                .replace(/<[^>]*>/gm, '')
                                .replace(/\s+/g, ' ')
                                .trim();
                        }

                        links.push({
                            title: title || "",
                            category: category || "",
                            tags: tags || [],
                            link: link || item.contentUrl,
                            uf: uf || "",
                            description: finalDescription,
                        });

                        log(`Item Title: ${title}`);
                    }
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