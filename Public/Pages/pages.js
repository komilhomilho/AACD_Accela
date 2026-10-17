export const mapsPages = {
  "login": {
    "html": `

    <style>
   
        .form-container {
            display: flex;
            flex-direction: column; 
            gap: 15px;             
            width: 100%;
            max-width: 400px;      
            box-sizing: border-box;
        }

      
        .form-container input, 
        .form-container button {
            width: 100%;
            padding: 12px;
            border: none;
            border-radius: 6px;
            box-sizing: border-box;
            font-size: 16px;
        }

        
        .form-container button {
            cursor: pointer;
            font-weight: bold;
        }

        
        input::placeholder {
            color: white;
            opacity: 0.8;
        }
    </style>
</head>
<body>

    <h1>Faça seu Login</h1>
    <div class="form-container">
        <input type="email" id="email" placeholder="Digite seu email" style="background-color: #72101D; color: white;">
        <input type="password" id="password" placeholder="Digite sua senha" style="background-color: #72101D; color: white;">
        
        <button id="login" style="background-color: #72101D; color: white;">Login</button>
        <button id="register" style="background-color: #72101D; color: white;">Criar Conta</button>
        <button></button>
        <button></button>
    </div>

</body>
</html>




        `,
    "js": "./login.js"
  },
  "home": {
    "html": `
            <h1>Página Inicial</h1>
            <p>Bem-vindo ao sistema!</p>
        `,
    "js": "./home.js"
  },
  "faq": {
    "html": `<div class="accordion" id="accordionExample">
        <h1 style="text-align: center;">
        <strong>FAQ</strong>
        </h1>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed cor_vermelha" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" cor_vermelha>
        Como dar mole para os crias?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed cor_vermelha" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Como não dar mole para os crias?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed cor_vermelha" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        O que o professor gosta de fazer no sigilo?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed cor_vermelha" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        O que o Eryck conseguiu convencer o professor a fazer uma outra prova?
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse  collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </div>
    </div>
  </div>
</div>`,
    "js": "faq.js"
  },
  "favorites": {
    "html": ``,
    "js": "./favorites.js"
  }
}