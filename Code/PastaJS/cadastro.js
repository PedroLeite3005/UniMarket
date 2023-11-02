function cadastro() {
    var form = document.getElementById('addCadastro');
    var dados = new FormData(form);

    fetch("../PastaPHP/cadastro.php", {
        method: "POST",
        body: dados
    }).then(response => response.json())
    .then(data => {
        if (data.success) {
            var toast = new bootstrap.Toast(document.getElementById('liveToast'));
            toast.show();
            setTimeout(function () {
                window.location.href = "../Páginas/login.html";
            }, 2000);
        } else {
            var toast = new bootstrap.Toast(document.getElementById('liveToastError'));
            toast.show();
        }
    });
}
