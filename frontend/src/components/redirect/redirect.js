// frontend/src/components/redirect/redirect.js
import { switchPage } from '../app.js';

export function iniciar() {
    const targetUrl = sessionStorage.getItem('redirectTarget');

    if (!targetUrl) {
        switchPage('home');
        return;
    }

    setTimeout(() => {
        sessionStorage.removeItem('redirectTarget');
        window.open(targetUrl, '_blank');
        switchPage('home');
    }, 1000000);
}