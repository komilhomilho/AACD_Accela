export function iniciar() {
    const targetUrl = sessionStorage.getItem('redirectTarget');

    if (!targetUrl) {
        window.switchPage('home');
        return;
    }

    setTimeout(() => {
        sessionStorage.removeItem('redirectTarget');
        window.switchPage("home");
        window.location.href = targetUrl;
    }, 1500);
}