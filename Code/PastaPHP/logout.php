<?php
session_start(); 
session_destroy();

echo json_encode(["redirect" => "../Páginas/produtos.html"]); 

$con = mysqli_connect("localhost", "root", "", "unimarket");
$query = "DELETE FROM produtos_carrinho";
mysqli_query($con, $query);

$queryCarrinho = "UPDATE carrinho SET total = 0";
mysqli_query($con, $queryCarrinho);
exit();
