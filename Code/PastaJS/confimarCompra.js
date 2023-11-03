window.onload = async function() {
    var resultado = await fetch("../PastaPHP/getProdutoCarrinho.php", {
      method: "GET",
    });
    var dados = await resultado.json();
  
    for (var i = 0; i < dados.length; i++) {
      var conteudo = `
        <tr>
        <td>${dados[i].nome}</td>
        <td>${dados[i].preco}</td>
        <td>${dados[i].quantidade}</td>
        </tr>
    `;
        document.getElementById("produtos").innerHTML += conteudo;
    }
  }