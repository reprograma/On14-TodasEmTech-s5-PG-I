console.log("--------------------------------------");
console.log("     Projeto            ");
console.log("             Tassila Bomfim         ");
console.log("--------------------------------------");

console.log("--------------------------------------");
console.log("  LIVRARIA            ");
console.log("          By:           ");
console.log("             Letícia Desiderio         ");
console.log("--------------------------------------");
function breakLine() {
  console.log("\n");
}

breakLine();
//vamos instanciar, o nosso banco de dados
console.log(`Todos os livros disponíveis em nossa biblioteca:`);

const books = require("./database");
console.table(books);

const insertInfo = require("readline-sync");
breakLine();
const searchBooks = insertInfo
  .question("Gostaria de buscar livros por categoria? [Sim/Nao] \n")
  .toLocaleUpperCase();

function LIST() {
  console.log("Veja os livros disponíveis em nossa biblioteca:");
  books.sort((page, p) => page.paginas - p.paginas);
  console.table(books);
}

if (searchBooks === "SIM") {
  breakLine();
  console.log(
    "Temos estas categorias, por favor, definam: Romance, Aventura, Fantasia ou Literatura."
  );

  const searchCategory = insertInfo
    .question("Informem uma das categorias acima: \n")
    .toLocaleUpperCase();
  breakLine();
  console.log("Essas são as categorias de " + searchCategory + ":");

  browseCategory = (books) => books.categoria === searchCategory;

  const categoryResult = books.filter(browseCategory);
  console.table(categoryResult);
  breakLine();
} else {
  breakLine();
  LIST();
}

const getBooks = insertInfo
  .question("Gostaria de continuar buscando livros? [Sim/Nao] \n")
  .toLocaleUpperCase();

if (getBooks === "SIM") {
  const recommended = insertInfo
    .question(
      "Gostaria de ver os livros que sao recomendados e que foram lidos? [Sim/Nao] \n"
    )
    .toLocaleUpperCase();
  breakLine();
  if (recommended === "SIM") {
    console.log(`Estes sao os livros recomendados & lidos:`);

    const search = (books) =>
      books.recomenda === "TRUE" && books.leu === "TRUE";

    const foundBooks = books.filter(search);
    console.table(foundBooks);
    breakLine();
  } else {
    breakLine();
    LIST();
  }
} else {
  breakLine();
  LIST();
}
const wishL = insertInfo
  .question("Gostaria de continuar? [Sim/Nao] \n")
  .toLocaleUpperCase();
breakLine();
if (wishL === "SIM") {
  const wishList = insertInfo
    .question("Gostaria de ver minha lista de desejo? [Sim/Nao] \n")
    .toLocaleUpperCase();
  if (wishList === "SIM") {
    breakLine();
    console.log(`Estes sao os livros da minha lista de desejo:`);

    function list(books) {
      return books.leu === "FALSE";
    }
    const listW = books.filter(list);
    console.table(listW);
    breakLine();
  } else {
    breakLine();
    LIST();
  }
} else {
  breakLine();
  LIST();
}
