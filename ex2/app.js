/**************************************************************************
*   Objetivo: realizar um sistema para cálculo de tabuadas
*   Autor: Eduardo Moreira
*   Data de criacao: 11/08/2022
*   Versao: 1.0 
**************************************************************************/

console.log('\nCalcular Tabuadas\n');

//import da funcao para calcular as tabuadas
const { tabuada } = require('./modulos/tabuada.js');

//import da biblioteca de entrada de dados
var readline = require('readline');

const { exit } = require('process');

//instancia do objeto entradaDados
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdin
});

entradaDados.question('Digite a tabuada de número inicial (entre 2 e 100): ', function(tabuadaInicial){
    
    let tInicial = parseInt(tabuadaInicial);

    if(tInicial == ''){
        console.log('ERRO: a tabuada de número inicial deve ser preenchida!');
        exit();
    }
    else if(tInicial < 2 || tInicial > 100){
        console.log('ERRO: a tabuada de valor inicial deve ser um valor entre 2 e 100!');
        exit();
    }

    entradaDados.question('Digite a tabuada de número final: ', function(tabuadaFinal){

        let tFinal = parseInt(tabuadaFinal);

        if(tFinal == ''){
            console.log('ERRO: a tabuada de número final deve ser preenchida!');
            exit();
        }
        else if(tFinal < 2 || tFinal > 100){
            console.log('ERRO: a tabuada de valor final deve ser um valor entre 2 e 100!');
            exit();
        }
        else if(tFinal < tInicial){
            console.log('ERRO: a tabuada de valor final deve ser maior que a tabuada de valor inicial!');
            exit();
        }

        entradaDados.question('Digite o valor inicial de onde deve ser calculado (entre 1 e 50): ', function(valorInicial){

            let vInicial = parseInt(valorInicial);

            if(vInicial == ''){
                console.log('ERRO: o valor inicial de onde será ser calculado deve ser preenchido!');
                exit();
            }
            else if(vInicial < 1 || vInicial > 50){
                console.log('ERRO: o valor inicial de onde será calculado deve ser um valor entre 1 e 50!');
                exit();
            }

            entradaDados.question('Digite o valor final de onde deve ser calculado: ', function(valorFinal){

                let vFinal = parseInt(valorFinal);

                if(vInicial == ''){
                    console.log('ERRO: o valor final de onde será ser calculado deve ser preenchido!');
                    exit();
                }
                else if(vInicial < 1 || vInicial > 50){
                    console.log('ERRO: o valor final de onde será calculado deve ser um valor entre 1 e 50!');
                    exit();
                }
                else if(vFinal < vInicial){
                    console.log('ERRO: o valor final de onde será calculado deve ser menor que o valor inicial de onde será calculado!');
                    exit();
                }

                tabuada(tInicial, tFinal, vInicial, vFinal);
            })
        })
    })
})