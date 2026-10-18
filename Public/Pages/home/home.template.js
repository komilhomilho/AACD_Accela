
export const homeHtml = `
<div class="home">

  <!-- Barra de pesquisa -->
  <div class="input-group home-search">
    <span class="input-group-text">
      <i class="bi bi-search"></i>
    </span>
    <input
      type="text"
      class="form-control"
      placeholder="Pesquise aqui..."
      aria-label="Pesquisar"
    >
  </div>

  <!-- Categorias -->
  <div class="home-container">

    <div class="home-card" id="gov_doc">
      <span>Governo e documentos</span>
      <i class="bi bi-person-vcard home-icon"></i>
    </div>

    <div class="home-card" id="transit">
      <span>Trânsito</span>
      <i class="bi bi-car-front-fill home-icon"></i>
    </div>

    <div class="home-card" id="health">
      <span>Saúde</span>
      <i class="bi bi-hospital home-icon"></i>
    </div>

    <div class="home-card" id="benefits">
      <span>Benefícios e dinheiro</span>
      <i class="bi bi-cash-coin home-icon"></i>
    </div>

  </div>

</div>
`;
