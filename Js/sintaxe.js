
        // Habilitando o modo estrito da linguagem. Ao fazer isso, a linguagem passa a analizar se você declarou variáveis e não está usando palavras-reservadas. Se isso acontecer, erros serão exibidos.
        'use strict';
        console.log("Hello World!");

        // Manipulação de dados

        // Variáveis (valores podem ser modificados)
        let curso = ("Desenvolvimento Web");
        let ano = (2024);
        let disciplina;
        console.log(disciplina);
        disciplina = ("Lógica");

        // Constantes (valores fixos, não podem ser modificados)
        const escola = ("Senac");
        // Constantes sempre devem ter valores
        const materia = ("Português");

        // Saída de dados
        console.log(curso);
        console.log(ano);
        console.log(escola);

        // Criando variável sem declaração let
        // nomeDaVariavel = ("algum valor");
        // console.log(nomeDaVariavel);

        // Palavras-chave de uso reservado: public, implements, private, arguments
        // let public = ("Palavra reservada");
        // console.log(public);

        // Saída de dados personalizados

        // CONCATENAÇÃO (forma mais antiga/tradicional)
        console.log("estou fazendo o curso de " +curso+" no " +escola+" Penha.");

        // TEMPLATE LITERAL/STRING (forma mais moderna)
        console.log(`Estou fazendo o curso de ${curso} no ${escola} Penha.`);

        // Montando a frase antes de dar saída nela
        let mensagem = (`Estou fazendo o curso de ${curso} no ${escola} Penha.`)

        console.log(mensagem);


        // Operações matemáticas básicas

        let valor1 = 10;  //inteiro 
        let valor2 = 5; //inteiro
        let valor3 = 1200.55; //decimal/ quebrado usando . pra casa decimal

        // Operações
        let soma = valor1 + valor2;
        let subtracao = valor1 - valor2;
        let multiplicacao = valor1 * valor2;
        let divisao = valor1 / valor2;

        console.log("Soma: "+soma);
        console.log("Subtração: "+subtracao);
        console.log("Multiplicação: "+multiplicacao);
        console.log("Divisão: "+divisao);