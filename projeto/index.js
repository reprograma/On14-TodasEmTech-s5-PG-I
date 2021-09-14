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
      "Qual categoria deseja usar como filtro? \n* Ficcção \n* Espiritita\n * Espiritualidade \n * UFOS\n Opção:"
    )
    .toLocaleUpperCase();

  function category(books) {
    return books.categoria.toLocaleUpperCase() === filterTableCategory;
  }
  const findCategory = books.filter(category);
  console.table(findCategory);
}
