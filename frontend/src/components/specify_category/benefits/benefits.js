import storageService from '../../../services/storage.service.js';

export function iniciar() {
    const container = document.querySelector('.specify-container');
    const searchInput = document.querySelector('.specify-search input');

    if (!container) return;

    const todosOsDados = storageService.getLocalData();

    const dadosTransito = todosOsDados.filter(item => {
        let textoDasTags = '';

        if (Array.isArray(item.tags)) {
            textoDasTags = item.tags.join(' ').toLowerCase();
        } else {
            textoDasTags = (item.tag || item.categoria || item.category || '').toLowerCase();
        }

        return textoDasTags.includes('beneficio') || textoDasTags.includes('dinheiro');
    });

    function renderCategoryResults(itemsToRender) {
        container.innerHTML = '';

        if (!itemsToRender || itemsToRender.length === 0) {
            container.innerHTML = '<p class="text-muted text-center mt-4" role="status">Nenhum serviço encontrado nesta categoria.</p>';
            return;
        }

        const sortedItems = [...itemsToRender].sort((a, b) => {
            const titleA = a.titulo || a.title || a.nome || a.name || '';
            const titleB = b.titulo || b.title || b.nome || b.name || '';
            return titleA.localeCompare(titleB);
        });

        sortedItems.forEach(item => {
            const cardElement = document.createElement('div');

            cardElement.classList.add('custom-card', 'shadow-sm', 'p-3', 'mb-3', 'rounded', 'w-100');
            
            cardElement.style.cursor = 'pointer';
            cardElement.style.maxWidth = '100%';
            cardElement.style.overflow = 'hidden';
            cardElement.style.backgroundColor = '#72101D';
            cardElement.style.color = 'white';

            const displayTitle = item.titulo || item.title || item.nome || item.name || 'Serviço sem título';
            const displayUrl = item.URL || item.link || '#';

            // ATUALIZAÇÃO DE ACESSIBILIDADE AQUI:
            cardElement.setAttribute('role', 'button'); // Diz ao leitor que é um botão
            cardElement.setAttribute('tabindex', '0'); // Permite focar com a tecla TAB
            cardElement.setAttribute('aria-label', `Acessar serviço: ${displayTitle}`); // O que será lido em voz alta

            // O aria-hidden="true" impede que o leitor de tela leia a URL e o título cru de novo
            cardElement.innerHTML = `
                <div aria-hidden="true" style="min-width: 0; width: 100%;">
                    <h5 class="mb-1 text-truncate" style="color: white; width: 100%;">${displayTitle}</h5>
                    <p class="mb-0 small text-truncate" style="color: #e0e0e0; width: 100%;">${displayUrl}</p>
                </div>
            `;

            // Ação de clique (Mouse/Toque)
            cardElement.addEventListener('click', () => {
                if (displayUrl && displayUrl !== '#') {
                    storageService.storageClickLink(displayTitle, displayUrl);
                    sessionStorage.setItem('redirectTarget', displayUrl);
                    window.switchPage('redirect');
                }
            });

            // Ação de teclado (Enter ou Espaço para quem usa leitor de tela/navegação por teclado)
            cardElement.addEventListener('keydown', (evento) => {
                if (evento.key === 'Enter' || evento.key === ' ') {
                    evento.preventDefault(); // Evita que a página role para baixo ao apertar Espaço
                    cardElement.click(); // Dispara a função de clique acima
                }
            });

            container.appendChild(cardElement);
        });
    }

    renderCategoryResults(dadosTransito);

    if (searchInput) {
        searchInput.addEventListener('input', (event) => {
            const searchTerm = event.target.value.toLowerCase().trim();

            if (searchTerm === '') {
                renderCategoryResults(dadosTransito);
                return;
            }

            const filteredResults = dadosTransito.filter(item => {
                const title = (item.titulo || item.title || item.nome || item.name || '').toLowerCase();
                return title.includes(searchTerm);
            });

            renderCategoryResults(filteredResults);
        });
    }
}