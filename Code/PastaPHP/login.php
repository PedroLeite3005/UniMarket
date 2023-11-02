<?php
$email = $_POST["Email"];
$senha = $_POST["password"];

$con = mysqli_connect("localhost", "root", "", "unimarket");

if ($con->connect_error) {
    die("Falha ao conectar ao banco de dados: " . $con->connect_error);
}

$query = "SELECT * FROM cliente WHERE email='$email' AND senha='$senha'";
$result = mysqli_query($con, $query);
$row = mysqli_fetch_assoc($result);

if ($row) {
    session_start();
    $_SESSION['Email'] = $email;
    $_SESSION['admin'] = $row['admin'];
    
    if ($row['admin'] == 1) { 
        echo json_encode(["redirect" => "../Páginas/produtosAdmin.html"]);
    } else {
        echo json_encode(["redirect" => "../Páginas/produtos.html"]);
    }
} else {
    echo json_encode(["error" => "Erro ao fazer login. Usuário ou senha inválidos."]);
}
?>

