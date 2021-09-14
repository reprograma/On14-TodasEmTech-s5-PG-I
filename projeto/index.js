console.log("--------------------------------------");
console.log("                 Projeto              ");
console.log("             Darielly Santos        ");
console.log("--------------------------------------");

const books = require("./database.js");
const enterInfo = require("readline-sync");

const consultBooksFromTheList = enterInfo
  .question("Deseja consultar os livros da minha lista? (Y/N)")
  .toLocaleUpperCase();

if (consultBooksFromTheList === "Y") {
  console.table(books);
  const filterTableCategory = enterInfo
    .question(
      "Qual categoria deseja usar como filtro? \n* Ficcao \n* Espiritita\n * Espiritualidade \n * UFOS\n Opção:"
    )
    .toLocaleUpperCase();

  function category(books) {
    return books.categoria.toLocaleUpperCase() === filterTableCategory;
  }
  const findCategory = books.filter(category);
  console.table(findCategory);
}
const recommendsBooks = enterInfo
  .question("Deseja ver só os que recomendo a leitura? (Y/N)")
  .toLocaleUpperCase();

if (recommendsBooks === "Y") {
  function recommends(books) {
    return books.recomenda === true;
  }
  const findRecommends = books.filter(recommends);
  console.table(findRecommends);
}
const wishBooks = enterInfo
  .question("Deseja ver minha lista de desejos? (Y/N)")
  .toLocaleUpperCase();

if (wishBooks === "Y") {
  function wish(books) {
    return books.leu === false;
  }
  const findWish = books.filter(wish);
  console.table(findWish);
} else {
  books.sort((a, b) => a.paginas - b.paginas);

  console.log(
    "Esses são todos os livros da lista ordenados por numeros de paginas."
  );
  console.table(books);
}
