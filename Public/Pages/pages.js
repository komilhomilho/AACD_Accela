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
        <h1 style="text-align: center;">FAQ</h1>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Como dar mole para os crias?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item’s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Como não dar mole para os crias?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse cor_vermelha collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        O que o Eryck conseguiu convencer o professor a fazer uma outra prova?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse  cor_vermelha collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>Segredo.</strong>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        O que o Eryck conseguiu convencer o professor a fazer uma outra prova?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse  cor_vermelha collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>Segredo.</strong>
      </div>
    </div>
  </div>
</div>`,
"js": "faq.js"
    },  
      "favorites":{
        "html":``,
        "js": "./favorites.js"
      }
}