'use strict';

const alunos = ["Willian", "Vinicius", "Marli", "Duda", "Gabriel"];

// Exibindo a estrutura do array (somente no console)
console.log(alunos);

// Acessando individualmente alguns alunos
console.log(alunos[1]); //Vinicius
console.log(alunos[3]); // Duda
console.log(alunos[0]); //Willian

const lista = ["Pudim", "Dj Arana", "Lana Del Rey", "Deceit", "GTA", "Dead By Daylight", "Robótica"];

console.log(`Meu artista fav é ${lista[1]}, meu jogo fav é ${lista[4]} e curto ${lista[6]}`);

// MATRIZ (array com mais de uma dimensão)

const tecnologias = [
    ["HTML5", "CSS3", "JavaScript"],
    ["PHP", "Node.Js", "SQL", "Python", "Firebase"]
];

console.log(tecnologias[0][1]); 
console.log(tecnologias[1][3]);