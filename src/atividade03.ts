import leia from 'readline-sync'

export default function atividade03() {
  var vetor: number[] = []
  var maior = 0;
  var menor = 0;
  var soma = 0;

  do {
    var NumeroDigitado = leia.questionInt("Digite um numero: ")
    vetor.push(NumeroDigitado)
  } while (NumeroDigitado !== 0)

  for (var i = 0; i < vetor.length - 1; i++) {
    if (i === 0) {
      maior = vetor[i]
      menor = vetor[i]
    } else {
      if (vetor[i] > maior) {
        maior = vetor[i]
      } else if (vetor[i] < menor) {
        menor = vetor[i]
      }
    }
    soma += vetor[i]
  }
  console.log(`- - - - - - - - - - - - - - -`)
  console.log(`A soma de todos os numeros: ${soma}.`)
  console.log(`- - - - - - - - - - - - - - -`)
  console.log(`O maior numero foi: ${maior}.`)
  console.log(`- - - - - - - - - - - - - - -`)
  console.log(`O menor numero foi: ${menor}.`)
}