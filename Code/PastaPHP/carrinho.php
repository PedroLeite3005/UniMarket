<?php
session_start();

// aqui serve pra ver se o carrinho existe na sessão e inicializa se não existir
if (!isset($_SESSION['carrinho'])) {
    $_SESSION['carrinho'] = array();
}

// aqui é a lógica para adicionar um produto ao carrinho
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['product_id'])) {
    $product_id = $_POST['product_id'];

    // aqui simula a consulta ao banco de dados para obter informações do produto
    $product = array(
        'id' => $product_id,
        'nome' => 'Produto ' . $product_id,
        'preco' => 19.99
    );

    // aqui vc verifiqua se o produto já está no carrinho
    $item_already_in_cart = false;
    foreach ($_SESSION['carrinho'] as $key => $item) {
        if ($item['id'] == $product_id) {
            $_SESSION['carrinho'][$key]['quantidade'] += 1;
            $item_already_in_cart = true;
            break;
        }
    }

    // Se o produto não estiver no carrinho, adicione-o
    if (!$item_already_in_cart) {
        $product['quantidade'] = 1;
        array_push($_SESSION['carrinho'], $product);
    }
}

// Lógica para remover um produto do carrinho
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['remove_product'])) {
    $remove_product_id = $_POST['remove_product'];
    foreach ($_SESSION['carrinho'] as $key => $item) {
        if ($item['id'] == $remove_product_id) {
            if ($item['quantidade'] > 1) {
                $_SESSION['carrinho'][$key]['quantidade'] -= 1;
            } else {
                unset($_SESSION['carrinho'][$key]);
                $_SESSION['carrinho'] = array_values($_SESSION['cart']);
            }
            break;
        }
    }
}

// Redirecionar de volta à página de carrinho de compras
header('Location: carrinho_de_compras.php');
exit;
