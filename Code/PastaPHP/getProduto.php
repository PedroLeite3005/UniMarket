<?php

    $con = mysqli_connect("localhost:3306", "root", "", "unimarket");
    $result = mysqli_query($con, "SELECT * FROM produtos");
    $dados = array();

    while($registro = mysqli_fetch_assoc($result)) {
        array_push($dados, $registro);
    }

    $json = json_encode($dados);
    echo $json;