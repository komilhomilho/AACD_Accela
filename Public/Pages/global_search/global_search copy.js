// eryc
import { switchPage } from '../app.js';
const searchInput = document.getElementById('searchBar');
const searchResultsContainer = document.getElementById('searchResults');

let databaseItems = [
  { id: 1, name: "Zebra" },
  { id: 2, name: "Abacaxi" },
  { id: 3, name: "Banana" },
  { id: 4, name: "Carro" }
];

function renderResults(itemsToRender) {
  searchResultsContainer.innerHTML = '';

  if (itemsToRender.length === 0) {
    searchResultsContainer.innerHTML = '<p class="text-muted p-2">Nenhum resultado encontrado.</p>';
    return;
  }

  // Ordena os itens em ordem alfabética com base na propriedade 'name'
  const sortedItems = itemsToRender.sort((a, b) => a.name.localeCompare(b.name));

  sortedItems.forEach(item => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('custom-card', 'shadow-sm');
    
    cardElement.innerHTML = `
      <h5 class="mb-0">${item.name}</h5>
    `;
    searchResultsContainer.appendChild(cardElement);
  });
}

// 1. Mostra todos os containers ordenados assim que a página carrega
renderResults(databaseItems);

// 2. Evento de busca em tempo real na barra original
searchInput.addEventListener('input', (event) => {
  const searchTerm = event.target.value.toLowerCase().trim();

  if (searchTerm === '') {
    renderResults(databaseItems);
    return;
  }

  // Filtra o que corresponde à pesquisa
  const filteredResults = databaseItems.filter(item => 
    item.name.toLowerCase().includes(searchTerm)
  );
  renderResults(filteredResults);
});