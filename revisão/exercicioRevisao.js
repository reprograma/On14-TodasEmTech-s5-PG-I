console.log('-----------------------------------------------------')
console.log('Olá, mundo!', 'Revisão de JavaScript e Introdução a ES6!')
console.log('-----------------------------------------------------')


// String X Template string
//var frase = 'Olá mundo!'
//var frase = "Olá mundo!"

//let frase = 'Olá mundo!'

const frase = 'Olá mundo!'

let saldo = 89.000

console.log(frase);
console.log(saldo);

//Atribua a uma variavel templateString a farase com concatenação.

const meuSaldo = `Olá mundo, meu saldo hoje é ${saldo}.`
console.log(meuSaldo);


const meuSaldo2 = 'Olá mundo, meu saldo hoje é ' + saldo +'. Manda mais dinheiro por favor!!!'
console.log(meuSaldo2);

console.log('-----------------------------------------------------')
// ----------------------------------------------
console.log('Funções')

// FUNÇÕES
// Possuímos as funções: falar, dobro, calcularMedia utilize o metodo function

//Primeira forma de declarar função :
function faleiInicial() {
    return 'Parece que vai hein...'
}

console.log(faleiInicial());

//Segunda forma de declarar função com Arrow Function
//chame uma variavel e atribua a função nela.

const falei = () => 'Pipipi popopo'

console.log(falei())

function dobro(num) {
    return num * 2
}

console.log(dobro(89))
console.log(dobro(10))
console.log(dobro(6))


const dobroSegundaVez = (num) => num * 2

console.log(`Meu Arrow Function tem o resultado  ${dobroSegundaVez(15)}`);
console.log(`Minha Function atinga tem o resultado  ${dobro(20)}`);

// Vamos refatorar essas funções para a sintaxe de Arrow function

function calculeMedia(nota1, nota2, nota3) {
    const soma = (nota1 + nota2 + nota3) 
    const media = soma/3
    return media
}
console.log(calculeMedia(5,10,8))



//Pronto, ja refatoramos para o javascript mais moderno!
console.log('-----------------------------------------------------')
console.log('Callback')
// CALLBACK
// Possuímos as funções: somar, subtrair, multiplicar e dividir.
/*
function somar(a, b) {
    return a + b
}

console.log(somar(2,2))

function subtrair(a, b) {
    return a - b
}

console.log(subtrair(2,2))

function multiplicar(a, b) {
    return a * b
}

console.log(multiplicar(2,2))

function dividir(a, b){
    return a / b
}

console.log(dividir(2,2))


function ordenar(a, b) {
    if (a <= b) {
        return [a, b]
    } else {
        return [b, a]
    }
}
*/
//console.log(ordenar(70,15))


// refatore as funções na sintaxe ES6
const somar = (a, b) =>  a + b

const subtrair = (a, b) => a - b

const multiplicar = (a, b) => a * b 

const dividir = (a, b) =>  a / b

const ordenar = (a, b) =>  (a <= b) ? [a, b] : [b, a]

// Crie uma função chamada resultado que receberá como parâmetro: dois números e uma função de callback
/*
function resultado(a, b, callback) {
    return callback(a, b)
}
*/
// Refatore a função resultado na sintaxe ES6

const resultado = (a, b, callback) => callback(a, b)

//console.log(resultado(5, 5, somar))
//console.log(resultado(5, 5, subtrair))
//console.log(resultado(5, 5, dividir))
//console.log(resultado(5, 5, ordenar))

// Faça a soma de dois números usando a função resultado e chamada callback  somar  
const resultadoSoma = resultado(5, 5, somar)
console.log(`O resultado da soma de 5 e 5 é ${resultadoSoma}`)


// Faça a subtração de dois números usando a função resultado e chamada callback 

const resultadoSubtrair = resultado(5, 5, subtrair)
console.log(`O resultado da subtração de 5 e 5 é ${resultadoSubtrair}`)

// Faça a multiplicação de dois números usando a função resultado e chamada callback 

const resultadoMultiplicar = resultado(5, 5, multiplicar)
console.log(`O resultado da multiplicação de 5 e 5 é ${resultadoMultiplicar}`)


// Faça a divisão de dois números usando a função resultado e chamada callback 

const resultadoDividir = resultado(5,5, dividir)
console.log(`O resultado da divisão de 5 e 5 é ${resultadoDividir}`)


// Faça a ordenação crescente de dois números usando a função resultado e chamada callback 
const resultadoOrdenar = resultado(70, 15, ordenar)
console.log(`O resultado da ordenação de 70 e 15 é [ ${resultadoOrdenar} ]`)


 
console.log('-----------------------------------------------------')
console.log('Condicionais')
// CONDICIONAIS e Operador Condicional Ternário
// Uma estudante obteve as seguinte notas: n1, n2 e n3
const n1 = 9
const n2 = 10
const n3 = 10 

// Verifique se a estudante foi aprovada, utilizando a função calcularMedia. 
const media = calculeMedia(n1, n2, n3)
//Se a média das notas for maior ou igual a 7, a estudante passou!
/*
function resultadoMedia() {
    if (media >= 7) {
        return 'aprovado'
    } else {
        return 'reprovado'
    }
}
*/


//refatorando resultadoMedia

const resultadoMedia = () => (media >= 6) ? 'aprovada' : 'reprovada' 

console.log(resultadoMedia()) 

.AlunasDaReprogramaz//volte e refatore a função ordenar

console.log('-----------------------------------------------------')
// ----------------------------------------------
// OBJETOS
console.log('Objetos  🪑')

// Declaração de objetos
const objeto = new Object()
objeto.nome = 'cadeira'
objeto.tipo = 'madeira'
objeto.peso = 7
objeto.peso = 5
objeto.nome = 'banco'


console.log(objeto);
console.log(`O objeto disponivel na nossa loja é o ${objeto.nome} do tipo ${objeto.tipo} de peso ${objeto.peso} kg`)


// Fazer destructuring e acessar os valores de objeto 
/*
const nome = objeto.nome
console.log(nome);
const tipo = objeto.tipo
console.log(tipo);
const peso = objeto.peso
console.log(peso);
*/
const {nome, tipo, peso} = objeto
console.log(nome, tipo, peso)
console.log(nome)
console.log(tipo)
console.log(peso)

console.log(`O objeto disponivel na nossa loja é o ${nome} do tipo ${tipo} de peso ${peso} kg`)


// Declare um objeto aluna com as propriedades, Nome Completo, turma e ID
const aluna = {
    nomeCompleto: 'Andrea',
    turma: 'On14',
    id: 1456
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

const alunaReprograma = {
    nomeCompleto: 'Samila Rodrigues',
    indent: 85641,
    turma: 'On14',
    apresentacao: () => `Ola, ${alunaReprograma.nomeCompleto} - turma ${alunaReprograma.turma}, seu id é ${alunaReprograma.indent} .`
}

console.log(alunaReprograma.apresentacao())

// Vamos criar a classe Alunas

class AlunasDaReprograma{
    constructor(name, identificador, classe, ... materia){
        this.nome = name
        this.id = identificador
        this.turma = classe
        this.assunto = materia
    }
    apresentacao(){
        return `Ola, ${this.nome} - turma ${this.turma}, seu id é ${this.id} e amou as semanas ${this.assunto}.`
    }
}

const aluna1 = new AlunasDaReprograma('Janaina Lopes', 8963, 'On14', ['S1', 'S2'])
const aluna2 = new AlunasDaReprograma('Juliana Santana', 9631, 'On14', ['S3', 'S2'])
const aluna3 = new AlunasDaReprograma('Xenia Barreto', 8534, 'On14', ['S4', 'S1'])
const aluna4 = new AlunasDaReprograma('Daniele Vilares', 8774, 'On14', ['S1', 'S4'])

console.log(aluna1.apresentacao())
console.log(aluna2.apresentacao())
console.log(aluna3.apresentacao())
console.log(aluna4.apresentacao())


console.log('-----------------------------------------------------')
// ARRAYS
console.log('Arrays [ 0️⃣  , 1️⃣  , 2️⃣  ]')

// Declaração de arrays
const lista = new Array('uva', 'maça', 'pera', 'batata')
console.log(lista)

const numbers = [9, 5, 6, 3, 2, 4, 10]
console.log(numbers)

// Acessando elementos pela posição do array
console.log(lista[1])
console.log(lista[0])

console.log(`Meu numero na posição 7 é ${numbers[6]}`)

// Informe o tamanho de cada array

console.log(`O Tamanho do meu array lista é ${lista.length}`)
console.log(`O Tamanho do meu array numbers é ${numbers.length}`)

// Faça a desestruturação do array

const [primeiro, segundo, terceiro, quarto] = lista
console.log(segundo)
console.log(quarto)

//adicionando item no arrays

lista.push('banana')
lista.push('jaca')

console.log(lista)

//ordenação

lista.sort()
numbers.sort()
console.log(lista)
console.log(numbers)


console.log('-----------------------------------------------------')

// MÉTODOS DE ITERAÇÃO
console.log('Métodos iteração ')


console.log('-----------------------------------------------------')
console.log('                         Fim                         ')
console.log('-----------------------------------------------------')