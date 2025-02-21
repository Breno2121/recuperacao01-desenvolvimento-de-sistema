import leia from 'readline-sync'

export default function atividade05() {

  var verde = 0;
  var preto = 0;
  var vermelho = 0;
  var PorcVerde
  var PorcVermelho
  var PorcPreto

  for (var i = 0; i <= 36; i++) {
    var NumeroSorteado = Math.trunc(Math.random() * 37)

    if (NumeroSorteado === 0) {
      verde++
    } else if (NumeroSorteado % 2 === 0) {
      preto++
    } else {
      vermelho++
    }
  }
  PorcVerde = (verde / 37) * 100
  PorcPreto = (preto / 37) * 100
  PorcVermelho = (vermelho / 37) * 100

  if (PorcVerde > 40 || PorcVermelho > 40 || PorcPreto > 40) {
    console.log("\nROLETA PODE ESTAR VICIADA!")
    console.log(`- - - - - - - - - - - - - - -`)
  }
  console.log(`Cor verde: ${PorcVerde.toFixed(2)}%`)
  console.log(`- - - - - - - - - - - - - - -`)
  console.log(`Cor vermelho: ${PorcVermelho.toFixed(2)}%`)
  console.log(`- - - - - - - - - - - - - - -`)
  console.log(`Cor preto: ${PorcPreto.toFixed(2)}%`)
}