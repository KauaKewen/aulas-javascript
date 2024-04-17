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


// Objeto com array e outro objeto
const pessoa = {
    nome: "Chapolin Colorado",
    idade: 20,
    // Obs: usamos aspas neste caso pois não se trata de números matemáticos ou monetários.
    telefones: ["11-2135-0300", "11-96666-5555"],
    // Propriedade como objeto
    medidasFisicas: {
        peso: 75,
        altura: 1.66
    }
}

console.log(`O ${pessoa.nome} tem ${pessoa.medidasFisicas.peso}kg e ${pessoa.medidasFisicas.altura}m de altura. Contato: ${pessoa.telefones[1]}`);


// Array de objetos
const livros = [
    {
        titulo: "Harry Potter",
        autor: "J.K Rowling"
    },
    {
        titulo: "Crônicas de Nárnia",
        autor: "C.S Lewis"
    },
    {
        titulo: "Crônicas de Olam",
        autor: "L.L Wurlitzer"
    }
]

console.log(livros[1].titulo);
console.log("-----------------");
console.table(livros);