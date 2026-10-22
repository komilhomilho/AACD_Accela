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

        return textoDasTags.includes('transit') ||
            textoDasTags.includes('Transito') ||
            textoDasTags.includes('transporte');
    });

    function renderCategoryResults(itemsToRender) {
        container.innerHTML = '';

        if (!itemsToRender || itemsToRender.length === 0) {
            container.innerHTML = '<p class="text-muted text-center mt-4">Nenhum serviço encontrado nesta categoria.</p>';
            return;
        }

        const sortedItems = [...itemsToRender].sort((a, b) => {
            const titleA = a.titulo || a.title || a.nome || a.name || '';
            const titleB = b.titulo || b.title || b.nome || b.name || '';
            return titleA.localeCompare(titleB);
        });

        sortedItems.forEach(item => {
            const cardElement = document.createElement('div');
            
            // Adicionamos 'w-100' para forçar o card a respeitar a largura da tela
            // E trocamos o 'bg-body-tertiary' pelas suas cores personalizadas
            cardElement.classList.add('custom-card', 'shadow-sm', 'p-3', 'mb-3', 'rounded', 'w-100');
            
            cardElement.style.cursor = 'pointer';
            cardElement.style.maxWidth = '100%'; // Trava o tamanho
            cardElement.style.overflow = 'hidden'; // Corta qualquer coisa que tente vazar
            cardElement.style.backgroundColor = '#72101D'; // Fundo vermelho
            cardElement.style.color = 'white'; // Texto branco

            const displayTitle = item.titulo || item.title || item.nome || item.name || 'Serviço sem título';
            const displayUrl = item.URL || item.link || '#';

            // O 'min-width: 0' e o 'w-100' na div interna são o truque mágico 
            // que faz o 'text-truncate' do Bootstrap funcionar sem quebrar a tela!
            cardElement.innerHTML = `
                <div style="min-width: 0; width: 100%;">
                    <h5 class="mb-1 text-truncate" style="color: white; width: 100%;">${displayTitle}</h5>
                    <p class="mb-0 small text-truncate" style="color: #e0e0e0; width: 100%;">${displayUrl}</p>
                </div>
            `;

            cardElement.addEventListener('click', () => {
                if (displayUrl && displayUrl !== '#') {
                    storageService.storageClickLink(displayTitle, displayUrl);
                    
                    sessionStorage.setItem('redirectTarget', displayUrl);
                    window.switchPage('redirect');
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