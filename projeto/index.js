console .log ( '****************************************************************************' ) ;
console.log("                                      Projeto                                    ");
console.log("                                   Estefanya Alves                               ");
console.log("                                                                                 ");
console.log("                                welcome to the bookcase                          ");
console .log ('*****************************************************************************' ) ;


//vamos instanciar, o nosso banco de dados   // Uso do FILLTER / IF e ELSE

const book = require ("./database");



// Ordenar por categoria

book.sort((a, b) => a.page - b.page)
console.table(book);


// Consultar livro por categoria  -- Entrada de livros -- Você deseja uma recomendação

const entryBooks = require("readline-sync")

const bookCategory = entryBooks.question("Do you want a book recommendation? (S/N)  ").toLocaleUpperCase();

// Aplicação de uso do IF - LivroCategoria

if (bookCategory === "S") {
  
  //Qual a categoria que deseja ler?   

  console.log("which category do you want to read?");

  //const Qual categoria = entradaLivros  // Escolha uma das opções: Autoajuda, Tecnologia ou Psicologia
  //Imprimir as categorias de livro disponível e função devolve a escolha do usuário

  const whichcategory = entryBooks.question("Choose from the options: \n- Self help \n- Technology \n -Psychology. \n\t");
  console.table(whichcategory);

  function category(book) {
    return book.category === whichcategory;
  }
  const bookFound = book.filter(category);
  console.table(bookFound);

} 
//Vamos recomendar livros

const bookrecommends = entryBooks.question("Would you like more reading recommendations? ").toLocaleUpperCase();
if (bookrecommends === "S") {
  function recommends (book) {
    return book.recommends && book.read === true;
    
}
// Imprime livros recomendados
console.log( 'Follow the top recommended books. ')
const bookFound = book.filter(recommends);
console.table(bookFound);

}

else {
  //Ok, Ficamos felizes com sua visita - Volte sempre
  console.log("Ok, We are happy with your visit - Check back often");
  
}


console.log("                                                                                 "   )
console.log("                                              Boa leitura!                       "   )





console . log ('*************************************************************************************************');
console . log ('                                 Volte sempre a nossa estante de livros                      ');
console . log ('                                             {reprograma}                                    ');
console . log ('*************************************************************************************************');
