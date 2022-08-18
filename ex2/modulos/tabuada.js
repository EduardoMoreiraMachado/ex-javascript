/*******************************************************************
*   Objetivo: arquivo que contem a funcao para o calculo de tabuadas
*   Autor: Eduardo Moreira
*   Data de criacao: 11/08/2022
*   Versao: 1.0
*******************************************************************/

const { exit } = require("process");

function tabuada(inicio, fim, valor1, valor2){

    let inicioTabuada = inicio;
    let fimTabuada = fim;
    let inicioMult = valor1;
    let fimMult = valor2;

    for(inicioTabuada ; inicioTabuada <= fimTabuada ; inicioTabuada++){
        console.log(`Tabuada do ${inicioTabuada}`);
        for(inicioMult ; inicioMult <= fimMult ; inicioMult++){
            console.log(`${inicioTabuada} x ${inicioMult} = ${inicioTabuada * inicioMult}`);
        }
        inicioMult = valor1;
    }
    exit();
}

module.exports = {
    tabuada
}