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
                                <img src="../Data/ImgProd/${dados[i].id_produto}.png" class="card-img-top" alt="Imagem Produto" style="height: 200px;">
                                <h5 class="card-title">${dados[i].nome}</h5>
                                <p class="card-text">R$ ${dados[i].preco}</p>
                                <button class="btn btn-primary col-12" type="button" onclick="addCarrinho(${dados[i].id_produto})">Adicionar ao carrinho</button>
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

function postPesquisar(){
    document.getElementById('pesquisa').innerHTML = '';

    var form = document.getElementById('termoPesquisa');
    var dados = new FormData(form);

    fetch("../PastaPHP/pesquisa.php", {
        method: "POST",
        body: dados
    })
    .then(response => response.json())
    .then(dados => {
        for (var i = 0; i < dados.length; i++) {
            var conteudo = `
            <div class="content">
                <div class="container-fluid"> 
                    <div class="row">
                        <div class="col-12">
                            <div class="col-12">
                                <div class="card d-inline-block my-2 mx-2">
                                    <div class="card-body text-center">
                                        <img src="../Data/ImgProd/${dados[i].id_produto}.png" class="card-img-top" alt="Imagem Produto">
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
            document.getElementById("pesquisa").innerHTML += conteudo;
        }
        
    })
    
    document.getElementById('cards').innerHTML = null;
}

function addCarrinho(id_produto) {
   
}