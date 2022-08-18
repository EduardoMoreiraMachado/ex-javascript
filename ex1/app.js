/**************************************************************************
*   Objetivo: realizar a media de notas de um sistema educacional
*   Autor: Eduardo Moreira
*   Data de criacao: 01/08/2022
*   Versao: 1.0 
**************************************************************************/

console.log('\nCalcular Média de Notas\n');

//import da funcao para calcular a media
const { calcularMedia } = require('./modulos/media.js');

//import da fucao para validar o status
const { validacaoStatus } = require('./modulos/status.js');

//import da biblioteca de entrada de dados
var readline = require('readline');

const { exit } = require('process');

//instancia do objeto entradaDados
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdin
});

entradaDados.question('\nDigite o nome do aluno: ', function(nomeAluno){

    let nomeA = nomeAluno;

    if(nomeA == ''){
        console.log('\nERRO: O nome do aluno deve ser preenchido!')

        exit();
    }

    entradaDados.question('\nInforme o sexo do aluno: ', function(sexoAluno){

        let sexoA = sexoAluno.toLowerCase();

        if(sexoA == ''){
            console.log('\nERRO: O sexo do aluno deve ser informado!');

            exit();
        }

        entradaDados.question('\nDigite o nome do professor: ', function(nomeProfessor){

            let nomeP = nomeProfessor;

            if(nomeP == ''){
                console.log('\nERRO: O nome do professor deve ser informado!');

                exit();
            }

            entradaDados.question('\nInforme o sexo do professor: ', function(sexoProfessor){

                let sexoP = sexoProfessor.toLowerCase();

                if(sexoP == ''){
                    console.log('\nERRO: O sexo do professor deve ser informado!');

                    exit();
                }

                entradaDados.question('\nDigite o nome do curso: ', function(nomeCurso){

                    let nomeC = nomeCurso;

                    if(nomeC == ''){
                        console.log('\nERRO: O nome do curso deve ser informado!');

                        exit();
                    }

                    entradaDados.question('\nInforme a disciplina: ', function(disciplina){

                        let dis = disciplina;

                        if(dis == ''){
                            console.log('\nERRO: A disciplina deve ser informada!');

                            exit();
                        }

                        entradaDados.question('\nDigite a primeira nota: ', function(nota1){

                            let valor1 = nota1;

                            if (valor1 == ''){
                                console.log('\nERRO: A primeira nota deve ser preenchida!');

                                exit();
                            }
                            else if (valor1 < 0 || valor1 > 100){
                                console.log('\nERRO: A nota deve ser um valor entre 0 e 100!');

                                exit();
                            }
                            else if (isNaN(valor1)){
                                console.log('\nERRO: O valor digitado deve ser um número!');

                                exit();
                            }

                            entradaDados.question('\nDigite a segunda nota: ', function(nota2){

                                let valor2 = nota2;

                                if (valor2 == ''){
                                    console.log('\nERRO: A segunda nota deve ser preenchida!');

                                    exit();
                                }
                                else if (valor2 < 0 || valor2 > 100){
                                    console.log('\nERRO: A nota deve ser um valor entre 0 e 100!');

                                    exit();
                                }
                                else if (isNaN(valor2)){
                                    console.log('\nERRO: O valor digitado deve ser um número!');

                                    exit();
                                }
                                entradaDados.question('\nDigite a terceira nota: ', function(nota3){

                                    let valor3 = nota3;

                                    if (valor3 == ''){
                                        console.log('\nERRO: A terceira nota deve ser preenchida!');

                                        exit();
                                    }
                                    else if (valor3 < 0 || valor3 > 100){
                                        console.log('\nERRO: A nota deve ser um valor entre 0 e 100!');
                                        
                                        exit();
                                    }
                                    else if (isNaN(valor3)){
                                        console.log('\nERRO: O valor digitado deve ser um número!');

                                        exit();
                                    }

                                    entradaDados.question('\nDigite a quarta nota: ', function(nota4){

                                        let valor4 = nota4;

                                        if (valor4 == ''){
                                            console.log('\nERRO: A quarta nota deve ser preenchida');

                                            exit();
                                        }
                                        else if (valor4 < 0 || valor4 > 100){
                                            console.log('\nERRO: A nota deve ser um valor de 0 a 100');

                                            exit();
                                        }
                                        else if (isNaN(valor4)){
                                            console.log('\nERRO: O valor digitado deve ser um número!');

                                            exit();
                                        }
                                        
                                        else {

                                            let media = calcularMedia(nota1, nota2, nota3, nota4);
                                            let status = validacaoStatus(media);
                                            let artigoAluno;
                                            let artigoProfessor;

                                            //validacao do sexo do(a) aluno(a)
                                            if(sexoAluno == 'masculino' || sexoAluno == 'm'){
                                                artigoAluno = 'o';
                                            }
                                            else if(sexoAluno == 'feminino' || sexoAluno == 'f'){
                                                artigoAluno = 'a';
                                            }
                                            //validacao do sexo do(a) aluno(a)
                                            if(sexoProfessor == 'masculino' || sexoProfessor == 'm'){
                                                artigoProfessor = '';
                                            }
                                            else if(sexoProfessor == 'feminino' || sexoProfessor == 'f'){
                                                artigoProfessor = 'a'
                                            }

                                            if(status == 'de exame'){
                                                entradaDados.question('\nDigite a nota do exame: ', function(exame){
                                                    let mediaExame = (media + parseFloat(exame)) / 2;
                                                    
                                                    if(mediaExame >= 60){
                                                        status = 'aprovad';
                                                    }
                                                    else{
                                                        status = 'reprovad';
                                                    }

                                                    console.log(`\n${artigoAluno.toUpperCase()} alun${artigoAluno} foi ${status}${artigoAluno} na disciplina ${disciplina}.\n
                                                    Curso: ${nomeCurso}\n
                                                    Professor${artigoProfessor}: ${nomeProfessor}\n
                                                    Notas do aluno: ${nota1}, ${nota2}, ${nota3}, ${nota4}\n
                                                    Nota do Exame: ${exame}\n
                                                    Média: ${media}\n
                                                    Média final do Exame: ${mediaExame}`);

                                                    exit();
                                                });
                                            }

                                            else{
                                                console.log(`\n${artigoAluno.toUpperCase()} alun${artigoAluno} foi ${status}${artigoAluno} na disciplina ${disciplina}.\n
                                                Curso: ${nomeCurso}\n
                                                Professor${artigoProfessor}: ${nomeProfessor}\n
                                                Notas do aluno: ${nota1}, ${nota2}, ${nota3}, ${nota4}\n
                                                Média Final: ${media}\n`);

                                                exit();
                                            }
                                        }
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});