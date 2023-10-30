
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
                            <img src="../Data/ImgProd/Caneta.jpg" class="card-img-top" alt="Imagem Produto" width=30px>
                            <h5 class="card-title">${dados[i].id_produto}</h5>
                            <h5 class="card-title">${dados[i].nome}</h5>
                            <p class="card-text">R$ ${dados[i].preco}</p>
                            <button type="button" class="btn btn-primary my-1 border border-dark py-2" onclick="excluirProduto(${dados[i].id_produto})">Excluir</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
</div>
    `;
        document.getElementById("produtosCadastrados").innerHTML += conteudo;
    }
}

async function excluirProduto(id_produto){
    console.log(id_produto);
    var dados = new FormData();
    dados.append('id_produto', id_produto);
    await fetch('../PastaPHP/excluirProduto.php', {
        method: 'POST',
        body: dados
    });
}