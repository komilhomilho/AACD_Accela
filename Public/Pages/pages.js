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
    "html": `
<div class="accordion" id="accordionExample">

  <h1 style="text-align: center; margin-bottom: 30px;">
    <strong>FAQ</strong>
  </h1>

  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed cor_vermelha" type="button"
        data-bs-toggle="collapse" data-bs-target="#collapseOne"
        aria-expanded="false" aria-controls="collapseOne">
        1. Este site é seguro?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse"
      data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Nosso site foi desenvolvido por estudantes do Instituto Mauá de Tecnologia (IMT),
        com o objetivo de facilitar o acesso a serviços e informações.
        Procuramos disponibilizar links confiáveis, mas recomendamos sempre
        verificar o endereço do site para o qual você será direcionado.
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed cor_vermelha" type="button"
        data-bs-toggle="collapse" data-bs-target="#collapseTwo"
        aria-expanded="false" aria-controls="collapseTwo">
        2. Para que serve este site?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse"
      data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Nosso objetivo é facilitar sua navegação pela internet.
        Reunimos links úteis em um só lugar e direcionamos você
        para as páginas onde poderá encontrar os serviços e as
        informações de que precisa.
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed cor_vermelha" type="button"
        data-bs-toggle="collapse" data-bs-target="#collapseThree"
        aria-expanded="false" aria-controls="collapseThree">
        3. Quem criou este site?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse"
      data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Este projeto foi desenvolvido por estudantes do
        Instituto Mauá de Tecnologia (IMT), com a intenção
        de tornar o acesso a informações e serviços digitais
        mais simples, organizado e acessível para todos.
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed cor_vermelha" type="button"
        data-bs-toggle="collapse" data-bs-target="#collapseFour"
        aria-expanded="false" aria-controls="collapseFour">
        4. Por que sou enviado para outro site?
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse"
      data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Nosso site funciona como um facilitador de acesso.
        Ao clicar em um serviço, você será direcionado para
        a página responsável por ele. Isso é normal e faz
        parte do funcionamento da nossa plataforma.
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed cor_vermelha" type="button"
        data-bs-toggle="collapse" data-bs-target="#collapseFive"
        aria-expanded="false" aria-controls="collapseFive">
        5. Preciso pagar alguma coisa para usar este site?
      </button>
    </h2>
    <div id="collapseFive" class="accordion-collapse collapse"
      data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Não. O acesso ao nosso site é gratuito.
        Entretanto, alguns serviços externos podem possuir
        taxas ou cobranças próprias. Caso isso aconteça,
        as informações serão apresentadas pelo site
        responsável pelo serviço.
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed cor_vermelha" type="button"
        data-bs-toggle="collapse" data-bs-target="#collapseSix"
        aria-expanded="false" aria-controls="collapseSix">
        6. Meus dados pessoais estão seguros?
      </button>
    </h2>
    <div id="collapseSix" class="accordion-collapse collapse"
      data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Nossa plataforma tem como finalidade direcionar
        você para outros sites, sem exigir o fornecimento
        de dados pessoais para acessar os links.
        Ao entrar em páginas externas, recomendamos verificar
        suas políticas de privacidade e nunca compartilhar
        senhas ou informações confidenciais em páginas suspeitas.
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed cor_vermelha" type="button"
        data-bs-toggle="collapse" data-bs-target="#collapseSeven"
        aria-expanded="false" aria-controls="collapseSeven">
        7. O que devo fazer se um link não funcionar?
      </button>
    </h2>
    <div id="collapseSeven" class="accordion-collapse collapse"
      data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Alguns sites podem mudar de endereço ou deixar de
        funcionar sem aviso prévio. Caso um link não abra,
        você pode tentar novamente mais tarde ou procurar
        o serviço diretamente em seu site oficial.
        Não nos responsabilizamos por alterações realizadas
        nas páginas externas.
      </div>
    </div>
  </div>

</div>`,
    "js": "faq.js"
  },
  "favorites": {
    "html": ``,
    "js": "./favorites.js"
  },
  "redirect": {
    "html": `<div class="redirect-box">
    <div class="spinner-border" role="status" style="width: 5rem; height: 5rem; color: #ffffff;">
    <span class="visually-hidden">Loading...</span>
</div>
<p></p>

    <h2>Aguarde, você está sendo redirecionado para o site.</h2>

    <p class="redirect-warning">
        Não nos responsabilizamos caso o link tenha sido
        alterado ou modificado propositalmente.
    </p>
</div>`,
    "js": "./redirect.js"
  }
}