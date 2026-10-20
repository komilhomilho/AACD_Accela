import { mapsPages } from './componentController.js';
import mobileService from '../services/mobile.service.js';
import storageService from '../services/storage.service.js';
const app = document.getElementById('app');

export async function switchPage(idDaPagina) {
    const dadosDaPagina = mapsPages[idDaPagina];

    if (!dadosDaPagina) {
        app.innerHTML = "<h1>Erro</h1><p>Página não encontrada.</p>";
        return;
    }

    app.innerHTML = dadosDaPagina.html;

    if (dadosDaPagina.js) {
        try {
            const modulo = await import(dadosDaPagina.js);
            if (modulo.iniciar) {
                modulo.iniciar();
            }
        } catch (erro) {
            console.error(`Erro ao carregar o script da página ${idDaPagina}:`, erro);
        }
    }
}

async function initializeApp() {
    const lastDate = storageService.getLastSync();

    console.log(`Checking for updates since: ${lastDate}`);
    const apiResponse = await mobileService.syncData(lastDate);
    console.log(apiResponse)
    if (apiResponse && apiResponse.data.links && apiResponse.data.links.length > 0) {
        console.log(`Yay! We found ${apiResponse.data.length} new links.`);
        
        storageService.saveNewData(apiResponse.data.links);
    } else {
        console.log("The app is already 100% up to date, no news.");
    }

    const allMyData = storageService.getLocalData();
    console.log("My data ready to be displayed on screen:", allMyData);
}

const botoes = document.querySelectorAll(
    '.bottom-nav .nav-link'
);

const categorias = {
    "Governo e documentos": "gov_doc",
    "Trânsito": "transit",
    "Saúde": "health",
    "Benefícios e dinheiro": "benefits"
};

function atualizarNavbar(pagina) {
    botoes.forEach(botao => {
        const ativo = botao.dataset.page === pagina;

        botao.classList.toggle('active', ativo);

        if (ativo) {
            botao.setAttribute('aria-current', 'page');
        } else {
            botao.removeAttribute('aria-current');
        }
    });
}

document.addEventListener('click', async (evento) => {

    // Navegação pela navbar
    const botao = evento.target.closest(
        '.bottom-nav [data-page]'
    );

    if (botao) {
        const pagina = botao.dataset.page;

        await switchPage(pagina);
        atualizarNavbar(pagina);

        return;
    }

    const card = evento.target.closest('.home-card');

    if (card) {
        if (!card.isConnected) return;

        const nome = card.querySelector('span')
            ?.textContent.trim();

        const pagina = categorias[nome];

        if (pagina) {
            evento.preventDefault();
            evento.stopImmediatePropagation();

            await switchPage(pagina);

            atualizarNavbar('home');
        }
    }
});



switchPage('home');
document.addEventListener('focusin', (event) => {
    if (event.target && event.target.id === 'searchBar') {
        switchPage('global_search');
    }
});
initializeApp();
