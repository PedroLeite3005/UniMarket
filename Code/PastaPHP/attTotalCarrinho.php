<?php
$con = mysqli_connect("localhost", "root", "", "unimarket");

$queryCalculoTotal = "UPDATE carrinho c
                    SET c.total = (SELECT SUM(pc.quantidade * p.preco)
                                  FROM produtos_carrinho pc
                                  INNER JOIN produtos p ON pc.id_produto = p.id_produto
                                  WHERE pc.id_carrinho = c.id_carrinho)";
mysqli_query($con, $queryCalculoTotal);

mysqli_close($con);
?>
