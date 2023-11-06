<?php
$con = mysqli_connect("localhost", "root", "", "unimarket");

$queryCalculoTotal = "UPDATE carrinho c
                    SET c.total = (SELECT SUM(pc.quantidade * p.preco)
                                  FROM produtos_carrinho pc
                                  INNER JOIN produtos p ON pc.id_produto = p.id_produto
                                  WHERE pc.id_carrinho = c.id_carrinho)";

mysqli_query($con, $queryCalculoTotal);

$query = "SELECT total FROM carrinho WHERE id_carrinho = 0";
$result = mysqli_query($con, $query);

if ($result) {
    $row = mysqli_fetch_assoc($result);
    $novoTotal = $row['total'];
} else {
    $novoTotal = 0; 
}

$response = ['novoTotal' => $novoTotal];

echo json_encode($response);

mysqli_close($con);
?>
