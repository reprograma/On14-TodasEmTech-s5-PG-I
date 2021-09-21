console.log('-------------------------------------------------------')
console.log('     Bem-vindo ao univero literario de             ')
console.log('                                        Ananda <3   ')
console.log('----------------------------------------------------')

const livros = require('./database')
const pegarEntrada = require('readline-sync')
console.log('Seja bem-vindo a minha biblioteca. Fique a vontade, pegue um café e me diga o que deseja ver por aqui.')
const escolherPorGenero = pegarEntrada.question ('Gostaria de ver os livros que recomendo ou os livros que pretendo ler? Por favor, digite apenas "recomenda" ou "pretende ler". ').toLocaleUpperCase()
console.log(escolherPorGenero)

if (escolherPorGenero == "RECOMENDA"){
    console.log('Ok, tenho os seguintes generos para recomendar: Wuxia e Literatura Fantastica.')
    const escolherPorGenero = pegarEntrada.question ('Qual deles voce quer ler hoje? ').toLocaleUpperCase()
    console.log('Otima escolha! Esses sao os meus queridinhos, espero que goste<3 ')
    const genero = (livros) => livros.genero === escolherPorGenero
    const generoSelecionado = livros.filter(genero)
    console.table(generoSelecionado)

}else if (escolherPorGenero == 'PRETENDE LER') {
    const naoLeu = (livros) => livros.lido != true
    console.table(livros.filter(naoLeu))

}else {
    livros.sort((a, b) => a.publicacao - b.publicacao)
    console.log("Esses são os livros que tenho na minha biblioteca:")
    console.table(livros)
}