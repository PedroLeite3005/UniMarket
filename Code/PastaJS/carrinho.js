window.onload = async function(){
  var resultado = await fetch("../PastaPHP/getProduto.php", {
      method: "GET",
  });
  var dados = await resultado.json();
  for (var i = 0; i < dados.length; i++) {

  var conteudo = `
  <tr>
    <th scope="row">${[i]}</th>
    <td>${dados[i].nome}</td>
    <td><img src="../Data/ImgProd/${dados[i].id_produto}.png" class="card-img-top" style="width: 50px;"></td>
    <td>R$ ${dados[i].preco}</td>
    <td>
      <input type="number" class="form-control" value="1">
    </td>
    <td>${dados[i].preco}</td>
    <td>
      <button class="btn btn-danger" onclick="removerProduto(${dados[i].id_produto})">Remover</button>
    </td>
  </tr>
  `;
  document.getElementById("produtos").innerHTML += conteudo;
  }
}
    function removerProduto(produtoId) {
      const quantidadeInput = document.getElementById(`quantidade_produto_${produtoId}`);
      const quantidade = parseInt(quantidadeInput.value);

      if (quantidade > 1) {
        quantidadeInput.value = quantidade - 1;
      } else {
        // Implemente a lógica para remover o produto do carrinho
        // Isso pode envolver uma solicitação ao seu script PHP para atualizar o carrinho
        // Você também pode remover a linha da tabela no HTML
      }
    }
