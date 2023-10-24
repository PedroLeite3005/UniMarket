function addProduto() {
    var form = document.getElementById('addProduto');
    var dados = new FormData(form);

    fetch("../PastaPHP/addProduto.php", {
        method: "POST",
        body: dados
    });
}

window.onload = async function(){
    var resultado = await fetch("../PastaPHP/getProduto.php", {
        method: "GET",
    });
    var dados = await resultado.json();
    for (var i = 0; i < dados.length; i++) {

    var conteudo = `
<div class="content">
    <div class="container-fluid"> 
        <div class="row">
            <div class="col-12">
                <div class="col-12">
                    <div class="card d-inline-block my-2 mx-2">
                        <div class="card-body text-center">
                            <img src="../Data/ImgProd/Caneta.jpg" class="card-img-top" alt="Imagem Produto">
                            <h5 class="card-title">${dados[i].nome}</h5>
                            <p class="card-text">R$ ${dados[i].preco}</p>
                            <a href="#" class="btn btn-primary col-12">Adicionar ao carrinho!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
</div>
    `;

        document.getElementById("cards").innerHTML += conteudo;
    }
}


