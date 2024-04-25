'use strict'

// Seleção dos elementos
const exemplo01 = document.querySelector("#exemplo01");
const mensagem = document.querySelector("#mensagem");
const pagina = document.querySelector("body");
const video = document.querySelector("video");


// Criando um objeto de áudio referenciando o arquivo
const efeitoSonoro = new Audio();
efeitoSonoro.src = "wow.wav"; 

// Criando um objeto de imagem referenciando o arquivo
const imagem = new Image();
imagem.src = "wow.gif"; //ou meme.gif

// Criando um objeto de imagem referenciando o arquivo


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

    // Inserindo a imagem após o parágrafo de mensagem
    mensagem.insertAdjacentElement("afterend", imagem)

    video.removeAttribute("hidden");
    video.play();

});

/* Exemplo Modo Noturno */
const divContainer = document.querySelector(".container")
const botao = document.querySelector("#noturno")

botao.addEventListener("click", function(){
    pagina.classList.toggle("noturno");
    divContainer.classList.toggle("noturno");


    // Desafios!!!

    /* 1) Aplciar um efeito de mudança de cores suave
    
    2) Fazer o botão mudar de texto, ou seja, inicia com o texto "ativar" e troca para o texto "desativar" conforme o que estiver acontecendo.*/
    
    pagina.style.transition = "1s"
    divContainer.style.transition = "1s"

   if ("noturno") {
    noturno.textContent = "Desativar"
   }else {
    noturno.textContent = "Ativar"
   }
})