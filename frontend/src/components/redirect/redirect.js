export function iniciar() {
    const targetUrl = sessionStorage.getItem('redirectTarget');

    if (!targetUrl) {
        window.switchPage('home');
        return;
    }

    setTimeout(() => {
        sessionStorage.removeItem('redirectTarget');
        window.switchPage('home');
        
        let urlFinal = targetUrl;
        if (!urlFinal.startsWith('http://') && !urlFinal.startsWith('https://')) {
            urlFinal = 'https://' + urlFinal;
        }

        const link = document.createElement('a');
        link.href = urlFinal;
        

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

    }, 1000);
}