import storageService from '../../services/storage.service.js';

export function iniciar() {
    const container = document.getElementById('historyResults');
    if (!container) return;

    const arrayHistorico = storageService.getHistory();

    container.innerHTML = '';

    if (arrayHistorico.length === 0) {
        container.innerHTML = '<p class="text-center text-muted mt-5 fg-black">Você ainda não acessou nenhum link.</p>';
        return;
    }

    arrayHistorico.forEach(item => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('custom-card', 'shadow-sm', 'p-3', 'mb-3', 'bg-body-tertiary', 'rounded');
        cardElement.style.cursor = 'pointer';

        const dataObj = new Date(item.dataAcesso);
        const dataFormatada = dataObj.toLocaleDateString('pt-BR') + ' às ' + dataObj.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

        cardElement.innerHTML = `
            <h5 class="mb-1">${item.titulo}</h5>
            <p class="mb-0 small text-primary text-truncate">${item.url}</p>
            <small class="text-muted"><i class="bi bi-clock"></i> Acessado em: ${dataFormatada}</small>
        `;

        cardElement.addEventListener('click', () => {
            sessionStorage.setItem('redirectTarget', item.url);
            window.switchPage('redirect');
        });

        container.appendChild(cardElement);
    });
}