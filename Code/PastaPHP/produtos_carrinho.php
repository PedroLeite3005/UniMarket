<?php
$con = mysqli_connect("localhost", "root", "", "unimarket");

$queryCarrinho = "INSERT INTO Carrinho (id_carrinho, total) VALUES (0, 0)
                    ON DUPLICATE KEY UPDATE id_carrinho = LAST_INSERT_ID(id_carrinho)";
mysqli_query($con, $queryCarrinho);
$id_carrinho = 0;

$id_produto = $_POST['id_produto'];

if ($id_produto) {
    $query = "SELECT * FROM produtos_carrinho WHERE id_produto = '$id_produto' AND id_carrinho = '$id_carrinho'";
    $result = mysqli_query($con, $query);

    if (mysqli_num_rows($result) > 0) {
        $response['message'] = "Produto já existe no carrinho.";
    } else {
        $query = "INSERT INTO produtos_carrinho (id_produto, id_carrinho, quantidade) 
        VALUES ('$id_produto', '$id_carrinho', 1)";
        $result = mysqli_query($con, $query);

        if ($result) {
            $response['message'] = "Produto adicionado ao carrinho com sucesso.";
        } else {
            $response['message'] = "Erro ao adicionar o produto ao carrinho.";
        }
    }
    echo json_encode($response);
} 

mysqli_close($con);
?>
