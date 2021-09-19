console.log('--------------------------------------')
console.log('     Projeto - Sistema de Livros      ')
console.log('--------------------------------------')
console.log('             Janaina Lopes            ')
console.log('--------------------------------------')

// //vamos instanciar, o nosso banco de dados
// // // - Caso a pessoa usuária não escolha uma forma de busca, deverá mostrar todos os livros cadastrados, ordenados de forma crescente por quantidade de páginas.
// // // ```
// // // O comportamento esperado deve ser o pedido da entrada e a impressão das tabelas buscadas, conforme instrução acima.

// //1 - importar database
const livros = require('./database')

// // //ordenar pelo nome
livros.sort((a, b) => a.paginas - b.paginas)
console.table(livros);

// //pegar entradas

const pegarEntrada = require('readline-sync')

// // // 3) No arquivo index.js desenvolva sua lógica para o comportamento abaixo: 
// // //   - deverá ser possível buscar livros pela categoria

const buscarLivrosPorCategoria = pegarEntrada.question('Deseja buscar um livro pela categoria?(S/N)').toLocaleUpperCase()
console.log(buscarLivrosPorCategoria)

if (buscarLivrosPorCategoria === 'S'){
    console.log('As categorias existentes no nosso acervo são autoajuda, religioso, técnico, biografia, romance.')
    //filtrar por categoria
    const qualCategoria = pegarEntrada.question('Qual categoria deseja encontrar?')
    console.log('Esses são os livros do acervo nessa categoria.')

    function categoria(livros) {
        return livros.categoria === qualCategoria
    }

    const livrosEncontrados = livros.filter(categoria)
    console.table(livrosEncontrados)

// caso não queira filtrar por categoria, vamos sugerir livros

}
else if(buscarLivrosPorCategoria === 'N'){
        console.log('Não tem uma categoria específica? \nNão se preocupe... Temos recomendações para você!\n')
        //filtrar por categoria
        const qualRecomendacao = pegarEntrada.question('Deseja saber quais livros recomendamos?(S/N)').toLocaleUpperCase()
        console.log(qualRecomendacao)

        if(qualRecomendacao === 'S'){
            console.log('Esses são nossos livros recomendados.')
        
            function recomenda(livros) {
                return livros.recomenda === true
            }

            const livrosRecomendados = livros.filter(recomenda)
            console.table(livrosRecomendados)
        }else{
            console.log('Todos os nossos títulos estão aqui.\nObrigada pela sua visita!\nEsperamos ter contribuído com sua leitura! ;-)\n')
            console.table(livros)
        }
}
//   - Minha lista de desejo:
//     Deverá listar livros que ainda não foram lidos 
console.log('Aproveite e veja nossa lista de desejos para próximas leituras:')
const desejos = pegarEntrada.question('Deseja ver nossa lista de desejos?(S/N)').toLocaleUpperCase()
console.log(desejos)

if(desejos==='S'){
    console.log('Lista de Desejos')

    function leu(livros) {
        return livros.leu === false
    }

    const listaDeDesejos = livros.filter(leu)
    console.table(listaDeDesejos)

} else{
    console.log('Tudo bem... Esperamos que retorne em breve!')
}






