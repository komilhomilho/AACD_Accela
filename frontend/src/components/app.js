import { mapsPages } from './componentController.js';
import mobileService from '../services/mobile.service.js';
import storageService from '../services/storage.service.js';

const app = document.getElementById('app');

let tamanhoFonteAtual = parseInt(localStorage.getItem('tamanhoFonte')) || 100;

function aplicarTamanhoFonte() {
    document.documentElement.style.fontSize = `${tamanhoFonteAtual}%`;
    localStorage.setItem('tamanhoFonte', tamanhoFonteAtual);
}

aplicarTamanhoFonte();

async function switchPage(idDaPagina, registrarHistorico = true) {
    const dadosDaPagina = mapsPages[idDaPagina];

    if (!dadosDaPagina) {
        app.innerHTML = "<h1>Erro</h1><p>Página não encontrada.</p>";
        return;
    }

    if (registrarHistorico) {
        window.history.pushState({ pagina: idDaPagina }, "", "");
    }

    const navbar = document.querySelector('nav');

    if (idDaPagina === 'redirect') {
        navbar.style.display = 'none';
    } else {
        navbar.style.display = '';
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

    if (window.VLibras && window.VLibras.Widget) {
        window.dispatchEvent(new Event('load'));
    }
}

async function initializeApp() {
    const lastDate = storageService.getLastSync();

    console.log(`Checking for updates since: ${lastDate}`);
    const apiResponse = await mobileService.syncData(lastDate);
    console.log(apiResponse);

    if (apiResponse && apiResponse.data.links && apiResponse.data.links.length > 0) {
        console.log(`Yay! We found ${apiResponse.data.length} new links.`);
        storageService.saveNewData(apiResponse.data.links);
    } else {
        console.log("The app is already 100% up to date, no news.");
    }

    const allMyData = storageService.getLocalData();
    console.log("My data ready to be displayed on screen:", allMyData);
}

const botoes = document.querySelectorAll('.bottom-nav .nav-link');

const categorias = {
    "Documentos": "doc",
    "Transporte": "transit",
    "Saúde": "health",
    "Benefícios": "benefits"
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
    // Botões de tamanho da fonte
    const btnAumentar = evento.target.closest('#btn-fonte-aumentar');
    if (btnAumentar) {
        if (tamanhoFonteAtual < 160) {
            tamanhoFonteAtual += 10;
            aplicarTamanhoFonte();
        }
        return;
    }

    const btnDiminuir = evento.target.closest('#btn-fonte-diminuir');
    if (btnDiminuir) {
        if (tamanhoFonteAtual > 80) {
            tamanhoFonteAtual -= 10;
            aplicarTamanhoFonte();
        }
        return;
    }

    // Abertura/Fechamento do menu de acessibilidade
    const btnAcessibilidade = evento.target.closest('#accesibility');
    if (btnAcessibilidade) {
        const icone = btnAcessibilidade.querySelector('.toggle-icon');
        const estaAberto = btnAcessibilidade.classList.contains('expandido');
        const clicouNoIcone = evento.target.closest('.toggle-icon');

        if (estaAberto && !clicouNoIcone) {
            return;
        }

        if (!estaAberto) {
            btnAcessibilidade.classList.add('expandido');
            icone.classList.replace('bi-universal-access', 'bi-x-circle');
        } else {
            btnAcessibilidade.classList.remove('expandido');
            icone.classList.replace('bi-x-circle', 'bi-universal-access');
        }
        return;
    }

    const botao = evento.target.closest('.bottom-nav [data-page]');
    if (botao) {
        const pagina = botao.dataset.page;
        await window.switchPage(pagina);
        atualizarNavbar(pagina);
        return;
    }

    const card = evento.target.closest('.home-card');
    if (card) {
        if (!card.isConnected) return;
        const nome = card.querySelector('span')?.textContent.trim();
        const pagina = categorias[nome];

        if (pagina) {
            evento.preventDefault();
            evento.stopImmediatePropagation();
            await window.switchPage(pagina);
            atualizarNavbar('home');
        }
    }
});

window.addEventListener('popstate', (event) => {
    if (event.state && event.state.pagina) {
        window.switchPage(event.state.pagina, false);
        if (typeof atualizarNavbar === 'function') {
            atualizarNavbar(event.state.pagina);
        }
    } else {
        window.switchPage('home', false);
        if (typeof atualizarNavbar === 'function') {
            atualizarNavbar('home');
        }
    }
});

if (window.VLibras) {
    new window.VLibras.Widget('https://vlibras.gov.br/app');
}

document.getElementById('vlibras-button').addEventListener('click', function (evento) {
    evento.preventDefault();
    evento.stopPropagation();
    
    const shadowWrapper = document.querySelector('#vlibras-access-wrapper');
    if (shadowWrapper && shadowWrapper.shadowRoot) {
        const shadowBtn = shadowWrapper.shadowRoot.querySelector('#vlibras-button');
        if (shadowBtn) shadowBtn.click();
    } else {
        const botaoVlibrasOriginal = document.querySelector('[vw-access-button]');
        if (botaoVlibrasOriginal) {
            botaoVlibrasOriginal.click(); 
        }
    }

    const containerAcessibilidade = document.getElementById('accesibility');
    const icone = containerAcessibilidade.querySelector('.toggle-icon');
    
    if (containerAcessibilidade.classList.contains('expandido')) {
        containerAcessibilidade.classList.remove('expandido');
        icone.classList.replace('bi-x-circle', 'bi-universal-access');
    }
});

document.addEventListener('focusin', (event) => {
    if (event.target && event.target.id === 'searchBar') {
        window.switchPage('global_search');
    }
});

window.switchPage = switchPage;
switchPage('home');
initializeApp();