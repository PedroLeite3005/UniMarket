<?php
    
    $id_produto = $_POST['id_produto'];
    if($id_produto){
        $con = mysqli_connect("localhost:3306", "root", "", "unimarket");
        $query= "DELETE FROM produtos WHERE id_produto=$id_produto";
        $resultado = mysqli_query($con, $query);
        
        $caminhoImagem = "../Data/ImgProd/" . $id_produto . ".png";
    
        if (file_exists($caminhoImagem)) {
            unlink($caminhoImagem);
        }

}
?>
