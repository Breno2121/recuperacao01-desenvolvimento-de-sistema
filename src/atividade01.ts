import leia from 'readline-sync'

export default function atividade01() {

  var QtdDiarias = leia.questionInt("Digite quantas diarias deseja: ")
  var IdadeHospede = leia.questionInt("Qual sua idade: ")
  var ValorTotal = 0
  var ValorDiaria
  var ValorDesconto

  if (QtdDiarias <= 5) {
    ValorDiaria = 100
  } else if (QtdDiarias > 5 && QtdDiarias <= 10) {
    ValorDiaria = 90
  } else {
    ValorDiaria = 80
  }

  if (IdadeHospede > 60) {
    ValorTotal = QtdDiarias * ValorDiaria
    ValorDesconto = ValorTotal * 0.2

    console.log(`O valor total de ${QtdDiarias} diarias: `)
    console.log(`R$ ${ValorTotal - ValorDesconto}.`)
  } else {
    ValorTotal = QtdDiarias * ValorDiaria
    console.log(`O valor total de ${QtdDiarias} diarias: `)
    console.log(`R$ ${ValorTotal}.`)
  }
}