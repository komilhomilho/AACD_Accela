// frontend/src/components/redirect/redirect.js


export function iniciar() {
    const targetUrl = sessionStorage.getItem('redirectTarget');

    if (!targetUrl) {
        window.switchPage('home');
        return;
    }

    setTimeout(() => {
        sessionStorage.removeItem('redirectTarget');
        window.open(targetUrl, '_blank');
        window.switchPage('home');
    }, 1500);
}