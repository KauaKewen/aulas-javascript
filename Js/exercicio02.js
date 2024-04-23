'use strict'


const clientes = [
    {
        id: 1,
        nome: "Goku"
    },
    {
        id: 2,
        nome: "Naruto"
    },
    {
        id: 3,
        nome: "Shiryu"
    }
];

for(const cliente of clientes){
    console.log(`Cliente: ${cliente.nome} (id: ${cliente.id})`);
}
