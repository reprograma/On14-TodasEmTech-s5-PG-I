console.log('-----------------------------------------------------')
console.log('Olá, mundo!', 'Revisão de JavaScript e Introdução a ES6!')
console.log('-----------------------------------------------------')


// String X Template string

let saldo = 89.000
const meuSaldo = `Olá mundo, meu saldo hoje é ${saldo}.`



//Atribua a uma variavel templateString a farase com concatenação.


// ----------------------------------------------
console.log('Funções')

// FUNÇÕES
// Possuímos as funções: falar, dobro, calcularMedia utilize o metodo function

// Primeira forma de declara função:
// function falei() {
//     return 'Pipipi popopo'
    
// }

// console.log(falei());

//----------------------------------------------------------- 

// Segunda forma de declarar função com Arrow Function
// Chame uma variavel e atribua NavigationPreloadManager.

// const falei = () => 'Pipipi popopo'

// console.log(falei());

// aqui na => aqui guardamos o uma função dentro de uma variável.

// function dobro (num) {
//     return num * 2
// }

// console.log(dobro(16))

// // com arrow Function 
// const dobroSegundaVez = (num) => num * 2

// console.log(`Meu Arrow Function tem o resultado ${dobroSegundaVez(15)}`);


// Vamos refatorar essas funções para a sintaxe de Arrow function


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
const aluna = {
    nomeCompleto: 'Raquel',
    turma: 'On14',
    id: 1234
}

//acessando o valor nome completo
console.log(`O nome da aluna é ${aluna.nomeCompleto}`)

//desestruturando alunas
const {nomeCompleto, turma, id} = aluna
console.log(`Aluna da turma ${turma}`)


console.log('-----------------------------------------------------')
// ----------------------------------------------
// CLASSES
console.log('Classes 🆕')

// const alunaReprograma = {
//     nomeCompleto: 'RAquel Andrade',
//     id: 857496,
//     turma: 'On14',
//     apresentacao: () => ` Ola, ${alunaReprograma.nomeCompleto} - turma ${alunaReprograma.nomeCompleto}, seu id é ${ alunaReprograma.id}.`
// }

// Vamos criar a classe Alunas


console.log('-----------------------------------------------------')
// ARRAYS
console.log('Arrays [ 0️⃣  , 1️⃣  , 2️⃣  ]')

// Declaração de arrays

const lista = new Array('uva', 'maça', 'pera', 'batata')
console.log(lista)


// Acessando elementos pela posição do array


// Informe o tamanho de cada array

// Faça a desestruturação do array

//adicionando item no arrays
lista.push('banana')
console.log(lista) 

//ordenação
lista.sort()
console.log(lista)

console.log('-----------------------------------------------------')

// MÉTODOS DE ITERAÇÃO
console.log('Métodos iteração ')


console.log('-----------------------------------------------------')
console.log('                         Fim                         ')
console.log('-----------------------------------------------------')