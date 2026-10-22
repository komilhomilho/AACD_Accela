
export const homeHtml = `
  <!-- Barra de pesquisa -->
  <div class="input-group home-search mb-3">
    <span class="input-group-text">
      <i class="bi bi-search"></i>
    </span>
    <input
      id="searchBar"
      type="text"
      class="form-control"
      placeholder="Pesquise aqui..."
      aria-label="Pesquisar"
    >
  </div>

  <!-- Categorias -->
  <div class="home-container mt-8">

    <div class="home-card" id="doc">
      <span>Documentos</span>
      <i class="bi bi-person-vcard home-icon"></i>
    </div>
    <div class="home-card" id="transit">
      <span>Transporte</span>
      <i class="bi bi-car-front-fill home-icon"></i>
    </div>
    <div class="home-card" id="health">
      <span>Saúde</span>
      <i class="bi bi-hospital home-icon"></i>
    </div>
    <div class="home-card" id="benefits">
      <span>Benefícios</span>
      <i class="bi bi-cash-coin home-icon"></i>
    </div>

  </div>

</div>
`;
