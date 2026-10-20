import { mapsPages } from './pages.js';
//import api from "./apis/allApis.js"

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

function last_sync(){
    
}

const botoes = document.querySelectorAll(
            '.bottom-nav .nav-link'
        );

        // Categorias da Home
        const categorias = {
            "Governo e documentos": "gov_doc",
            "Trânsito": "transit",
            "Saúde": "health",
            "Benefícios e dinheiro": "benefits"
        };

        // Atualiza o botão ativo
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

        // Detecta cliques na página
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

            // Navegação pelas categorias da Home
            const card = evento.target.closest('.home-card');

            if (card) {

                // Evita navegar novamente se outro
                // evento já substituiu a Home
                if (!card.isConnected) return;

                const nome = card.querySelector('span')
                    ?.textContent.trim();

                const pagina = categorias[nome];

                if (pagina) {
                    evento.preventDefault();
                    evento.stopImmediatePropagation();

                    await switchPage(pagina);

                    // Categorias pertencem à Home
                    atualizarNavbar('home');
                }
            }
        });

switchPage('login');