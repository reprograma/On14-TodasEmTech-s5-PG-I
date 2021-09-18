console.log('--------------------------------------')
console.log('     Projeto Sistema de Livros        ')
console.log('             Jaciara Feio             ')
console.log('---Turma 14- REPROGRAMA -Back end-----')

//vamos instanciar, o nosso banco de dados
const livros = require('./database')
//console.table(livros);

//ordenando por número de páginas de forma crescente
livros.sort((a, b) => a.páginas - b.páginas)
console.table(livros);

//como pegar entradas de pessoas usuárias no terminal
const pegarEntrada = require('readline-sync')

//buscar livros pela categoria
const categoria = pegarEntrada.question('Você deseja encontrar livros por categoria?(S/N)').toLocaleUpperCase()
console.log(categoria)

//verificando a partir da entrada

if (categoria === 'S'){
    console.log('As categorias de livros que possuímos são: Autoajuda, Comportamento Organizacional, Espiritualidade,\nInfantil, Romance e Suspense')
    
// caso haja escolha de categoria utilizar filtro
const qualCategoria = pegarEntrada.question('Qual categoria de livros deseja encontrar?').toLocaleUpperCase()
console.log('Categoria de livros desejada:')

function categoria(livros) {
    return livros.categoria === qualCategoria
 
}

const livrosCategoria = livros.filter(categoria)
console.table(livrosCategoria)

}else{

    console.log('Agradecemos pelo seu interesse em nossos livros.\nA seguir você encontrará todos os livros do acervo:')
    console.table(livros)


}

//recomendar livros para ler, listando os livros que foram lidos e recomendados 

const recomenda = pegarEntrada.question('Você deseja verificar se há livros recomendados para sua leitura?(S/N)').toLocaleUpperCase()
console.log(recomenda)

//verificando a partir da entrada

if (recomenda === 'S') {
    console.log('Os livros recomendados que possuímos são: ')

 
// caso haja escolha de recomendação utilizar filtro

function recomenda(livros) {
   return livros.recomenda === true
 
}


console.table(livros.filter(recomenda))


}else{

    console.log('Agradecemos pelo seu interesse em nossos livros.\nA seguir você encontrará todos os livros do acervo:')
    console.table(livros)

}

//recomendar livros que já foram lidos

const queEuLi = pegarEntrada.question('Você deseja verificar se há livros lidos?(S/N)').toLocaleUpperCase()
console.log(queEuLi)

//verificando a partir da entrada

if (queEuLi === 'S') {
    console.log('Os livros já lidos são: ')

 
// caso haja escolha de livros lidos utilizar filtro

function lido(livros) {
   return livros.lido === true
 
}


console.table(livros.filter(lido))


}else{

    console.log('Agradecemos pelo seu interesse em nossos livros.\nA seguir você encontrará todos os livros do acervo:')
    console.table(livros)

}

// verificar lista de desejo, deve listar livros que não foram lidos

const queNaoLi = pegarEntrada.question('Você deseja saber a nossa lista de desejo?(S/N)').toLocaleUpperCase()
console.log(queNaoLi)

//verificando a partir da entrada

if (queNaoLi === 'S') {
    console.log('Abaixo os livros que ainda não foram lidos: ')

 
// caso haja escolha de livros não lidos utilizar filtro

function lido(livros) {
   return livros.lido == false
 
}


console.table(livros.filter(lido))


}else{

    console.log('Agradecemos pelo seu interesse em nossos livros.\nA seguir você encontrará todos os livros do acervo:')
    console.table(livros)

}