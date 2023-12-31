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
                    <div class="card d-inline-block my-2 mx-2 col-12">
                        <div class="card-body text-center">
                            <img src="../Data/ImgProd/${dados[i].id_produto}.png" class="card-img-top" alt="Imagem Produto" style="height: 13rem; width: 12rem;">
                            <h5 class="card-title">${dados[i].nome}</h5>
                            <p class="card-text">R$ ${dados[i].preco}</p>
                            <button class="btn btn-primary col-12" type="button" onclick="addCarrinho(${dados[i].id_produto})">Adicionar ao carrinho</button>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
    `;

        document.getElementById("cards").innerHTML += conteudo;
    }

    const loginButton = document.getElementById('login');
    const logoutButton = document.getElementById('logout');

    fetch("../PastaPHP/confirmarLogin.php")
    .then(response => response.json())
    .then(data => {
        if (data.logged_in) {
            loginButton.style.display = 'none';
            logoutButton.style.display = 'block';
        } else {
            loginButton.style.display = 'block';
            logoutButton.style.display = 'none';   
        }
    });
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
                            <div class="card d-inline-block my-2 mx-2 col-12">
                                <div class="card-body text-center">
                                    <img src="../Data/ImgProd/${dados[i].id_produto}.png" class="card-img-top" alt="Imagem Produto" style="height: 13rem; width: 12rem;">
                                    <h5 class="card-title">${dados[i].nome}</h5>
                                    <p class="card-text">R$ ${dados[i].preco}</p>
                                    <button class="btn btn-primary col-12" type="button" onclick="addCarrinho(${dados[i].id_produto})">Adicionar ao carrinho</button>
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
    if (id_produto) {
        var formData = new FormData();
        formData.append('id_produto', id_produto);

        fetch("../PastaPHP/produtos_carrinho.php", {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            var mensagem = data.message;
            alert(mensagem);
        })
        .catch(error => {
            alert(error);
        })
    } 
}

function logout() {
    fetch("../PastaPHP/logout.php")
        .then(response => response.json())
        .then(data => {
            window.location.href = data.redirect; 
        })
        .catch(error => {
            console.error(error);
        });
}
