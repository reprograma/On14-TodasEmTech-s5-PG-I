console.log('-----------------------------------------------------')
console.log('Olá, mundo!', 'Revisão de JavaScript e Introdução a ES6!')
console.log('-----------------------------------------------------')


// String X Template string
//var farase= "Olá mundo "
//var frase = "Olá mundo "

let frase = 'Olá Mundo '
 // quando é  uma  variavel que eu não vou modificar 

let saldo = 89.000
 console.log(frase);
 console.log(saldo);


//Atribua a uma variavel templateString a farase com concatenação.
const meuSaldo = `ola mundo, meu sado hoje é ${saldo}.`
console.log(meuSaldo);
 const meuSaldo2 = 'Olá Mundo , meu saudo hoje '+ saldo + '.'
 console.log(meuSaldo2);

// ----------------------------------------------
console.log('Funções')

// FUNÇÕES
// Possuímos as funções: falar, dobro, calcularMedia utilize o metodo function

/*function falei(){
    return 'pipipi popopo'
} */
console.log(falei());


/*const falei = () =>{
    return 'pipi popo'
}
console.log(falei()) */

//segunda forma de  declarar função com arrow function
// chama uma variavel e atribui a função nela .
 const falei = () => 'pipi popo'

 console.log(falei())
  
 function dobro (num){
     return num * 2
 }

 console.log(dobro(89))
 console.log(dobro(101))
 console.log(dobro(6))
 



// Vamos refatorar essas funções para a sintaxe de Arrow function



//Pronto, ja refatoramos para o javascript mais moderno!
console.log('-----------------------------------------------------')
console.log('Callback')
// CALLBACK
// Possuímos as funções: somar, subtrair, multiplicar e dividir.

/*function somar(a, b) {
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
}*/


// refatore as funções na sintaxe ES6
const somar = ( a,b ) => a + b
const subtrair = (a,b) => a - b 
const multiplicar = (a,b) => a  * b
const dividir = (a, b) => a / b

// Crie uma função chamada resultado que receberá como parâmetro: dois números e uma função de callback
function resultado (a,b, callback) {
    return callback(a,b,)
}

// Refatore a função resultado na sintaxe ES6

const resultado = ( a,b,callback ) => callback(a, b)
// Faça a soma de dois números usando a função resultado e chamada callback 

const resultadoSoma = resultado(5,5 somar)
console.log('o resultado da soma 5 e 5 é${resultadoSoma}')


// Faça a subtração de dois números usando a função resultado e chamada callback 
const resultadoSoma = resultado(5, 5, somar)
console.log('o resultado da soma 5 e 5 é${resultadoSoma}')


// Faça a multiplicação de dois números usando a função resultado e chamada callback 



// Faça a divisão de dois números usando a função resultado e chamada callback 



// Faça a ordenação crescente de dois números usando a função resultado e chamada callback 


 
console.log('-----------------------------------------------------')
console.log('Condicionais')
// CONDICIONAIS e Operador Condicional Ternário
// Uma estudante obteve as seguinte notas: n1, n2 e n3
const n1 = 9
const n2 = 5
const n3 = 6

// Verifique se a estudante foi aprovada, utilizando a função calcularMedia. 


//Se a média das notas for maior ou igual a 7, a estudante passou!



//volte e refatore a função ordenar

console.log('-----------------------------------------------------')
// ----------------------------------------------
// OBJETOS
console.log('Objetos  🪑')

// Declaração de objetos



// Fazer destructuring e acessar os valores de objeto 





// Declare um objeto aluna com as propriedades, Nome Completo, turma e ID


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