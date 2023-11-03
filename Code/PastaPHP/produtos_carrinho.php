<?php
$con = mysqli_connect("localhost", "root", "", "unimarket");

$queryCarrinho = "INSERT INTO Carrinho (id_carrinho, quantidade) VALUES (0, 0)
                    ON DUPLICATE KEY UPDATE id_carrinho = LAST_INSERT_ID(id_carrinho)";
mysqli_query($con, $queryCarrinho);
$id_carrinho = 0;

$id_produto = $_POST['id_produto'];

if ($id_produto) {
    print($id_produto);
    $query = "INSERT INTO produtos_carrinho (id_produto, id_carrinho, quantidade) VALUES ('$id_produto', '$id_carrinho', 1)";
    mysqli_query($con, $query);
} 

mysqli_close($con);
?>
