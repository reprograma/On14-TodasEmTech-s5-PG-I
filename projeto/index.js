console.log('-----------------------------------------------------------------------------------')
console.log('                     Bem vindo ao meu arsenal de Mangás         ')
console.log('-----------------------------------------------------------------------------------')
console.log(' Aqui você encontra alguns gêneros diversificados: Ação, Aventura, Terror, Romance.')
console.log('-----------------------------------------------------------------------------------')


//vamos instanciar, o nosso banco de dados
const mangas = require('./database')
console.table(mangas);

//ordenando por número de volumes de forma crescente
mangas.sort((a, b) => a.volume - b.volume)
console.table(mangas);

//pegando entradas importando o readline-sync
const entry = require('readline-sync')

//agora será como fazer uma pergunta para responder no terminal 
const takeMangas = entry.question('Voce deseja ver os livros por uma categoria? (S/N) ').toLocaleUpperCase()
console.log(takeMangas);

//caso a verificaçao seja positiva
if(takeMangas === 'S') {
    console.log('Escolha entre: Ação, Aventura, Terror, Romance. Lembre-se de escrever sem acentos e ç, e tudo minúsculo!');

    //imprimir após a verificação
    const whichGenry = entry.question('Informe o genero que voce quer encontrar: ').toLocaleLowerCase()
    console.log('Esses são os mangás disponíveis pelo gênero escolhido:');

    function category(mangas) {
        return mangas.categoria === whichGenry
    }

    const findMangas = mangas.filter(category)
    console.table(findMangas);

    //vamos agorar recomendar mangás
    const recomendMangas = entry.question('Voce gostaria de ter a recomendacao de algum manga? (S/N): ').toLocaleUpperCase()
    console.log('Esses são os mangás que recomendamos:');

if(recomendMangas === 'S') {
    function recomendation(mangas) {
        return mangas.recomenda && mangas.leu === true
    }

    const findRecomend = mangas.filter(recomendation)
    console.table(findRecomend);
} else {
    console.log('Volte sempre ao meu arsenal!')
}
    const readManga = entry.question('Desejaria ver a minha lista de desejos? (S/N) ').toLocaleUpperCase()
    console.log('Aqui está a minha lista de mangás que quero ler:');

if(readManga === 'S'){

    function read(mangas) {
        return mangas.leu === false
    }

    const wishList = mangas.filter(read)
    console.table(wishList);
} else {
    console.log('Volte sempre ao meu arsenal!')
}
} else if(takeMangas === 'N'){
    console.log('Volte sempre ao meu arsenal!')
   
} else {
    console.log('Todas as opções que temos disponíveis:');
    console.table(mangas);
}

