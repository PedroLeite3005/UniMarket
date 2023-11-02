function login(){
    var form = document.getElementById('login');
    var dados = new FormData(form);
    

    fetch("../PastaPHP/login.php", {
        method: "POST",
        body: dados
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            alert(data.error);
        } else if (data.redirect) {
            window.location.href = data.redirect;
        }
    });
    
    var user = form.elements['Email'].value;
    var senha = form.elements['password'].value;
    if(user.length=="" && senha.length==""){
        alert("Preencha os campos para fazer o login!");
        return false;
    }
    else if(user.length==""){
        alert(" Preencha p nome de usuario!");
        return false;
    }
    else if(senha.length==""){
        alert(" Informe a senha!");
        return false;
    }
    return false;
}