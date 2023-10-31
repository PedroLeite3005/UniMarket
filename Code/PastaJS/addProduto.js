function addProduto() {
    var form = document.getElementById('addProduto');
    var dados = new FormData(form);
    dados.append('imagens', imagens[0]);

    fetch("../PastaPHP/addProduto.php", {
        method: "POST",
        body: dados
    });
}