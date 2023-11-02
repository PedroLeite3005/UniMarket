<?php

$nome = $_POST["username"];
$senha = $_POST["password"];
$email = $_POST["email"];
$cpf = $_POST["cpf"];
$rg = $_POST["rg"];
$endereco = $_POST["address"];
$admin = 0;

$con = mysqli_connect("localhost", "root", "", "unimarket");
mysqli_autocommit($con, false);

if (empty($nome) || empty($senha) || empty($email) || empty($cpf) || empty($rg) || empty($endereco)) {
    $response['success'] = false;
}else {
    $query = "INSERT INTO Cliente(nome, email, cpf, rg, endereco, senha, admin) VALUES('$nome','$email','$cpf','$rg','$endereco','$senha','$admin')";
    mysqli_query($con, $query);
   $response['success'] = true;
   mysqli_commit($con);
}

mysqli_close($con);
echo json_encode($response);