const produto = {
    nome: 'Caneta Bic Preta',
    preco: 1.90,
    desconto: 0.05

}

function clone(objeto) {
    return { ...objeto } //cria um novo objeto e dá spread
}

const novoProduto = clone(produto)
novoProduto.nome = 'Caneta Bic Azul'
novoProduto.preco = 2.20
novoProduto.desconto = 0.8
console.log(produto, novoProduto)