<?php
    
    $id_produto = $_POST['id_produto'];
    if($id_produto){
        $con = mysqli_connect("localhost:3306", "root", "", "unimarket");
        $query= "DELETE FROM produtos WHERE id_produto=$id_produto";
        $resultado = mysqli_query($con, $query);
        
        if($resultado) {
            echo "Produto excluído com sucesso";
           } else {
            echo "Erro ao excluir o produto";
           }
    // feche a conexão
    //mysqli_close($con);
}
?>
