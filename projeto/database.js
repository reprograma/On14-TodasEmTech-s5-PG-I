//cria o array de objetos estudantes
const livros = [
  {
    nome: "Extraordinário",
    categoria: "drama",
    paginas: 320,
    recomenda: "sim",
    leu: true,
  },
  {
    nome: "Orgulho e Preconceito",
    categoria: "romance",
    paginas: 424,
    recomenda: "sim",
    leu: true,
  },
  {
    nome: "Diário de uma ansiosa ou como parei de me sabotar",
    categoria: "não ficção/drama",
    paginas: 192,
    recomenda: "sim",
    leu: true,
  },
  {
    nome: "Melancia",
    categoria: "humor",
    paginas: 490,
    recomenda: "sim",
    leu: true,
  },
  {
    nome: "Sapiens",
    categoria: "não ficcao",
    paginas: 472,
    recomenda: "sim",
    leu: false,
  },
  {
    nome: "Americanah",
    categoria: "ficcao",
    paginas: 520,
    recomenda: "sim",
    leu: false,
  },
  {
    nome: "O conto da Aia",
    categoria: "drama",
    paginas: 368,
    recomenda: "sim",
    leu: false,
  },
  {
    nome: "Mulheres que correm com lobos",
    categoria: "não ficcao",
    paginas: 576,
    recomenda: "não",
    leu: false,
  },
];

//exporta o array de objetos estudantes
module.exports = livros;

console.table(livros);

/*console.log(livros[1]);
console.log("Extraordinário");
console.log("Orgulho e Preconceito");
console.log("Diário de uma ansiosa ou como parei de me sabotar");
console.log("Melancia");
console.log("Sapiens");
console.log("Americanah");
console.log("O conto da Aia");
console.log("Mulheres que correm com lobos");*/

/*console.log(320);
console.log(424);
console.log();
console.log();
console.log();*/

livros.sort((a, b) => a.paginas - b.paginas);

console.table(livros);
