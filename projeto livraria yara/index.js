console.log('   _/       Y      \_')
console.log('   // ~~ ~~ | ~~ ~  \\')
console.log('  // ~ ~ ~~ | ~~~ ~~ \\      ')
console.log(' //________.|.________\\     ')
console.log('`----------`-´---------´')
console.log(' My Little Library by Yara Viana ')

//extrair valores do banco de dados
const books = require("./database.js");
const userInfo = require("readline-sync");

//UI interação com o usuário
const consultBookstore = userInfo
  .question("Welcome to Yara's Little Library. Would you like book recommendations for you book club? (Y/N)")
  .toLocaleUpperCase();

//ordenando livros por gênero
if (consultBookstore === "Y") {
  console.table(books);
  const searchForGenre = userInfo.question("Which of the genres below would you like to consult?  \n* - fantasy \n* - magical realism \n * - classics \n").toLocaleUpperCase();

  const genres = (books) =>
    books.genre.toLocaleUpperCase() === searchForGenre;
  const findGenre = books.filter(genres);
  console.table(findGenre);
}
else
{
    console.log("OK! Come back whenever you need to.")

}
//exibe livros recomendados
const recommendedBooks = userInfo
  .question("Would you like book recommendations for you book club? (Y/N)")
  .toLocaleUpperCase();

if (recommendedBooks === "Y") {
  const recommends = (books) => books.recommended === true;
  const findBooks = books.filter(recommends);
  console.table(findBooks);
}
//exibe livros não lidos
const unreadBooks = userInfo
  .question("Want to check unread books? (Y/N)").toLocaleUpperCase();

if (unreadBooks === "Y") {
  const unread = (books) => books.read === false;
  const findBooks = books.filter(unread);
  console.table(findBooks);
} else { //livros ordenados por número de páginas de forma crescente
  books.sort((a, b) => a.pages - b.pages);

  console.log(
    "All books sorted by number of pages:"
  );
  console.table(books);
}