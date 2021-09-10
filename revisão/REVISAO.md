# Semana 5 - Revisão e Projeto Prático

## Revisão JS e ES6

---

1. [Variáveis](#variáveis)

2. [String X Template string](#string-x-template-string)

3. [Function X Arrow function](#function-x-arrow-function)

4. [Função Callback](#função-callback)

5. [Conditional if...else X Ternary operator](#conditional-if...else-x-ternary-operator)

6. [Objetos](#objetos)

7. [Classes](#classes)

8. [Arrays](#arrays)

9. [Métodos de iteração](#métodos-de-iteração)

    - [while](#while)
    - [for](#for)
    - [for...of](#for...of)
    - [map](#map)
    - [find](#find)
    - [filter](#filter)
    - [sort](#sort)
    - [reduce](#reduce)

10. [Spread operator](#spread-operator)

---

### Variáveis

Declarando variáveis:

```js
var nome = 'Reprograma'
```

Formato ES6:

```js
const nome = 'Reprograma'

let idade = 18
idade = 19
```

MDN: [var](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/var), [const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const), [let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)

---

### String X Template string

Exemplo de string:

```js
const frase = 'Olá, mundo!'

console.log(frase)
```

Exemplo de template string:

```js
const nome = 'Reprograma'

const templateString = `Olá, ${nome}`

console.log(templateString)
```

MDN: [Template strings](https://developer.cdn.mozilla.net/pt-BR/docs/Web/JavaScript/Reference/template_strings)

---

### Function X Arrow function

Declarando funções:

```js
function falar() {
  return 'Pipipi popopo'
}

function dobro(num) {
  return num * 2
}

function calcularMedia(nota1, nota2, nota3) {
  const soma = (nota1 + nota2 + nota3)
  const media = soma / 3
  return media
}
```

Ou, podemos declarar as mesmas funções da seguinte forma:

```js
const falar = function() {
  return 'Pipipi popopo'
}

const dobro = function(num) {
  return num * 2
}

const calcularMedia = function(nota1, nota2, nota3) {
  const soma = (nota1 + nota2 + nota3)
  const media = soma / 3
  return media
}
```

Arrow function possui uma sintaxe mais curta, e sabemos que é uma função pelo símbolo `=>`
```js
const falar = () => {
  return 'Pipipi popopo'
}

const dobro = (num) => {
  return num * 2
}

const calcularMedia = (nota1, nota2, nota3) => {
  const soma = (nota1 + nota2 + nota3)
  const media = soma / 3
  return media
}
```

Conseguimos deixar a função ainda mais concisa, pois:
- caso a função só tenha uma linha de instrução, as chaves `{}` são opcionais
- e ao remover as chaves `{}`, o `return` é implícito e, portanto, também removemos:

  ```js
  const falar = () => 'Pipipi popopo'

  const dobro = num => num * 2
  ```

- caso a função só tenha 1 parâmetro, os parênteses em volta do parâmetro `(param)` também são opcionais:

  ```js
  const dobro = num => num * 2
  ```

MDN: [Arrow function](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

---
### Função Callback

> Uma função callback é uma função passada a outra função como parâmetro, que é então invocada dentro da função externa para completar algum tipo de rotina ou ação. *Fonte MDN: [callback](https://developer.mozilla.org/pt-BR/docs/Glossario/Callback_function)*

```js
function somar(a, b) {
  return a + b
}

function subtrair(a, b) {
  return a - b
}

function multiplicar(a, b) {
  return a * b
}

function dividir(a, b) {
  return a / b
}

function ordenar(a, b) {
  if (a <= b) {
    return [a, b]
  } else {
    return [b, a]
  }
}

function calcular(a, b, callback) {
  return callback(a, b)
}

const num1 = 7
const num2 = 2

const somaDoisNumeros = calcular(num1, num2, somar)
console.log(somaDoisNumeros) // 9

const subtracaoDoisNumeros = calcular(num1, num2, subtrair)
console.log(subtracaoDoisNumeros) // 5

const multiplicacaoDoisNumeros = calcular(num1, num2, multiplicar)
console.log(multiplicacaoDoisNumeros) // 14

const divisaoDoisNumeros = calcular(num1, num2, dividir)
console.log(divisaoDoisNumeros) // 3.5

const ordenarDoisNumeros = calcular(num1, num2, ordenar)
console.log(ordenarDoisNumeros) // [2, 7]
```

Deixando a sintaxe reduzida:

```js
const somar = (a, b) => a + b

const subtrair = (a, b) => a - b

const multiplicar = (a, b) => a * b

const dividir = (a, b) => a / b

const ordenar = (a, b) => (a <= b) ? [a, b] : [b, a]

const calcular = (a, b, callback) => callback(a, b)
```

---

### Conditional if...else X Ternary operator

Exemplo de condicional usando `if...else`:

```js
const nota = 3

if (nota >= 7) {
  return 'aprovado'
} else {
  return 'reprovado'
}
```

Exemplo de condicional usando ternário:

```js
const nota = 3

(nota >= 7) ? 'aprovado' : 'reprovado'
```

MDN: [if...else](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else), [ternary](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Operador_Condicional)

---

### Objetos

Declaração de objetos

Objeto é um tipo de dado que contém uma coleção de propriedades organizadas em pares de chave (ou nome) e valor, sendo o valor qualquer tipo de dado (número, texto, função ou até mesmo outro objeto).

### Inicializando objetos

Para criar um novo Objeto, podemos atribuir a uma variável uma lista de elementos entre chaves, separados por vírgula e com a notação de `chave : valor`. Também é possível utilizando a palavra reservada `new` ou a partir de uma função.

```javascript
const pessoa = {
  nome: 'Ariel',
  idade: 25,
  profissao: 'desenvolvedora',
};
```

```javascript
const pessoa = new Object();

pessoa.nome = 'Ariel';
pessoa.idade = 25;
pessoa.profissao = 'desenvolvedora';
```

### Acessando valores

Notação de ponto

```javascript
const pessoa = {
  nome: 'Ariel',
  idade: 25,
  profissao: 'desenvolvedora',
};

console.log(pessoa.nome); // Ariel
console.log(pessoa.idade); // 25
console.log(pessoa.profissao); // desenvolvedora
```


```js
const objeto = new Object()
objeto.nome = 'cadeira'
objeto.tipo = 'madeira'
objeto.peso = 7

const aluna = {
    nomeCompleto: 'Denise Cardoso da Silva',
    turma: 'On12',
    id: 8596
  }
```

Acessando o valor de uma propriedade do objeto.

```js
console.log(aluna.nomeCompleto) // Denise Cardoso da Silva
```

Declarando uma variável de mesmo nome que a propriedade.

```js
const nomeCompleto = aluna.nomeCompleto
const turma = aluna.turma
const id = aluna.altura

console.log(nomeCompleto) // Denise Cardoso da Silva
console.log(turma) // On12
console.log(id) // 8596
```

Atribuição via desestruturação

```js
const { nomeCompleto, turma, id } = aluna

console.log(nomeCompleto) // Denise Cardoso da Silva
console.log(turma) // On12
console.log(id) // 8596
```

MDN: [destructuring assignment](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Atribuicao_via_desestruturacao)


---

### Classes

```js
class AlunaReprograma {
    constructor(name, identificador, classe, qtAcesso) {
      this.nome = name
      this.id = identificador
      this.turma = classe
      this.quantidadeDeAcesso = qtAcesso
    }
    acessarAmbiente(acessoAmbiente){
        return this.quantidadeDeAcesso += acessoAmbiente
    }
    apresentacao() {
        return `Olá, ${this.nomeCompleto} - turma ${this.turma} - id: ${this.id} , você acessou o ambiente remoto ${this.quantidadeDeAcesso} vezes, até o momento!`
    }
}

const aluna1 = new AlunaReprograma('Vanessa', 8952, 'On11', 0)
aluna1.acessarAmbiente(1)
aluna1.acessarAmbiente(1)

console.log(aluna1.apresentacao()) // Olá, Vanessa - turma On11 - id: 8952 , você acessou o ambiente remoto 2 vezes, até o momento!
```

MDN: [class](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes)

---

### Arrays

Um array (ou lista) permite armazenar um conjunto de dados e atribuí-los a uma variável, sendo esta a estrutura de dados mais simples possível.

### Inicializando Arrays

Para criar um novo Array, podemos atribuir a uma variável uma lista de elementos entre colchetes e separados por vírgula. Também é possível utilizando a palavra reservada `new` e instanciando os valores que queremos atribuir ou apenas especificando o seu tamanho.


```js
const lista = new Array('pera', 'uva', 'maçã')

const numeros = [9, 2, 5]
```

Acessando elementos pela posição do array:

Para acessar o valor de um Array, use a notação de colchetes e informe a posição que deseja acessar, lembrando que a contagem começa em zero.

```js
const primeiroItem = lista[0]

console.log(primeiroItem) // pera
```

Tamanho de array:

```js
const tamanho = numeros.length

console.log(tamanho) // 3
```

Atribuição via desestruturação

```js
const [primeiro, segundo, terceiro] = lista

console.log(primeiro) // pera
console.log(segundo) // uva
console.log(terceiro) // maçã
```

---

### Métodos de iteração
- `filter` retorna um novo array com os elementos filtrados.
- `find` retorna o primeiro elemento que achar igual ao elemento passado por parâmetro.
- `indexOf` retorna a posição do item passado por parâmetro ou -1 caso não tenha encontrado.
- `length` retorna um número que representa o tamanho do array.
- `map` retorna um novo array sem alterar o array original, criando uma cópia com as alterações que desejamos.
- `pop` remove e retorn o último item do array.
- `push` adiciona um item na última posição do array.
- `shift` remove e retorna o primeiro item do array.
- `slice` copia o array para outra variável.
- `splice` remove o item da posição passada por parâmetro
- `unshift` adiciona um item na primeira posição do array.


#### while

```js
let i = 0

while (i < numeros.length) {
  const dobro = numeros[i] * 2
  console.log(dobro)
  i++
}
// 18
// 4
// 10
```
MDN: [while](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/while)

---

#### for

```js
for (let i = 0; i < numeros.lenght; i++) {
  const dobro = numeros[i] * 2
  
  console.log(dobro)
}
// 18
// 4
// 10
```
MDN: [for](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for)

---

#### for...of

```js
for (numero of numeros) {
  const dobro = numero * 2

  console.log(dobro)
}
// 18
// 4
// 10
```
MDN: [for...of](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for...of)

---
#### map
> O método `map()` invoca a função `callback` passada por argumento para cada elemento do Array e devolve um novo Array como resultado. *Fonte: [MDN map](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map)*

```js
function dobrar(item) {
  return item * 2
}

const numerosDobrados = numeros.map(dobrar)

console.log(numerosDobrados) // [18, 4, 10]
```

Deixando mais conciso:

```js
const numerosDobrados = numeros.map(function (item) {
  return item * 2
})

console.log(numerosDobrados) // [18, 4, 10]
```

Refatorando para JS moderno:

```js
const numerosDobrados = numeros.map(item => item * 2)

console.log(numerosDobrados) // [18, 4, 10]
```

Obs: o método `map` não alterar o array original. Ele retorna um array novo com o resultado do `map`.

---

#### find

> O método find executa a função callback uma vez para cada elemento presente no array até que encontre um onde callback  retorne o valor true. Se o elemento é encontrado, find retorna imediatamente o valor deste elemento. Caso contrário, find retorna undefined. *Fonte MDN: [find](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find)*

```js
function procuraCinco(item) {
  return item === 5
}

const achouCinco = numeros.find(procuraCinco)

console.log(achouCinco) // 5
```

---

#### filter

```js
function impar(item) {
  return item % 2 !== 0
}

const numerosImpares = numeros.filter(impar)
```

Deixando mais conciso:

```js
const numerosImpares = numeros.filter(function (item) {
  return item % 2 !== 0
})
```

Refatorando para JS moderno:

```js
const numerosImpares = numeros.filter(item => item % 2 !== 0)

console.log(numerosImpares) // [9, 5]
```

Obs: o método `filter` não alterar o array original. Ele retorna um array novo com o resultado do `filter`.

MDN: [filter]()

---

#### sort

Vídeo da dança: [youtube](https://www.youtube.com/watch?v=lyZQPjUT5B4)

O método `sort` recebe uma função de callback opcional. Caso a função não seja fornecida, o array segue a ordenação dos caracteres Unicode.
> Se o parâmetro funcaoDeComparacao é fornecido, o array será ordenado de acordo com o valor de retorno da funcaoDeComparacao. Considerando que a e b são dois elementos sendo comparados, então:
>  - Se `funcaoDeComparacao(a, b)` for menor que 0, ordena `a` para um índice anterior a `b`, i.e. `a` vem primeiro.
>  - Se `funcaoDeComparacao(a, b)` retornar 0, deixa `a` e `b` inalterados em relação um ao outro, mas ordenado em relação a todos os outros elementos.
>  - Se `funcaoDeComparacao(a, b)` é maior que 0, ordena `b` para um índice anterior que `a`. `funcaoDeComparacao(a, b)` sempre deve retornar o mesmo valor dado um par específico de elementos `a` e `b` como seus dois parâmetros. Se resultados inconsistentes são retornados, então a ordenação é indefinida.
>
> *Fonte MDN: [sort](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)*


```js
function funcaoDeComparacao(a, b) {
  
  if (a < b) {
    return -1 // ao retornar valor negativo, a ordem fica [a, b]
  } else if (a > b) {
    return 1 // ao retornar valor positivo, a ordem fica [b, a]
  } else {
    return 0 // ao retornar valor nulo, a ordem permanece [a, b]
  }
}

numeros.sort(funcaoDeComparacao)

console.log(numeros) // [2, 5, 9]
```

Deixando mais conciso:

```js
function funcaoDeComparacao(a, b) {
  return a - b
}

numeros.sort(funcaoDeComparacao)

console.log(numeros) // [2, 5, 9]
```

Refatorando para JS moderno:

```js
numeros.sort((a, b) => a - b)

console.log(numeros) // [2, 5, 9]
```

**Obs: o método `sort` altera o array original!**

---

#### reduce

O método `reduce` recebe uma função callback com alguns parâmetros e essa função é executada a cada elemento presente no array. O resultado é a redução do array a um valor só. Normalmente, utilizamos os dois primeiros parâmetros: `acumulador` e `itemAtual`.

Por exemplo, podemos executar a soma de todos os valores do array utilizando o método `reduce`:

```js
function somarTodos(acumulador, itemAtual) {
  return acumulador + itemAtual
}

const numerosSomados = numeros.reduce(somarTodos)

console.log(numerosSomados) // 16
```

Deixando mais conciso:

```js
const numerosSomados = numeros.reduce(function (acumulador, itemAtual) {
  return acumulador + itemAtual
})

console.log(numerosSomados) // 16
```

Refatorando para JS moderno:

```js
const numerosSomados = numeros.reduce((acumulador, itemAtual) => acumulador + itemAtual)

console.log(numerosSomados) // 16
```

MDN: [reduce](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

---
