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

    fetch("../PastaPHP/attTotalCarrinho.php", {
      method: "GET"
      })
      .then(response => response.json())
      .then(data => {
        var novoTotal = data.novoTotal;	
        var total = document.getElementById("total");
        total.textContent = novoTotal;
      });

  }

  function confirmar() {
    fetch("../PastaPHP/confirmarLogin.php", {
        method: "GET"
    })
    .then(response => response.json())
    .then(data => {
        if (data.logged_in) {
            window.location.href = "../Páginas/pagamento.html";
        } else {
            window.location.href = "../Páginas/login.html";
        }
    })
    .catch(error => {
        alert("Erro ao verificar o status de login.");
    });
}
