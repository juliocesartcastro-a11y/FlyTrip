/* ========================================
   FLYTRIP
   ARQUIVO DE INTERATIVIDADE
======================================== */

/* ========================================
   BOTÕES
======================================== */
// Seleciona todos os botões do site
const botoes = document.querySelectorAll(".botao");
// Percorre todos os botões encontrados
botoes.forEach(function(botao) {
    // Quando o mouse entra no botão
    botao.addEventListener("mouseenter", function() {
        botao.classList.add("botao-interativo");
    });
    // Quando o mouse sai do botão
    botao.addEventListener("mouseleave", function() {
        botao.classList.remove("botao-interativo");
    });
});

/* ========================================
   FORMULÁRIO DE CONTATO
======================================== */
const formulario = document.getElementById("formulario-contato");
const mensagemSucesso = document.getElementById("mensagem-sucesso");
if (formulario) {
    formulario.addEventListener("submit", function(event) {
        event.preventDefault();
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const mensagem = document.getElementById("mensagem").value;
        if (nome === "" || email === "" || mensagem === "") {
            alert("Preencha todos os campos!");
            return;
        }
        mensagemSucesso.style.display = "block";
        formulario.reset();
    });
}

/* ========================================
   CARDS DE DESTINOS
======================================== */
// Seleciona todos os cards
const cards = document.querySelectorAll(".destino-card");
// Percorre os cards
cards.forEach(function(card) {
    // Quando o mouse entra no card
    card.addEventListener("mouseenter", function() {
        card.classList.add("card-interativo");
    });
    // Quando o mouse sai do card
    card.addEventListener("mouseleave", function() {
        card.classList.remove("card-interativo");
    });
});