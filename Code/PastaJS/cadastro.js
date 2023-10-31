function cadastro(){
    var form = document.getElementById('addCadastro');
    var dados = new FormData(form);
    

    fetch("../PastaPHP/cadastro.php", {
        method: "POST",
        body: dados

    });

}