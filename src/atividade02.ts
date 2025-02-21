import leia from 'readline-sync'

export default function atividade02() {

  let opcao = leia.keyInSelect(["Celsius para Fahrenheit", "Fahrenheit para Celsius", "Celsius para Kelvin", "Kelvin para Celsius", "fahrerenhit para Kelvin", "Kelvin para fahrenheit"]) + 1;

  switch (opcao) {
    case 1:
      var Temperatura = leia.questionInt("Digite a temperatura a ser convertida para Fahrenheit: ");
      var tempfahrenheit = (Temperatura * 1.8) + 32
      console.log(`A temperatura e: ${tempfahrenheit} F°`);
      break;
    case 2:
      var Temperatura = leia.questionInt("Digite a temperatura a ser convertida para Celsius: ");
      var tempcelsius = (Temperatura - 32) * (5 / 9)
      console.log(`A temperatura e: ${tempcelsius} C°`);
      break;
    case 3:
      var Temperatura = leia.questionInt("Digite a temperatura a ser convertida para Kelvin: ");
      var tempkelvin = (Temperatura + 273.15)
      console.log(`A temperatura e: ${tempkelvin} K°`);
      break;
    case 4:
      var Temperatura = leia.questionInt("Digite a temperatura a ser convertida para Celsius: ");
      var tempcelsius = (Temperatura - 273.15)
      console.log(`A temperatura e: ${tempcelsius} C°`);
      break;
    case 5:
      var Temperatura = leia.questionInt("Digite a temperatura a ser convertida para Kelvin: ");
      var tempkelvin = (Temperatura - 32) * (5 / 9) + 273.15
      console.log(`A temperatura e: ${tempkelvin} K°`);
      break;
    case 6:
      var Temperatura = leia.questionInt("Digite a temperatura a ser convertida para Celsius: ");
      var tempfahrenheit = (Temperatura - 273.15) * 1.8 + 32
      console.log(`A temperatura e: ${tempfahrenheit} F°`);
      break;
  }
}