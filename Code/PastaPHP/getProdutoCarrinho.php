<?php
$con = mysqli_connect("localhost", "root", "", "unimarket");

$query = "SELECT produtos_carrinho.*, produtos.* FROM produtos_carrinho
          JOIN produtos ON produtos.id_produto = produtos_carrinho.id_produto";

$result = mysqli_query($con, $query);

if ($result) {
    $data = array();

    while ($row = mysqli_fetch_assoc($result)) {
        $data[] = $row;
    }

    echo json_encode($data);
} 