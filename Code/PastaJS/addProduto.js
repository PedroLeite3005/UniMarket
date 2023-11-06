function addProduto() {
    var form = document.getElementById('addProduto');
    var dados = new FormData(form);
    dados.append('imagens', imagens[0]);

    fetch("../PastaPHP/addProduto.php", {
        method: "POST",
        body: dados
    }).then(response => response.json())
        .then(data => {
            if (data.success) {
                var toast = new bootstrap.Toast(document.getElementById('liveToast'));
                toast.show();
                setTimeout(function () {
                    location.reload();
                }, 1000); //(1 segundos)
            } else {
                alert('Somente imagem PNG válida!');
            }
        });
}