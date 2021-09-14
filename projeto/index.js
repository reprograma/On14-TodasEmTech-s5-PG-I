const UTF8 = require('utf-8');
String.fromCharCode(UTF8.getCharCode([0xC3, 0xA9]));
/*
*Projeto criado por Rafaela Siglyane Dartora
*Professora/orientadora: Tasia Bomfim
*/

console.log('--------------------------------------')
console.log('     Projeto                          ')
console.log('             Rafaela Siglyane         ')
console.log('--------------------------------------')


//vamos instanciar, o nosso banco de dados
const livros = require('./database')
const menuInput = require('readline-sync');

//Chama o Menu 
menu()

//Função responsavél por chamar o Menu
function menu() {
    
    console.log('------------------------------------')
    console.log('Bem vindo a Livraria {reprograma}')
    console.log('------------------------------------')
    console.log('[1] - Listar por categoria')
    console.log('[2] - Listar livros lidos')
    console.log('[3] - Lista de desejo')
    console.log('[4] - Listar recomendados')
    console.log('[5] - Listar todos os livros')
    console.log('[0] - Sair do menu')
    const menuSelection = menuInput.questionInt('Digite o menu que deseja visitar: ')
    switch (menuSelection) {
        case 0:
            break;
        case 1: 
            categorySelection()
            returnMenu()       
            break;
        case 2:
            booksRead()
            returnMenu()
            break;
        case 3:
            booksNotRead()
            returnMenu()
            break;
        case 4:
            booksRecommended()
            returnMenu()
            break;
        case 5: 
            console.table(livros)
            returnMenu()
            break;
        default:
            console.log('------------------------------')
            console.log('Você digitou uma opção invalida, seleciona uma das opcoes abaixo:')
            menu()
            break;
    }
}

// Seleciona uma categoria conforme opções na base de dados
function categorySelection() {
    let optionsCategory = livros.map(livro => livro.categoria)
    console.log(optionsCategory.toString())
    const category = menuInput.question('Digite a categoria selecionada: ')
    console.table(livros.filter(livros => livros.categoria == category))
}

//Mostra todos os livros que já foram lidos
function booksRead() {
    let booksRead = livros.filter(livros => livros.leu == true)
    console.table(booksRead)
}

//Mostra os livros na lista de desejo
function booksNotRead() {
    let booksNotRead = livros.filter(livros => livros.leu == false)
    console.table(booksNotRead)
}

//Lista livros recomendados
function booksRecommended() {
    let booksNotRead = livros.filter(livros => livros.recomenda == true)
    console.table(booksNotRead)
}

//Retornar ao menu
function returnMenu() {
    const returnToMenu = menuInput.question('Deseja voltar ao menu? (S/N) ').toLocaleUpperCase();
    if(returnToMenu == 'S') {
        menu()
    }
}