<?php
    
$nome = $_POST["nome"];
$preco = $_POST["preco"];
$arquivo = $_FILES["imagens"];

$con = mysqli_connect("localhost:3306", "root", "", "unimarket");

if ($arquivo["type"] == "image/png") {
    $query = "INSERT INTO produtos(nome, preco) VALUES ('$nome', '$preco')";
    mysqli_query($con, $query);

    $idProduto = mysqli_insert_id($con);
    $nomeImagem = $idProduto . ".png";
    move_uploaded_file($arquivo["tmp_name"], "../Data/ImgProd/" . $nomeImagem );
    $response = array("success" => true, "message" => "Imagem adicionada");

} else {
    $response = array("success" => false, "message" => "Selecione uma imagem PNG");
} 

echo json_encode($response);