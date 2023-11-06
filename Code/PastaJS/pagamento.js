window.onload = async function() {
    const response = await fetch("../PastaPHP/attTotalCarrinho.php", {
        method: "GET"
        });

        if (response.ok) {
            const data = await response.json();
                const novoTotal = data.novoTotal;
                const totalCarrinhoElement = document.getElementById("total");
                totalCarrinhoElement.textContent = novoTotal;
        }
}

function startCountdown() {
    const countdownDisplay = document.getElementById('cronometro');
    const seconds = 600;
    let timer = seconds;
    const interval = setInterval(function() {
        const minutes = Math.floor(timer / 60);
        const seconds = timer % 60;
        countdownDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        timer--;

        if (timer < 0) {
            clearInterval(interval);
            countdownDisplay.textContent = 'Tempo expirado';
        }
    }, 1000);
}

function confirmarPagamento() {
    var form = document.getElementById("formPagamento");
    var nomeCartao = document.getElementById("nomeCartao");
    var numeroCartao = document.getElementById("numeroCartao");
    var dataValidade = document.getElementById("dataValidade");
    var cvv = document.getElementById("cvv");
    if (nomeCartao.value === "" || numeroCartao.value === "" || dataValidade.value === "" || cvv.value === "") {
        alert("Preencha todos os campos do formulário antes de continuar.");
        return false; 

    }else{
        fetch("../PastaPHP/pagamento.php", {
            method: "POST"
        });

        var toast = new bootstrap.Toast(document.getElementById('liveToast'));
        toast.show();

        setTimeout(function () {
            window.location.href = "../Páginas/produtos.html";
        }, 2000); //(2 segundos)
    }    
}

function pix() {
    fetch("../PastaPHP/pagamento.php", {
        method: "POST"
    });
    var toast = new bootstrap.Toast(document.getElementById('liveToast'));
    toast.show();

    setTimeout(function () {
        window.location.href = "../Páginas/produtos.html";
    }, 2000); //(2 segundos)
}