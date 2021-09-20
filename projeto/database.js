const livros = [

  {
    nome: 'A paciente silênciosa',
    categoria: 'SUSPENSE',
    paginas: 364, 
    recomenda: true,
    leu: true,
  },
  {
    nome: 'Morte no Nilo',
    categoria: 'SUSPENSE',
    paginas: 320, 
    recomenda: true,
    leu: true,
  },
  {
    nome: 'A troca',
    categoria: 'ROMANCE',
    paginas: 230, 
    recomenda: true,
    leu: true,
  },
  {
    nome: 'A revolução dos bichos',
    categoria: 'FICÇÃO',
    paginas: 152, 
    recomenda: false,
    leu: false,
  },
  {
    nome: 'Torto arado',
    categoria: 'LITERATURA',
    paginas: 264, 
    recomenda: true,
    leu: true,
  },
  {
    nome: 'As coisas que você só vê quando desacelera',
    categoria: 'AUTOAJUDA',
    paginas: 256, 
    recomenda: true,
    leu: true,
  },
  {
    nome: 'Mulheres que correm com os lobos',
    categoria: 'PSICANALISE',
    paginas: 576, 
    recomenda: true,
    leu: true,    },
  {
    nome: 'A ciranda das mulheres sábias',
    categoria: 'LITERATURA',
    paginas: 128, 
    recomenda: false,
    leu: false,    }

]


//console.log(livros[2].categoria);
//console.log(livros.sort(livros.categoria))
console.table(livros);

livros.sort((a,b) => a.paginas - b.paginas)

console.table(livros);

const pegarEntrada = require('readline-sync')

const verLivrosPorCategoria = pegarEntrada.question('Você deseja encontrar um livro por categoria?(S/N) ').toLocaleUpperCase() 
console.log(verLivrosPorCategoria);


if (verLivrosPorCategoria === 'S') {
    console.log('Temos livros de Autoajuda, Ficção, Literatura, Romance e Suspense.');
    const qualCategoria = pegarEntrada.question('De qual categoria você quer encontrar?').toLocaleUpperCase() 
    
    function categoria(livros){
      return livros.categoria === qualCategoria
    }
    console.log('Esses são os livros desta categoria: ');
       
  const livrosEncontrados = livros.filter(categoria);
//
console.table(livrosEncontrados);

}

//---------------------------------------------------------------

const qualRecomenda = pegarEntrada.question('Gostaria de recomendação de livros?(S/N)').toLocaleUpperCase()
console.log(qualRecomenda);

if (qualRecomenda === 'S') {

  function recomenda(livros) {
    return livros.recomenda  === true;  
    
  }

  console.log('Esses são os livros que recomendo:');
  const livrosRecomendados = livros.filter(recomenda)

  console.table(livrosRecomendados)
  

}

const listaDeDesejo = 'Esses estão na minha lista de desejo: ';
console.log(listaDeDesejo);


  function lista(livros) {
    return livros.leu === false
  }

const livrosQueDesejo = livros.filter(lista);
console.table(livrosQueDesejo)

console.log('Obrigada pela visita! *-* ');



