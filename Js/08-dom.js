'use strict';

/* Funções/métodos mais comuns para seleção de elementos no DOM

 - getElementById()
 Seleciona UM ELEMENTO através do atributo ID
 
  - querySelector()
  Seleciona UM ELEMENTO através de seletor baseado na lógica CSS
  
   - querySelectorAll()
   Seleciona VÁRIOS ELEMENTOS através de seletor(es) baseado na lógica CSS
   */

// Exemplo 1: getElementById()
const legenda = document.getElementById("legenda")
console.log(legenda);

// Exemplo 2: querySelector()
const titulo = document.querySelector("h1");
console.log(titulo);

const sobreFront = document.querySelector("#sobre");
console.log(sobreFront);

/* Mini-exercício
1) Faça o acesso/seleção do h2 Back-End e mostre no console.

2) Faça o acesso/seleção apenas do h2 existente dentro da div com a classe 'editores' e mostre no console.*/

const backEnd = document.querySelector(".back-end")
console.log(backEnd);

const editores = document.querySelector(".editores h2")
console.log(editores);

// Exemplo 3: querySelectorAll() - obs: funciona parecido com array
const subtitulos = document.querySelectorAll("h2");
console.log(subtitulos);
console.log(subtitulos[0]);

const variosElementos = document.querySelectorAll("p, a, p b, #teste");
console.log(variosElementos);

/* Modificando o DOM:
Podemos alterar conteúdo, tags, estilos, criar elementos, remover elementos e etc */
// Alteração de conteúdo textual
legenda.textContent = "Imagem do modelo de objetos do documento";

sobreFront.innerHTML = "<i>Front-End</i>"; 

// Alteração de estilos inline

backEnd.style.color = "red";
backEnd.style.textAlign = "center";

// Aplicação de classes CSS via JavaScript
titulo.classList.add("destaque");

const listaDeEditores = [
    {
        nome: "Visual Studio Code",
        finalidade: "Desenvolvimento web em geral"
    },
    {
        nome: "Android Studio",
        finalidade: "Desenvolvimento de aplicações Android"
    },
    {
        nome: "Xcode",
        finalidade: "Desenvolvimento de aplicações IOS"
    }
]

// Acessando/selecionando a lista que será usada no HTML
const lista = document.querySelector(".lista");
console.log(lista);

/* Percorrer (loop) o array de ListaDeEditores,
criar os itens <li> com o conteúdo do array e adicioná-los à lista HTML */
// for( variavel/constante de acesso of arrayComDadosQueQueremosAcessar){}
for(const editor of listaDeEditores){
    // Etapa 1: criar elemento <li>
    const item = document.createElement("li");

    // Etapa 2: adicionar conteúdo ao novo elemento 
    item.innerHTML = `<b>${editor.nome}</b>: ${editor.finalidade}`;
    
    // Etapa 3: adicionar o elemento à lista <ol>
    lista.appendChild(item);
}