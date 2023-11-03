<?php
$con = mysqli_connect("localhost", "root", "", "unimarket");

$id_produto = $_POST['idProduto'];
$novaQuantidade = $_POST['novaQuantidade'];

if ($id_produto && $novaQuantidade) {
    $query = "UPDATE produtos_carrinho SET quantidade = $novaQuantidade WHERE id_produto = $id_produto";
    mysqli_query($con, $query);
} 

mysqli_close($con);
?>
