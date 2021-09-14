const n1 = 5;
const n2 = 7;
const n3 = 10;

const media = calcularMedia(n1, n2, n3);

console.log(media);

function resultadoMedia() {
  if (media >= 7) {
    return "aprovado";
  } else {
    return "reprovado";
  }
}

console.log(resultadoMedia())