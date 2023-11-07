window.onload = async function() {
  var resultado = await fetch("../PastaPHP/getProdutoCarrinho.php", {
    method: "GET",
  });
  var dados = await resultado.json();

  for (var i = 0; i < dados.length; i++) {
    var conteudo = `
    <tr>
      <td>${[i + 1]}</td>
      <td>${dados[i].nome}</td>
      <td><img src="../Data/ImgProd/${dados[i].id_produto}.png" class="card-img-top" alt="Imagem Produto" style="height: 2rem; width: 2rem"></td>
      <td>${dados[i].preco}</td>
      <td><input type="number" value="${dados[i].quantidade}" oninput="atualizarTotalProduto(${dados[i].id_produto}, this.value)"></td>
      <td><button class="btn btn-danger" onclick="removerItemDoCarrinho(${dados[i].id_produto})">Remover</button></td>
    </tr>
  `;
      document.getElementById("produtos").innerHTML += conteudo;
  }

  fetch("../PastaPHP/attTotalCarrinho.php", {
	method: "GET"
	})
	.then(response => response.json())
	.then(data => {
		var novoTotal = data.novoTotal;	
		var totalCarrinhoElement = document.getElementById("totalCarrinho");
		totalCarrinhoElement.textContent = novoTotal;
	});
}

function removerItemDoCarrinho(idProdutoCarrinho) {
  if (confirm("Deseja realmente remover este item do carrinho?")) {
      var formData = new FormData();
      formData.append('idProdutoCarrinho', idProdutoCarrinho);
      fetch("../PastaPHP/removerItemCarrinho.php", {
          method: "POST",
          body: formData
      })
      .then(response => {
          if (response.ok) {
              window.location.reload();
          } else {
              alert('Erro ao remover o item do carrinho.');
          }
      });
  }
}

async function atualizarTotalProduto(idProduto, novaQuantidade) {
  var formData = new FormData();
  formData.append('idProduto', idProduto);
  formData.append('novaQuantidade', novaQuantidade);

  await fetch("../PastaPHP/attTotalProduto.php", {
    method: "POST",
    body: formData
  });

  fetch("../PastaPHP/attTotalCarrinho.php", {
	method: "GET"
	})
	.then(response => response.json())
	.then(data => {
		var novoTotal = data.novoTotal;	
		var totalCarrinhoElement = document.getElementById("totalCarrinho");
		totalCarrinhoElement.textContent = novoTotal;
	})
	.catch(error => {
		console.error("Erro ao buscar o novo total do carrinho: " + error);
	});

}
