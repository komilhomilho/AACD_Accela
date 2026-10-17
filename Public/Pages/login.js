// eryc
const main = document.querySelector('main');
main.innerHTML = `<h1>Faça seu Login</h1>

<input type="email" id="email" placeholder="Digite seu email">
<input type="password" id="senha" placeholder="Digite sua senha">
<button id="login">Login</button>`;

const campoEmail = document.getElementById('email');
const campoSenha = document.getElementById('senha');
const botaoLogin = document.getElementById('login');

botaoLogin.addEventListener('click', function() {
    const email = campoEmail.value;
    const senha = campoSenha.value;
    
    console.log("Email Digitado:", email);
    console.log("Senha Digitada:", senha);

    
    if (email === "" || senha === "") {
        alert("Por favor, preencha todos os campos!.");
    }
    else if (email === "test@email.com" && senha === "123456") {
        alert("Login realizado com sucesso!");
    } else {
        alert("Email ou senha incorretos.");
    }
})
