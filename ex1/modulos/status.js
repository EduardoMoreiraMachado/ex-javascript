/**************************************************************************
*   Objetivo: arquivo que contem a validacao de status 
*   Autor: Eduardo Moreira
*   Data de criacao: 11/08/2022
*   Versao: 1.0 
**************************************************************************/

function validacaoStatus(valor) {
    let media = valor;
    let status;

    if(media >= 70){
        status = 'aprovad';                                   
    }
    else if(media < 50){
        status = 'reprovad';
    }
    else if(media >= 50 && media <= 69){
        status = 'de exame';
    }
    
    return status;
}

module.exports = {
    validacaoStatus
}