console.log("--------------------------------------");
console.log("     Projeto            ");
console.log("             Tassila Bomfim         ");
console.log("--------------------------------------");

//vamos instanciar o nosso banco de dados
const livros = require("./database"); //como se dissesse: dentro da minha aba você vai utilizar o database

//console.table(livros);
//pegar entrada das pessoas no terminal, importar
const buscarEntrada = require("readline-sync");
//fazer pergunta para responder no terminal, usando o question(palavra reservada)
const livrosPorCategoria = buscarEntrada
  .question("Voce deseja buscar algum livro para ler(S/N)?")
  .toLocaleUpperCase();

console.log(livrosPorCategoria);
if (livrosPorCategoria === "S") {
  console.log(
    "Ótimo, temos várias categorias: romance, não ficçao, humor, ficcao e drama"
  );

  const categoria = buscarEntrada //vai buscar lá para colocar no node a pergunta,a través da palavra reservada
    .question("Qual dessas categorias voce deseja?")
    .toLocaleLowerCase();

  /*function tipos(livros) {
    //essa função usa livros como parâmetro, que é um array
    return livros.categoria === categoria;
  }*/
  const tipos = (livros) => livros.categoria === categoria;

  const biblioteca = livros.filter(tipos); //criada a constante para ter dados, usa o array livros e vai filtrar dentro de
  //livros os tipos, separando só a categoria. Neste caso, tipos é uma função callback
  console.table(biblioteca);
} else {
  return console.log(
    "Ok,fica para a proxima e não deixe de ter o habito da leitura =)"
  );
}

const recomenda = buscarEntrada
  .question("Gostaria que eu te recomende um livro(S/N)?")
  .toLocaleLowerCase();

if (recomenda === "s") {
  console.log("São estes os livros recomendados");

  /*function valeApenaLer(livros) {
    return livros.recomenda === "sim";
  }*/

  const valeApenaLer = (livros) => livros.recomenda === "sim";
  const recomendados = livros.filter(valeApenaLer);
  console.table(recomendados);
} else {
  console.log("Que triste, mas vale à pena dar uma olhadinha");
}

const listaDesejo = buscarEntrada
  .question("Gostaria de ver minha lista de livros que quero ler?(S/N)?")
  .toLocaleLowerCase();

if (listaDesejo === "s") {
  console.log("São estes os livros que quero");

  /*function wishList(livros) {
    return livros.leu === false;
  }*/
  const wishList = (livros) => livros.leu === false; //lista de desejos
  const queroLer = livros.filter(wishList);
  console.table(queroLer);
} else {
  console.log("Poxa, deixa para depois então. =)");
}
