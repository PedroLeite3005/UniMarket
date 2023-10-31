<?php

$nome = $_POST["username"];
$senha = $_POST["password"];
$email = $_POST["email"];
$cpf = $_POST["cpf"];
$rg = $_POST["rg"]
$endereco = $_POST["address"];

$con = mysqli_connect("localhost", "root", "", "unimarket");
$query = "INSERT INTO Cliente(nome, email, cpf, rg, endereco, senha) VALUES('$nome','$email','$cpf','$rg','$endereco','$senha')";
mysqli_query($con, $query);