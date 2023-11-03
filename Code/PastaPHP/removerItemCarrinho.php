<?php

$con = mysqli_connect("localhost", "root", "", "unimarket");
$id_produto = $_POST['idProdutoCarrinho'];
if ($id_produto) {
    $query = "DELETE FROM produtos_carrinho WHERE id_produto = $id_produto";
    mysqli_query($con, $query);
} 

mysqli_close($con);
?>
