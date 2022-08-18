/*******************************************************************************
*   Objetivo: sistema para exibicao e gerenciamento para numeros pares e impares
*   Autor: Eduardo Moreira
*   Data de criacao: 15/08/2022
*   Versao: 2.0 
*******************************************************************************/

console.log('\nNúmeros pares e ímpares\n');

//import da funcao para verificar se o numero e par ou impar
const { calcularMedia, parimpar } = require('./modulos/parimpar.js');

//import da biblioteca de entrada de dados
var readline = require('readline');

const { exit, off } = require('process');

//instancia do objeto entradaDados
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdin
});

entradaDados.question('Digite o valor inicial (entre 0 e 500): ', function(vInicial){

    let valor1 = parseFloat(vInicial);

    if(vInicial == ''){
        console.log('ERRO: o valor inicial deve ser preenchido!');
        exit();
    }
    else if(valor1 < 0 || valor1 > 500){
        console.log('ERRO: o valor incial deve ser entre 0 e 500!');
        exit();
    }
    else if(isNaN(valor1)){
        console.log('ERRO: o valor inicial deve ser um número!')
        exit();
    }

    entradaDados.question('Digite o valor final (entre 100 e 1000): ', function(vFinal){
        
        let valor2 = parseFloat(vFinal);

        if(valor2 == ''){
            console.log('ERRO: o valor final deve ser preenchido!');
            exit();
        }
        if(valor2 < 100 || valor2 > 1000){
            console.log('ERRO: o valor final deve ser entre 100 e 1000!');

            if(valor2 == valor1){
                console.log('ERRO: o valor final não pode ser igual ao valor inicial!');
                exit();
            }
            if(valor2 < valor1){
                console.log('ERRO: o valor final deve ser maior que o valor incial!');
                exit();
            }
            
            exit();
        }

        if(valor2 == valor1){
            console.log('ERRO: o valor final não pode ser igual ao valor inicial!');
            exit();
        }
        if(valor2 < valor1){
            console.log('ERRO: o valor final deve ser maior que o valor incial!');
            exit();
        }
        else if(isNaN(valor2)){
            console.log('ERRO: o valor final deve ser um número!');
            exit();
        }

        entradaDados.question('Digite a separação a ser exibida (par, ímpar ou ambos): ', function(escolha){
            
            if(escolha == ''){
                console.log('ERRO: a separação a ser exibida deve ser preenchida!');
                exit();
            }
            
            parimpar(valor1, valor2, escolha);

            exit();
        });
    });
});