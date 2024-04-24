'use strict'

/* let valorEmDolar = 1000;
let cotacao = 5.16;
let conversao = valorEmDolar * cotacao

// console.log(conversao);


function converterMoeda(conversao){
    return conversao
} */
/* ___________________________________________________ */

/* function converterMoeda(dolar) {
    const cotacao = 5.16; // Valor da cotação em reais (R$1 = $5.16)
    const valorDolar = (dolar);
    const valorReal = valorDolar * cotacao;

    // Formatando os valores
    const valorDolarFormatado = formatarMoeda(valorDolar, "dolar");
    const valorRealFormatado = formatarMoeda(valorReal, "real");

    return `Valor em dólar: ${valorDolarFormatado}\nValor convertido em reais: ${valorRealFormatado}`;
}

// Função para formatar valores de moeda
function formatarMoeda(valor, tipoMoeda) {
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: tipoMoeda === "dolar" ? 'USD' : 'BRL'
    });
    return formatter.format(valor);
}

const valorEmDolar = 1000;
console.log(converterMoeda(valorEmDolar)); */


// Correção

let cotacaoDoDia = 5.16;
let valorEmDolar = 1000;

function converterEmReais(valor){
    return valor * cotacaoDoDia
}

function formatarMoeda(valor, siglaDaMoeda, localizacao){
    const opcoes = {  
        style: "currency", 
        currency: siglaDaMoeda 
    };

    return new Intl.NumberFormat(localizacao, opcoes).format(valor)
}

console.log(converterEmReais(valorEmDolar));

// Versão 1 (função como parâmetro para outra função) com formatação

console.log(converterEmReais(valorEmDolar), "BRL", "pt-br");

// Versão 2 (primeiro, guardamos o resultado da conversão; depois passamos o resultado para a formatação)
let resultadoEmReais = converterEmReais(valorEmDolar);
console.log(formatarMoeda(resultadoEmReais, "BRL", "pt-br"));
console.log(formatarMoeda(valorEmDolar, "USD", "en")); 
