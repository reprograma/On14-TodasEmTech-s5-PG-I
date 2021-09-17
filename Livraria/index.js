console.log('Seja bem vinda a Livraria dos melhores livros brasileiros!')


console.log('VEJA ABAIXO A LISTA DE LIVROS DISPONÍVEIS NA NOSSA LIVRARIA: ')

console.log("--------------------------------------");
console.log("                 Projeto              ");
console.log("                  MABIÁ               ");
console.log("--------------------------------------");

//instacia banco de dados
const livros = require('./database')
console.table(livros);

//importando readline
const entrada = require('readline-sync')

const consultarLivro = entrada.question("Deseja consultar os livros da minha lista? (S/N)")
  .toLocaleUpperCase();

  //se a resposta for sim
if (consultarLivro === "S") {
  console.table(livros);
  const filterTableCategory = entrada.question(
      "Qual categoria deseja escolher? \n* terror \n* romance\n * conto \n * folclore\n Categoria: "
    )
    .toLocaleUpperCase();

    //
  const category = (livros) =>
    livros.categoria.toLocaleUpperCase() === filterTableCategory;
  const findCategory = livros.filter(category);
  console.table(findCategory);
}

const recomendouLivros = entrada.question("Deseja ver apenas livros recomendados? (S/N)")
  .toLocaleUpperCase();

if (recomendouLivros === "S") {
  const recomendouLivros = (livros) => livros.recomenda === true;
  const findrecomendouLivros = livros.filter(recomendouLivros);
  console.table(findrecomendouLivros);
}
const wishlivros = entrada.question("Deseja ver minha lista de desejos? (S/N)")
  .toLocaleUpperCase();

if (wishlivros === "S") {
  const wish = (livros) => livros.leu === false;
  const findWish = livros.filter(wish);
  console.table(findWish);
} else {
  livros.sort((a, b) => a.paginas - b.paginas);

  console.log(
    "Esses são todos os livros da lista ordenados por numeros de paginas."
  );
  console.table(livros);
}