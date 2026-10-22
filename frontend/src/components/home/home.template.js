export const homeHtml = `
  <!-- Barra de pesquisa -->
  <div class="input-group home-search mb-3">
    <span class="input-group-text">
      <i class="bi bi-search" aria-hidden="true"></i>
    </span>
    <!-- O VLibras pode ter dificuldade com atributos de placeholder nativos em apps dinâmicos, 
         então garantimos que o texto principal esteja próximo e claro. -->
    <span class="visually-hidden">Campo de pesquisa. Digite o que procura.</span>
    <input
      id="searchBar"
      type="text"
      class="form-control"
      placeholder="Pesquise aqui..."
    >
  </div>

  <!-- Categorias -->
  <!-- Aqui o VLibras deve funcionar normalmente, pois existe texto claro nos <span> -->
  <div class="home-container mt-8">

    <div class="home-card" id="doc">
      <span>Documentos</span>
      <i class="bi bi-person-vcard home-icon" aria-hidden="true"></i>
    </div>
    
    <div class="home-card" id="transit">
      <span>Transporte</span>
      <i class="bi bi-car-front-fill home-icon" aria-hidden="true"></i>
    </div>
    
    <div class="home-card" id="health">
      <span>Saúde</span>
      <i class="bi bi-hospital home-icon" aria-hidden="true"></i>
    </div>
    
    <div class="home-card" id="benefits">
      <span>Benefícios</span>
      <i class="bi bi-cash-coin home-icon" aria-hidden="true"></i>
    </div>

  </div>
`;