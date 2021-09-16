//importa o array  de objetos que foi exportado  da database.js
const estudantes = require('./database')
console.table(estudantes);
//oredenando por idade  de forma  crecente 
estudantes.sort((a, b) => a.idade - b.idade)
console.table(estudantes);
// como pegar entradas de pessas usuários no terminales
// 1- eu preciso importa a ferramenta readline -sync 
const pegarEntradas = require('readline-sync')
//como fazer uma pergunta  que vai ser respondida no terminal 
 const verAlunasPorLocal = pegarEntrada.question('Voce deseja encontrar aluna de qual estado ?'(S/N)).toLocaleUpperCase()
 console.log(verAlunasPorLocal)
 //verificando a partir da entrada, e mostrando os próximos passos do meu sistema 
  
if(verAlunasPorLocal === 'S') {
  console.log('Essas são nossas alunas desse local:')
  console.log('temos Alunas de SP e PE ')
  //caso a pessoa escolha vamos filtrar por localidade de
  const qualLocal = pegarEntrada.question('De qual local  quer encontrar ?').toLocaleUpperCase()
  console.log('Essas são nossas alunas desse local:')
  function local(estudantes ){
    return estudantes.local === qualLocal
  }
  const estudantesEncontradas = estudantes.filter(local)
  console.table('estudantes encontradas')
}else {
  console.table('Essas são todas nossas alunas desse local:')
  console.table(estudantes)
 const qualLocal = pegarEntrada.question('DE qual local?').toLocaleUpperCase()
 console.log('essas são nossas alunas desse local:')
 function local (estudantes){
   return estudantes.local === qualLocal
 }
  const estudantesEncontradas = estudantes.filter(local)
  console.table(estudantesEncontradas)

}