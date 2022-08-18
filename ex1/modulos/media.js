/**************************************************************************
*   Objetivo: arquivo que contem calculos para realizar uma media
*   Autor: Eduardo Moreira
*   Data de criacao: 01/08/2022
*   Versao: 1.0 
**************************************************************************/

const calcularMedia = function(valor1, valor2, valor3, valor4){
    let nota1 = valor1;
    let nota2 = valor2;
    let nota3 = valor3;
    let nota4 = valor4;

    return (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) / 4;
    
}

module.exports = {
    calcularMedia
}