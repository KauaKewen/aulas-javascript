// Requisitos para aprovação

const mediaMinima = 7;
const limiteDeFaltas = 10;

// alunos de exemplo
let aluno = "Dayane";
let mediaFinal = 10;
let faltas = 4;
let resultado;

// Operador E (AND &&)

if(mediaFinal >= mediaMinima && faltas<= limiteDeFaltas){
    resultado = "aprovado";
} else {
    resultado = "reprovado"
}

console.log(resultado);