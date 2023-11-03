<?php
$con = mysqli_connect("localhost", "root", "", "unimarket");
$pagamentoBemSucedido = true;

if ($pagamentoBemSucedido) {
    $query = "DELETE FROM produtos_carrinho";
    mysqli_query($con, $query);
} 

mysqli_close($con);
?>
