import leia from 'readline-sync'

export default function atividade04() {
  var senha = '';

  var Tamanho = leia.questionInt("Digite o tamanho da senha desejada: ")

  var char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&'

  for (var i = 0; i < Tamanho; i++) {
    var aleatorio = Math.trunc(Math.random() * 68)
    senha += char[aleatorio]
  }
  console.log(`Sua senha: ${senha}`)
}