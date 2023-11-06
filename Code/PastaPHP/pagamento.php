<?php
$con = mysqli_connect("localhost", "root", "", "unimarket");
$pagamentoBemSucedido = true;

if ($pagamentoBemSucedido) {
    $query = "DELETE FROM produtos_carrinho";
    mysqli_query($con, $query);

    $queryCarrinho = "UPDATE carrinho SET total = 0";
    mysqli_query($con, $queryCarrinho);
} 

mysqli_close($con);
?>
