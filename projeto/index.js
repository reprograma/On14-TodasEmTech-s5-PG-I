const music = require('./database')
console.table(music);

music.sort((a, b) => a.ano - b.ano)
console.table(music)
const pegarObjeto = require('readline-sync')
 const verEstilo = pegarObjeto.question('Você Deseja visualizar musica por estilo? (S/N) ').toLocaleUpperCase()
if(verEstilo == 'S'){
  console.log('Essaas são as musicas por estilo:')
  console.log('Temos Rock e MPB')
  const qualEstilo = pegarObjeto.question ('Qual é o estilo?').toLocaleUpperCase()
  function estilo(music) {
    return music.estilo === qualEstilo
  }
   const estilosencontrado = music.filter(estilo)
   console.table(estilosencontrado)

} else {
  console.log( 'Okay ')
  console.table( music)
  
}
const verFvorito = pegarObjeto.question('Você Deseja visualizar musicas Favoritas ? (S/N) ').toLocaleUpperCase()
if(verFvorito == 'S'){
  console.log('Aqui estão algumas das minhas musicas favoritas ')
  function favoritos (music){
    return music.favorito === true
  }
   
  console.table(music.filter(favoritos))


}else{
   console.log('Agradeço a sua curiosidade!')
}

//vamos instanciar, o nosso banco de dados


