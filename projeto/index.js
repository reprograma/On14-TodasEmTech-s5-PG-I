const livros = require('./database.js')

console.log('--------------------------------------')
console.log('     Projeto - Talita Rosa =)            ')
console.log('--------------------------------------')

// Função para obter os dados atualizados do database
function obterDados() {
    const livros = require('./database.js')
}

function menu() {
    console.log('Bem vindo ao catalogo de Livros de Talita Mistica (=')
    console.log('')
    console.log('Escolha alguma das opções abaixo, informe apenas o número da opção:')
    console.log('')
    console.log('1. Listar os books cadastrados')
    console.log('2. Ordenar pelo número de páginas')
    console.log('3. Buscar por categoria')
    console.log('4. books recomendados')
    console.log('5. Lista de desejos')
    console.log('6. Encerrar')
    console.log('Obrigada por sua visita <3')

}


function obterEntrada() {
    const pegarEntrada = require('readline-sync')
    const entrada = pegarEntrada.question('Digite um opcao: ').toLocaleUpperCase()
    
    console.log('Você escolheu a opção: ', entrada)
    return entrada
}

//Ordenando livros pelo número de páginas em ordem crescente
function ordenarPorPagina(){
    let livros = obterDados()
    livros.sort( (a, b) => a.páginas - b.páginas )
    console.table(livros)
}

function buscarCategoria() {
    let categoria = obterDados().filter( livros => livros.categoria === qualCategoria ) //TODO RECEBER ENTRADA CATEGORIA
    console.log('Esses são nossos títulos dessa categoria')
    console.table(categoria)   
}

function listaRecomendados() {
    let livrosRecomendados = obterDados().filter(livros => livros.recomenda === 'sim')
    console.table(livrosRecomendados) 
}


function naoLidos() {
    const livrosDesejados = obterDados().filter(livros => livros.leu ==='não')
    console.table(livrosDesejados)  
}
    
