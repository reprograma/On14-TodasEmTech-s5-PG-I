console.log('--------------------------------------')
console.log('     Projeto - Talita Rosa =)            ')
console.log('--------------------------------------')


//vamos instanciar, o nosso banco de dados
//Importando dados do database.js
const livros = require('./database.js')

console.log('Bem vindo ao catalogo de Livros de Talita Mistica (=')
//Ordenando livros pelo número de páginas em ordem crescente
livros.sort((a, b) => a.páginas - b.páginas);
console.table(livros)

//Pegando entrada de pessoas usuárias no terminal
const pegarEntrada = require('readline-sync')
const verLivrosPorCategoria = pegarEntrada.question('Voce deseja encontrar um livro por categoria?(S/N)?').toLocaleUpperCase()
//const verLivrosPorCategoria = 'S'

if (verLivrosPorCategoria === 'S'){
    console.log('Temos livros nas categorias de: Educação, Filosofia, História, Literatura, e Tecnologia')
    const qualCategoria = pegarEntrada.question('Qual categoria voce deseja encontrar?').toLocaleUpperCase()
    
    //const qualCategoria = 'História';
    function categoria(livros) {
        return livros.categoria.toLocaleUpperCase() === qualCategoria
    }

    const livrosEncontrados = livros.filter(categoria)
    console.log('Esses são nossos títulos dessa categoria')
    console.table(livrosEncontrados)
    
}  else {
    console.log('Esses são todos os livros')
    console.table(livros)
}

const recomendado = pegarEntrada.question('Voce quer acessar nossa lista de titulos recomendados?(S/N)?').toLocaleUpperCase()

if(recomendado === 'S'){
    function recomendaLivros(livros) {
        return livros.recomenda === 'sim' 
    } 

    const livrosRecomendados = livros.filter(recomendaLivros)
    console.table(livrosRecomendados)

}else {
    console.table(livros)
}

const listaDeDesejos = pegarEntrada.question('Voce quer ver os livros que desejo ler?(S/N)?').toLocaleUpperCase()

if(listaDeDesejos === 'S'){
    function naoLidos(livros) {
       return livros.leu ==='não' 
    }

    const livrosDesejados = livros.filter(naoLidos)
    console.table(livrosDesejados)

} else {
    console.table(livros)

}
console.log('Obrigada por sua visita <3')