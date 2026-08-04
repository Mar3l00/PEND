const formulario = document.getElementById("formContato");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;

    if (nome === "" || email === "" || senha === "" || confirmarSenha === "") {
        mensagem.style.color = "red";
        mensagem.textContent = "Preencha todos os campos.";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        mensagem.style.color = "red";
        mensagem.textContent = "Digite um e-mail válido.";
        return;
    }

    if (senha.length < 6) {
        mensagem.style.color = "red";
        mensagem.textContent = "A senha deve ter pelo menos 6 caracteres.";
        return;
    }

    if (senha !== confirmarSenha) {
        mensagem.style.color = "red";
        mensagem.textContent = "As senhas não coincidem.";
        return;
    }

    mensagem.style.color = "green";
    mensagem.textContent = `Cadastro realizado com sucesso! Bem-vindo(a), ${nome}.`;

    formulario.reset();
});