window.onload = async function(){
    if (localStorage.getItem('exclusaoSucesso') === 'true') {
        var toast = new bootstrap.Toast(document.getElementById('liveToast'));
        toast.show();
        localStorage.removeItem('exclusaoSucesso');
    }

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
                <div class="card d-inline-block my-1 mx-1" style="width: 12rem;">
                    <div class="card-body text-center border border-dark rounded">
                        <img src="../Data/ImgProd/${dados[i].id_produto}.png" class="card-img-top" alt="Imagem Produto" style="height: 200px;">
                        <h5 class="card-title">${dados[i].nome}</h5>
                        <p class="card-text">R$ ${dados[i].preco}</p>
                        <button type="button" class="btn btn-primary my-1 border border-dark py-2" onclick="excluirProduto(${dados[i].id_produto})" id="liveToastBtn">Excluir</button>
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
    var dados = new FormData();
    dados.append('id_produto', id_produto);
    await fetch('../PastaPHP/excluirProduto.php', {
        method: 'POST',
        body: dados
    });
   
    location.reload();
    localStorage.setItem('exclusaoSucesso', 'true');
}