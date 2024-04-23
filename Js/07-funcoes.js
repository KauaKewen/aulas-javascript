'use strict'

// Sintaxe 1: função anônima
const exemplo1 = function(){
    console.log("Função anônima");
};

// Chamando/invocando a função
exemplo1();

// Sintaxe 2: função nomeada/declarada
function exemplo2(){
    console.log("Função nomeada/declarada");
}

exemplo2();

// Sintaxe 3: arrow function (função flecha/seta)
const exemplo3 = () => {
    console.log("Arrow Function");
};

exemplo3();

/* Obs.: funções (em qualquer sintaxe) também podem trabalhar com parâmetros/argumentos.

Quando uma função precisa de valores/dados para algum tipo de processamento, ela recebe parâmetros/argumentos entre os parênteses.

Geralmente, ao término do processamento dos parâmetros, a função "retorna" para fora um resultado*/

/* Exemplos diversos */

// Função com parâmetros
function somar (valor1, valor2){
    /* Ao receber os valores (parâmetros), a função primeiro calcula e depois devolve o resultado */
    return valor1 + valor2;
}

console.log(somar(10, 5));
console.log(somar(100, 5));

console.log("----------------");

/* Formatação de valores monetários em reais */
let preco = 5000;
let desconto = preco * 0.10 //10%
let precoFinal = preco - desconto;

function formatarValor(valor){
    return new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(valor)
}

console.log(`Preço ${formatarValor(preco)}`);
console.log(`Desconto ${formatarValor(desconto)}`);
console.log(`Preço final ${formatarValor(precoFinal)}`);