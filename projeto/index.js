const livros = require('./database.js')

console.log('--------------------------------------')
console.log('     Projeto - Talita Rosa =)            ')
console.log('--------------------------------------')
console.log('Bem vindo ao catalogo de Livros de Rose Mistic (=')

menu()

// Função para obter os dados atualizados do database
function obterDados() {
    const livros = require('./database.js')
    return livros
}

function menu() {
    
    console.log('')
    console.log('Escolha alguma das opções abaixo, informe apenas o número da opção:')
    console.log('')
    console.log('1. Listar os livros cadastrados')
    console.log('2. Ordenar pelo número de páginas')
    console.log('3. Buscar por categoria')
    console.log('4. livros recomendados')
    console.log('5. Lista de desejos')
    console.log('6. Encerrar')
    
    
    switch (obterEntrada()) {
        case'1':
            listarLivros()
            menu()
            break
        case '2':
            ordenarPorPagina()
            menu()
            break
        case '3':
            buscarPorCategoria()
            menu()
            break
        case '4':
            listaRecomendados()
            menu()
            break
        case '5':
            naoLidos()
            menu()
            break
        case '6':    
            console.log('Obrigada por sua visita <3')
            break
        default:
            console.log('Por favor, insira uma opção válida')
            menu()
            break;
        }
}    

function listarLivros(){
    let livros = obterDados()
    console.table(livros)
}

function obterEntrada() {
    const pegarEntrada = require('readline-sync')
    const entrada = pegarEntrada.question('Digite o numero da opcao desejada: ').toLocaleUpperCase()
    
    console.log('Você escolheu a opção: ', entrada)
    return entrada
}

//Ordenando livros pelo número de páginas em ordem crescente
function ordenarPorPagina(){
    let livros = obterDados()
    livros.sort( (a, b) => a.páginas - b.páginas )
    console.table(livros)
}

function buscarPorCategoria() {
    let categorias = obterCategorias()
    console.table(categorias)
    let entrada = obterEntrada()
    
    let listaCategoria = obterDados().filter( livros => livros.categoria === categorias[entrada] ) //TODO RECEBER ENTRADA CATEGORIA
    console.log('Esses são nossos títulos dessa categoria')
    console.table(listaCategoria)
}

function obterCategorias() {
    let dados = obterDados()
    let listagem = []
    for (let indice in dados) {
        let categoria = dados[indice].categoria

        if(!listagem.includes(categoria)){
            listagem.push(categoria)
        }
    }
    
    return listagem
}

function listaRecomendados() {
    let livrosRecomendados = obterDados().filter(livros => livros.recomenda === 'sim')
    console.table(livrosRecomendados) 
}

function naoLidos() {
    const livrosDesejados = obterDados().filter(livros => livros.leu ==='não')
    console.table(livrosDesejados)  
}
    
