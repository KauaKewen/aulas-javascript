'use strict';

/*Comandos utilizados em condicionais 
if (se)
else (senão)
else if (senão se)

switch/case (escolha/caso)

Operadores relacionais:
> MAIOR QUE
< MENOR QUE
>= MAIOR OU IGUAL
<= MENOR OU IGUAL
!= DIFERENÇA
== IGUALDADE (considera somente valor)
=== IGUALDADE ESTRITA (considera valor e tipo de dados)

let a = 10;
let b = "10";

console.log(a==b);
console.log(a===b);*/

// Condicional SIMPLES
let numero = 10;

if(numero > 5){
    console.log("Mensagem exibida pois a condição é VERDADEIRA!");
}

// Condicional COMPOSTA
let usuario = "Ozzy Osbourne";
let idade = 73;

// Variável com propósito de guardar a palavra "maior" ou menor"
let texto; //undefined/indefinida

if(idade >= 18){
    texto = "maior";
} else{
    texto = "menor";
}

console.log(`${usuario} é ${texto} de idade.`);

console.log("if/else usando ternário ?:");
let texto2 = idade >= 18 ? "maior" : "menor";
console.log(`${usuario} é ${texto2} de idade.`);


// Condicional ENCADEADA/SUCESSIVA
let texto3;
if(idade >= 60){
    texto3 = "idoso(a)";
} else if (idade >= 18){
    texto3 = "adulto(a)";
} else{
    texto3 = "menor de idade";
}

console.log(`${usuario} tem ${idade} anos e é ${texto3}`);

console.log("--------");

// Condicional switch/case
let opcao = 1;
let mensagem;

switch(opcao){
    case 1: mensagem = "Informações"; break;
    case 2: mensagem = "Reclamações"; break;
    case 3: mensagem = "Elogios"; break;
    default: mensagem = "Falar com atendente"; break;
}

console.log("Opção escolhida: "+opcao);
console.log("Mensagem: "+mensagem);