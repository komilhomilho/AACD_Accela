import { mapsPages } from './pages.js';

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

switchPage('home');