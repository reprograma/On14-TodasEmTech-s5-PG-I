console.log('----------------------------------------------------------------------------------------------------')
console.log('*                                                                                                  *')
console.log('----------------------------------------------------------------------------------------------------')
console.log('*                                        LIVRARIA                                                  *')
console.log('----------------------------------------------------------------------------------------------------')
console.log('*                                                                                                  *')
console.log('*--------------------------------------------------------------------------------------------------*')
console.log('')
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>CONHECIMENTO É PODER!<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<')
console.log('')


//vamos instanciar, o nosso banco de dados
const livros = require('./database');

livros.sort((a, b) => a.pages - b.pages)
console.table(livros);

const entrada = require('readline-sync');

const escolherCategoria = entrada.question('Gostaria de escolher os livros por categoria? (S/N): ').toLocaleUpperCase();

if(escolherCategoria === 'S'){
    console.table(livros);
    console.log('***************');
    console.log('*--CATEGORIA--*');
    console.log('***************');
    console.log('*  Autoajuda  *');
    console.log('*  Biografia  *');
    console.log('*    Ficção   *');
    console.log('*   Negócios  *');
    console.log('*  Tecnologia *');
    console.log('***************');
    
    const categoriaEscolhida = entrada.question('Digite a categoria desejada: ').toLocaleUpperCase;

    function category(livros){
        return livros.category === categoriaEscolhida;
    }
    const filtroCategoria = livros.filter(category);
    console.table(filtroCategoria);
    }else{
    console.log('Livros disponíveis!')
    console.table(livros)
}

console.log('**************************************');
console.log('*Obrigada por visitar nossa livraria!*');
console.log('*           Volte sempre!!!          *');
console.log('**************************************');
