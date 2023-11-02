<?php

$nome = $_POST["username"];
$senha = $_POST["password"];
$email = $_POST["email"];
$cpf = $_POST["cpf"];
$rg = $_POST["rg"];
$endereco = $_POST["address"];
$admin = 1;

$con = mysqli_connect("localhost", "root", "", "unimarket");
$query = "INSERT INTO Cliente(nome, email, cpf, rg, endereco, senha, admin) VALUES('$nome','$email','$cpf','$rg','$endereco','$senha','$admin')";
mysqli_query($con, $query);