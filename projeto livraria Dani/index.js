console.table('--------------------------------------')
console.table('     Projeto  livraria          ')
console.table('      Daniele Vilares         ')
console.table('--------------------------------------')



const livros = require('./database')
console.table(livros);

const pegarEntrada = require('readline-sync')

const livroCategoria = pegarEntrada.question( 'Deseja filtrar por categoria  ? S/N ' ).toLocaleUpperCase()

console.table(livroCategoria);

if (livroCategoria === 'S' ) {

    console.table('romance, estrategia , religioso , auto-ajuda , aventura , infantil :' )
    const qualCategoria = pegarEntrada.question( 'Qual a categoria deseja ? ').toLocaleLowerCase( )

    function nomeCategoria( livros ) {
        return livros.categoria === qualCategoria
        
    }
     const categoriaEscolhida = livros.filter( nomeCategoria  )
     console.table(categoriaEscolhida);

}
else if  (livroCategoria === 'N' ){

    livros.sort((a,b) => a.paginas - b.paginas)
    console.table(livros); 
}

const recomendacao = pegarEntrada.question('Posso te recomendar um  livro ? (S/N):' ).toLocaleUpperCase( );


if (recomendacao === 'S'){

    console.log( 'Segue lista de recomendação :');

    function listaRecomendacao(livros) {
        return livros.recomenda == true
    }

    const livroRecomendado = livros.filter(listaRecomendacao);
    console.table(livroRecomendado)
}
else{
}

const recomendalistadesejo = pegarEntrada.question('Gostaria de acessar nossa lista de desejos ? (S/N):' ).toLocaleUpperCase( );

if (recomendalistadesejo === 'S'){

    console.log( 'Segue nossa lista dos livros desejaveis :');

    function listalivros(livros) {
        return livros.leu == false
    }

    const livroRecomendado1 = livros.filter(listalivros);
    console.table(livroRecomendado1)
}
else if  (recomendalistadesejo === 'N' ){

    livros.sort((a,b) => a.paginas - b.paginas)
    console.table(livros);
}


console.table('--------------------------------------')
console.table('     Obrigado pela sua visita. ')
console.table('      Volte sempre que desejar.        ')
console.table('--------------------------------------')


