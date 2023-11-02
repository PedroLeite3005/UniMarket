function addProduto() {
    var form = document.getElementById('addProduto');
    var dados = new FormData(form);
    dados.append('imagens', imagens[0]);

    fetch("../PastaPHP/addProduto.php", {
        method: "POST",
        body: dados
    });

    var toast = new bootstrap.Toast(document.getElementById('liveToast'));
    toast.show();

    setTimeout(function () {
        location.reload();
    }, 1000); //(1 segundos)
}