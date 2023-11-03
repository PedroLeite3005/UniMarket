CREATE SCHEMA IF NOT EXISTS unimarket;
USE unimarket;

DROP TABLE IF EXISTS produtos_carrinho;
DROP TABLE IF EXISTS Pagamento;
DROP TABLE IF EXISTS Carrinho;
DROP TABLE IF EXISTS Produtos;
DROP TABLE IF EXISTS Administrador;
DROP TABLE IF EXISTS Cliente;

CREATE TABLE IF NOT EXISTS Cliente (
	id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    cpf CHAR(11) NOT NULL,
	rg CHAR(15) NOT NULL,
    endereco VARCHAR(100) NOT NULL,
    senha VARCHAR(100) NOT NULL,
    admin BOOLEAN 
);

CREATE TABLE IF NOT EXISTS Produtos (
    id_produto INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL
);

CREATE TABLE IF NOT EXISTS Carrinho (
    id_carrinho INT PRIMARY KEY,
    total DECIMAL(10,2)
);

CREATE TABLE IF NOT EXISTS Pagamento (
    id_pagamento INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    preco_total DECIMAL(10, 2) NOT NULL,
    metodo_de_pagamento VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS produtos_carrinho (
	id_produto INT NOT NULL,
    id_carrinho INT NOT NULL,
    quantidade INT NOT NULL,
    FOREIGN KEY (id_carrinho) REFERENCES Carrinho(id_carrinho),
    FOREIGN KEY (id_produto) REFERENCES Produtos(id_produto)
);