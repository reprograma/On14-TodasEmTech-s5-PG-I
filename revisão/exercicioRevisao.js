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

const resultadoSoma = resultado(5,5 soma)
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
const objeto = new objeto()
objeto.nome = 'cadeira'
objeto.tipo = 'madeira'
objeto.peso = 7
 console.log('obejeto ');


// Fazer destructuring e acessar os valores de objeto 
const nome = objeto.nome
console.log('nome ')
const tipo = objeto.tipo
console.log('tipo ')
const peso = objeto.peso
console.log('peso ')
 const { nome , tipo, peso } = objeto
 console.log('nome, tipo, peso')
 console.log('nome ')
 console.log('tipo')
 console.log('peso')
  console.log('O objeto disponivel na nossa loja ${nome} do tipo ${tipo }')


// Declare um objeto aluna com as propriedades, Nome Completo, turma e ID
const aluna = {
    nome: 'Ester ', 
    turma :' on14',
    id: 1404
}

//acessando o valor nome completo

console.log('O nome  da aluna é  ${aluna.nome} ')

//desestruturando alunas


console.log('-----------------------------------------------------')
// ----------------------------------------------
// CLASSES
console.log('Classes 🆕')

const AlunaReprograma = {
    nomeCompleto: 'Ester ',
    id: 1404,
    turma: ' on14',
    apresentacao: () => 'ola , ${alunaReprograma} -  turma ${alunaReprograma} ,  seu ide é ${alunaReprograma.id } .'
}
// Vamos criar a classe Alunas
class AlunasDaREprograma {
     constructor( name, id , classe , ){
         this.name = name
         this.id = indetificador 
         this.turma = classe 
     }
     apresentacao(){
         return'ola. ${this.name} - turma ${this.turma} , seu id é ${this.id} .'
     }
}

const aluna1 = new AlunasDaREprograma('Janaina Lopes', 8963 ,'on14')
const aluna2 = new AlunasDaREprograma('Ester Silva ', 17014 ,'on14')
const aluna3 = new AlunasDaREprograma('Hanna' 15201 , 'on14')
console.log(aluna1.apresentacao())


console.log('-----------------------------------------------------')
// ARRAYS
console.log('Arrays [ 0️⃣  , 1️⃣  , 2️⃣  ]')

// Declaração de arrays
const lista = new array('uva ', 'maça', 'pera' , 'batata')
console.log(lista)
 const numbers = [ 9, 5, 6, 2 ,4 , 3 , 10]
 console.log(numbers)

// Acessando elementos pela posição do array
console.log(lista[1])
console.log(lista[0])

console.log('Meu numer na posição 7 é ${numbers[6]}')

// Informe o tamanho de cada array
console.log('O tamanho do meu  array lista é ${lita.length}')
console.log(' o tamanho do meu  array numbers é ${numbers.length}')
// Faça a desestruturação do array
const [ primeiro, segundo , terceiro , quarto ] = 
console.log(segundo)
console.log(quarto)

// adicionando item no arrays

const novaLista = lista.push('banana')
// posso por  em uma variavel ou não encont
 lista.push('jaca ')
 
console.log(lista)
 //ordenação
 lista.sort()
 numbers.sort()
  console.log(lista)
console.log('-----------------------------------------------------')

// MÉTODOS DE ITERAÇÃO
console.log('Métodos iteração ')


console.log('-----------------------------------------------------')
console.log('                         Fim                         ')
console.log('-----------------------------------------------------')