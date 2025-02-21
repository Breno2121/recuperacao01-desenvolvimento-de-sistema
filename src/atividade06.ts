import leia from 'readline-sync'

export default function atividade06() {

  var Produtos: any[] = [];
  var ValorTotal = 0;
  var j = 0;

  do {
    const opcao = leia.keyInSelect([
      'Cadastrar Produto',
      'Visualizar Produtos'
    ], 'SELECIONE O QUE DESEJA FAZER: ');
    var indice = opcao

    if (opcao === 0) {
      var nomeProduto = leia.question("\nDigite o nome do produto: ")
      var precoProduto = leia.questionInt("Digite o preco do produto R$: ")
      ValorTotal = ValorTotal + precoProduto

      let produto = {
        nome: nomeProduto,
        preco: precoProduto
      }
      Produtos.push(produto)
      j++;
    }
    if (opcao === 1) {
      if (Produtos.length > 0) {
        console.log("\n Produtos cadastrados: \n")
        for (var i = 0; i < Produtos.length; i++) {
          console.log(`Produto: ${Produtos[i].nome}, Preco R$: ${Produtos[i].preco}.`)
          console.log("- - - - - - - - - - - - - - - ")
        }
        console.log(`O valor medio em produtos e de: R$ ${ValorTotal / j}.`)
        console.log("- - - - - - - - - - - - - - - ")
        console.log(`O preco total em produtos e de: R$ ${ValorTotal}.`)
      }
      if (j === 0){
        console.log("\n- - - - - - - - - - - - - - - ")
        console.log("NAO HA PRODUTOS CADASTRADOS.")
        console.log("- - - - - - - - - - - - - - - ")
      }
    }
  } while (indice !== -1)
}
