<?php
$nome = $_POST["username"];
$senha = $_POST["password"];

$con = mysqli_connect("localhost", "root", "", "unimarket");

if ($con->connect_error) {
    die("Falha ao conectar ao banco de dados: " . $con->connect_error);
}

$query = "SELECT * FROM cliente WHERE nome='$nome' AND senha='$senha'";
$result = mysqli_query($con, $query);
$row = mysqli_fetch_assoc($result);

if ($row) {
    // Usuário autenticado com sucesso
    session_start();
    $_SESSION['username'] = $nome;
    $_SESSION['admin'] = $row['admin'];
    
    if ($row['admin'] != 1) { //==
        echo json_encode(["redirect" => "../Páginas/produtos.html"]);
    } else {
        echo json_encode(["redirect" => "../indexCliente.html"]);
        //echo json_encode(["redirect" => "../Páginas/produtosCliente.html"]);
    }
} else {
    // Falha na autenticação
    echo json_encode(["error" => "Erro ao fazer login. Usuário ou senha inválidos."]);
}
?>

