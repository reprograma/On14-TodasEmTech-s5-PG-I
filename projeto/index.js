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

}

//Ordenando livros pelo número de páginas em ordem crescente
livros.sort((a, b) => a.páginas - b.páginas);
console.table(livros)

function obterEntrada() {
    const pegarEntrada = require('readline-sync')
    //Pegando entrada de pessoas usuárias no terminal
    const entrada = pegarEntrada.question('Digite um opcao: ').toLocaleUpperCase()
    console.log('Você escolheu a opção: ', entrada)
}

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
    console.log('Esses são todos os nossos livros =)')
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