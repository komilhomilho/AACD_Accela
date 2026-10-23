export function iniciar() {
    const targetUrl = sessionStorage.getItem('redirectTarget');

    if (!targetUrl) {
        window.switchPage('home');
        return;
    }

    // Espera 2 segundos para o usuário ler
    setTimeout(() => {
        sessionStorage.removeItem('redirectTarget');
        
        let urlFinal = targetUrl;
        if (!urlFinal.startsWith('http://') && !urlFinal.startsWith('https://')) {
            urlFinal = 'https://' + urlFinal;
        }

        // 1. Muda a página internamente
        try {
            window.switchPage('home');
        } catch(e) {}

        // 2. Dá uma pausa de 100ms para o iPhone "respirar" e terminar de processar o switchPage.
        // Só depois dessa pausa ele redireciona para o site externo.
        setTimeout(() => {
            window.location.href = urlFinal;
        }, 100);

    }, 1000);
}