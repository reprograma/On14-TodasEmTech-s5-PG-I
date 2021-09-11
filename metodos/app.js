// Importa o array de objetos que foi exportado da database.js

const estudantes = require('./database')
console.table(estudantes);

//ordenando por idade de forma crescente
estudantes.sort((a, b) => a.idade - b.idade)
console.table(estudantes);

//como pegar entradas de pessoas usuárias no terminal
//1- eu preciso importar a ferramenta readline-sync
const pegarEntrada = require('readline-sync')

//como fazer uma pergunta que vai ser respondida no terminal
const verAlunasPorLocal = pegarEntrada.question('Voce deseja encontrar uma aluna por local?(S/N)').toLocaleUpperCase()
console.log(verAlunasPorLocal)

//verificando a partir da entrada, e mostrando os próximos passos do meu sistema

if (verAlunasPorLocal === 'S') {
    console.log('Temos alunas de SP e PE')
    // caso a pessoa escolha vamos filtrar por localidade
    const qualLocal = pegarEntrada.question('De qual local voce quer encontrar?').toLocaleUpperCase()
    console.log('Essas são nossas alunas desse local:')
    
function local(estudantes) {
    return estudantes.local === qualLocal 
}

const estudantesEncontradas = estudantes.filter(local)
console.table(estudantesEncontradas)

}else {
    console.log('Essas são todas nossas alunas.')
    console.table(estudantes)

}