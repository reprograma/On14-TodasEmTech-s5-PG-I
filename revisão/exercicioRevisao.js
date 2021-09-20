console.log('-----------------------------------------------------')
console.log('Olá, mundo!', 'Revisão de JavaScript e Introdução a ES6!')
console.log('-----------------------------------------------------')


// String X Template string

let nome="kamila "
const saldo= 10000

console.log(nome);
console.log(saldo);

const meuSaldo= `Olá mundo meu saldo hoje é ${saldo}.`
console.log(meuSaldo); 

const meuSaldo2= 'Olá mundo meu saldo hoje é ' + saldo + ' . ';


const meuNome = "meu nome é: " + nome;
const meuNome2 = `meu nome é ${nome} `;

console.log(meuNome);
console.log(meuNome2);




//Atribua a uma variavel templateString a farase com concatenação.


console.log('-----------------------------------------------------')
// ----------------------------------------------
console.log('Funções')

// FUNÇÕES
// Possuímos as funções: falar, dobro, calcularMedia utilize o metodo function

/* function falei () {
    return 'oi, marlon'
}
console.log(falei());
*/
// Vamos refatorar essas funções para a sintaxe de Arrow function

const falei = () => 'oi, marlon'
console.log(falei());


function dividir(num) {
    return num/30
}
console.log(dividir(1000));
console.log(dividir(2500));
console.log(dividir(6000));


function calcularMedia(nota1, nota2, nota3) {
    const soma = (nota1 + nota2 + nota3)
    const media = soma/3
    return media
    
}
console.log(calcularMedia(5, 10, 8));

//Pronto, ja refatoramos para o javascript mais moderno!
console.log('-----------------------------------------------------')
console.log('Callback')
// CALLBACK
// Possuímos as funções: somar, subtrair, multiplicar e dividir.
/*
function somar(a, b) {
    return a + b
}

function subtrair(a, b) {
    return a - b
}

function multiplicar(a, b) {
    return a * b
}

function dividir(a, b){
    return a / b
}

function ordenar(a, b) {
    if (a <= b) {
        return [a, b]
    } else {
        return [b, a]
    }
}
*/

// refatore as funções na sintaxe ES6


// Crie uma função chamada resultado que receberá como parâmetro: dois números e uma função de callback


// Refatore a função resultado na sintaxe ES6


// Faça a soma de dois números usando a função resultado e chamada callback 



// Faça a subtração de dois números usando a função resultado e chamada callback 



// Faça a multiplicação de dois números usando a função resultado e chamada callback 



// Faça a divisão de dois números usando a função resultado e chamada callback 



// Faça a ordenação crescente de dois números usando a função resultado e chamada callback 


 
console.log('-----------------------------------------------------')
console.log('Condicionais')
// CONDICIONAIS e Operador Condicional Ternário
// Uma estudante obteve as seguinte notas: n1, n2 e n3
const n1 = 9
const n2 = 5
const n3 = 7


// Verifique se a estudante foi aprovada, utilizando a função calcularMedia. 
const media = calcularMedia (n1, n2, n3)

//Se a média das notas for maior ou igual a 7, a estudante passou!

const resultadoMedia =  () => (media >= 7) ? 'Aprovado' : 'Reprovado'
    
console.log(media);
console.log(resultadoMedia());
    


//volte e refatore a função ordenar

console.log('-----------------------------------------------------')
// ----------------------------------------------
// OBJETOS
console.log('Objetos  🪑')

// Declaração de objetos
const objeto = new Object()
objeto.nome = 'cadeira'
objeto.tipo = 'madeira'
objeto.peso = '7'

console.log(objeto);

const {nome, tipo, peso} = objeto
console.log(nome, tipo, peso);
console.log(nome);
console.log(tipo);
console.log(peso);



// Fazer destructuring e acessar os valores de objeto 





// Declare um objeto aluna com as propriedades, Nome Completo, turma e ID

const aluna = 

//acessando o valor nome completo



//desestruturando alunas


console.log('-----------------------------------------------------')
// ----------------------------------------------
// CLASSES
console.log('Classes 🆕')


// Vamos criar a classe Alunas


console.log('-----------------------------------------------------')
// ARRAYS
console.log('Arrays [ 0️⃣  , 1️⃣  , 2️⃣  ]')

// Declaração de arrays


// Acessando elementos pela posição do array


// Informe o tamanho de cada array

// Faça a desestruturação do array



console.log('-----------------------------------------------------')

// MÉTODOS DE ITERAÇÃO
console.log('Métodos iteração ')


console.log('-----------------------------------------------------')
console.log('                         Fim                         ')
console.log('-----------------------------------------------------')