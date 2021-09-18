

console.log(       'Discover GeloTeca books'              )

console.log('     Jeniffer Alves First Project     '    )



//instacia banco de dados
const books = require('./database')
console.table(books);

//importando readline
const entrada = require('readline-sync')

const consultarLivro = entrada.question("Would you like to get a book? (Y/N)")
  .toLocaleUpperCase();

  //se a resposta for sim
if (consultarLivro === "Y") {
  console.table(books);
  const filterTableCategory = entrada.question(
      "Which genre do you want to choose?  \n* drama \n* romance\n Categoria: "
    ) .toLocaleUpperCase();
    
  const category = (books) =>
    books.category.toLocaleUpperCase() === filterTableCategory;
  const findCategory = books.filter(category);
  console.table(findCategory);
 }

constconsultarLivro = entrada.question("Want to Consult the Books Again?(Y/N)")
  .toLocaleUpperCase();
  
  const verfavorite = entrada.question('Do you want to know my favorite book? (Y/N)')
  .toLocaleUpperCase()
if(verfavorite == 'Y'){
  console.log('This is my favorite book genre:')
  function favorite (books){
    return books.favorite == true
  } 
  console.table(books.filter(favorite))
  console.log ('Thanks for visiting my GeloTeca')
}else{
   console.log('What a pity! We have a lot of cool books. Try again.')
}