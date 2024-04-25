'use strict'

// Seleção dos elementos
const exemplo01 = document.querySelector("#exemplo01");
const mensagem = document.querySelector("#mensagem");
const pagina = document.querySelector("body");

// Criando um objeto de áudio referenciando o arquivo
const efeitoSonoro = new Audio();
efeitoSonoro.src = "wow.wav"; 

 /* Criando um Ouvinte de Evento (Event Listener)
 O primeiro parâmetro do addEventListerner é o tipo de evento que queremos "ouvir/monitorar". O segundo parâmetro é uma função (conhecida como callback) responsável por executar ações no momento em que o evento acontecer. */
exemplo01.addEventListener("click", function(){
    // Exibindo um texto no parágrafo mensagem
    mensagem.textContent = "Beleza! Evento acionado, função executada 😁"

    // Ativando uma classe para a mensagem
    mensagem.classList.add("destaque");

    // Modificando a fonte dp body
    pagina.style.fontFamily = "Arial";

    // Executando o áudio
    efeitoSonoro.play();
});