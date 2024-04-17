'use strict';

// Declarando um objeto

const livro = {
    titulo: "Senhor dos anéis",
    autor: "J.R.R Tolkien",
    volumes: 3,
    ano: 1954
};

console.log(livro);
console.log(livro.titulo);
console.log(livro.autor);

console.log(`${livro.titulo} foi criado por ${livro.autor}`);


const carro = {
    marca: "Fiat",
    modelo: "Uno",
    anoDeFabricacao: 1996,
    quantidadeDePortas: 2,
    cor: "Branco",
    // Propriedade como array
    listaOpcional:[
        "ar-condicionado", "vidros elétricos", "alarme"
    ]
}


console.log(`O ${carro.marca} ${carro.modelo} fabricado em ${carro.anoDeFabricacao} com ${carro.quantidadeDePortas} portas e com ${carro.listaOpcional[1]}, foi um famoso no Brasil`);