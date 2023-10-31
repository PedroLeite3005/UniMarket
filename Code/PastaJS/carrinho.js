
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

    function finalizarCompra() {
      // Implemente a lógica para finalizar a compra aqui
      // Isso pode envolver uma solicitação ao seu script PHP para processar a compra
    }
