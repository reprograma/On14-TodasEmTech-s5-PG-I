
/*
3) No arquivo index.js desenvolva sua lógica para o comportamento abaixo: 
- deverá ser possível buscar livros pela categoria
- Me recomenda livros pra ler? 
  Deverá listar livros que já foram lidos e que são recomendados 
- Minha lista de desejo:
  Deverá listar livros que ainda não foram lidos 

- Caso a pessoa usuária não escolha uma forma de busca, deverá mostrar todos os livros cadastrados, ordenados de forma crescente por quantidade de páginas.
*/

//vamos instanciar, o nosso banco de dados




const pegarEntrada = require('readline-sync')

const bemVindo = pegarEntrada.question('Bem vindo ao nosso site! Aperte "Enter" para vizualizar o catalogo :))').toLocaleUpperCase()
console.log(bemVindo)

const livros = require('./database')
console.table(livros);

livros.sort((a, b) => a.paginas - b.paginas)
console.table(livros);

const buscarPorCategora = pegarEntrada.question('Deseja escolher um livro por categoria?(S/N)').toLocaleUpperCase()
console.log(buscarPorCategora)


if (buscarPorCategora === 'S') {

    console.log('Certo! Temos livros das seguintes categorias: Romance Policial, Fantasia, Biografia, Fantasia Científica, Sociedade e Tecnologia')

    const qualCategoria = pegarEntrada.question('Qual categoria voce deseja?').toLocaleLowerCase()
    console.log('Essas são as opções da categoria selecionada:')

function genero (livros) {
    return livros.genero === qualCategoria 
    }
    
    const livrosEncontrados =livros.filter (genero)
    console.table(livrosEncontrados);
    
    }else {
        console.log('Esses são todos os livros encontrados na nossa biblioteca! Boa leitura! :)')
        console.table(livros);
    }

    const enviarRecomendacao = pegarEntrada.question('Deseja recomendacoes de livros?(S/N)').toLocaleUpperCase()
    console.log(enviarRecomendacao)

    if (enviarRecomendacao === 'S') {

    console.log('Certo! Essas sao algumas recomedaçoes da nossa biblioteca! :)')

    
function recomenda (livros) {
    return livros.recomenda === true 
    }
  const livrosRecomendados =livros.filter (recomenda)
  console.table(livrosRecomendados);
    
    }else {
        console.log('Esses são todos os livros encontrados na nossa biblioteca! Boa leitura! :)')
        console.table(livros);
    }





    const listaDeDesejos = pegarEntrada.question('Deseja criar uma lista de desejos com os livros nao lidos?(S/N)').toLocaleUpperCase()
console.log(listaDeDesejos)


if (listaDeDesejos === 'S') {

    console.log('Certo! Segue sua lista de desejos para futuras leituras!:)')

    
function leu (livros) {
    return livros.leu === false 
    }
  const livrosDesejados =livros.filter (leu)
  console.table(livrosDesejados);
    
    }else {
        console.log('Esses são todos os livros encontrados na nossa biblioteca! Boa leitura! :)')
        console.table(livros);
    }