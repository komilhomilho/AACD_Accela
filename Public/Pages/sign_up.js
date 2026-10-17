// ercy
import { switchPage } from './app.js';

const campoEmail = document.getElementById('email');
const campoSenha = document.getElementById('password');
const botaoLogin = document.getElementById('login');
botaoLogin.addEventListener('click', function () {
    const email = campoEmail.value;
    const senha = campoSenha.value;

    console.log("Email Digitado:", email);
    console.log("Senha Digitada:", senha);

    if (email === "" || senha === "") {
        alert("Por favor, preencha todos os campos!");
    }
        else if (email === "a" && senha === "a") {
        switchPage('home');
        }
}); 

