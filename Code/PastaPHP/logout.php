<?php
session_start(); 
session_destroy();

echo json_encode(["redirect" => "../Páginas/produtos.html"]); 


exit();
