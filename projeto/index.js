console.log('--------------------------------------')
console.log('     Projeto Livraria           ')
console.log('             Kamila Lima         ')
console.log('--------------------------------------')


const livros = require('./database')
//console.table(livros);
//console.log(livros);

//livros.sort((a,b) => a.paginas - b.paginas)
//vamos instanciar, o nosso banco de dados

 const pegarEntrada = require('readline-sync')

const verLivrosPorCategoria = pegarEntrada.question('Você deseja encontrar um livro por categoria?(S/N) ').toLocaleUpperCase() 
console.log(verLivrosPorCategoria);

function categoria(parametro1) {
    //livros.categoria = parametro1; 
    //console.log(livros);   
  
    //return livros ;
    return livros.categoria = parametro1; 
}    

if (verLivrosPorCategoria === 'S') {
    console.log('Temos livros de Autoajuda, Ficção, Literatura, Romance e Suspense.');
    const qualCategoria = pegarEntrada.question('De qual categoria você quer encontrar?').toLocaleUpperCase() 
    console.log('Esses são os livros desta categoria: ');
    //console.log(qualCategoria);
 //categoria(qualCategoria)
  const livrosEncontrados = livros.filter(categoria(qualCategoria));
//
//console.table(livrosEncontrados);

}
//else{


//}
