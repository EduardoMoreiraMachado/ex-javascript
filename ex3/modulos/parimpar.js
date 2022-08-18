/*******************************************************************************
*   Objetivo: arquivo que contem a funcao para validar se um numero e par ou impar
*   Autor: Eduardo Moreira
*   Data de criacao: 15/08/2022
*   Versao: 2.0 
*******************************************************************************/

function parimpar(primeiroV, segundoV, opcao){

    let valor1 = primeiroV;
    let valor2 = segundoV;
    let quantidade = 0;
    let escolha = opcao;

    if(opcao == 'par' || opcao == 'p'){

        console.log('\nVALORES PARES:');
        for(valor1 ; valor1 <= valor2 ; valor1 ++){
            if(valor1 % 2 == 0){
                console.log(`${valor1}`);
                
                quantidade++
            }
        }

        console.log(`\n Quantidade de valores obtidos: ${quantidade}\n`);

    }

    if(opcao == 'impar' || opcao == 'i'){

        valor1 = primeiroV;
        quantidade = 0;

        console.log('\nVALORES ÍMPARES:');
        for(valor1 ; valor1 <= valor2 ; valor1 ++){
            if(valor1 % 2 != 0){
                console.log(`${valor1}`);

                quantidade++
            }
        }

        console.log(`\n Quantidade de valores obtidos: ${quantidade}\n`);

    }

    if(opcao == 'ambos' || opcao == 'a'){

        console.log('\nVALORES PARES:');
        for(valor1 ; valor1 <= valor2 ; valor1 ++){
            if(valor1 % 2 == 0){
                console.log(`${valor1}`);
                
                quantidade++
            }
        }

        console.log(`\n Quantidade de valores obtidos: ${quantidade}\n`);

        quantidade = 0;

        console.log('\nVALORES ÍMPARES:');
        for(valor1 = primeiroV ; valor1 <= valor2 ; valor1 ++){
            if(valor1 % 2 != 0){
                console.log(`${valor1}`);

                quantidade++
            }
        }

        console.log(`\n Quantidade de valores obtidos: ${quantidade}\n`);

    }
}

module.exports = {
    parimpar
}