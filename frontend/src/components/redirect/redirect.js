// frontend/src/components/redirect/redirect.js
import { switchPage } from '../app.js';

export function iniciar() {
    // 1. Recupera o link que foi clicado
    const targetUrl = sessionStorage.getItem('redirectTarget');

    // Se por algum motivo não houver URL salva, volta pra home
    if (!targetUrl) {
        switchPage('home');
        return;
    }

    // 2. Aguarda 1 segundo e redireciona
    setTimeout(() => {
        // Limpa a variável para os próximos cliques
        sessionStorage.removeItem('redirectTarget');

        // Abre em uma nova aba (ou use window.location.href = targetUrl se quiser abrir na mesma)
        window.open(targetUrl, '_blank');

        // Opcional: volta a tela do app para a Home após abrir o link
        switchPage('home');
    }, 1000);
}