<?php
    
$nome = $_POST["nome"];
$preco = $_POST["preco"];
$descricao = $_POST["descricao"];
$arquivo = $_FILES["imagens"];

$con = mysqli_connect("localhost:3306", "root", "", "unimarket");

$query = "INSERT INTO produtos(nome, preco, descricao) VALUES ('$nome', '$preco', '$descricao')";
mysqli_query($con, $query);

$idProduto = mysqli_insert_id($con);
$nomeImagem = $idProduto . ".png";

move_uploaded_file($arquivo["tmp_name"], "../Data/ImgProd/" . $nomeImagem );
