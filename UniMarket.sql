CREATE SCHEMA IF NOT EXISTS unimarket;
USE unimarket;

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
    preco DECIMAL(10, 2) NOT NULL,
    tamanho VARCHAR(20),
    peso DECIMAL(10, 2),
    quantidade INT NOT NULL,
    descricao TEXT NOT NULL,
	created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS Carrinho (
    id_carrinho INT PRIMARY KEY AUTO_INCREMENT,
    id_cliente INT,
    id_produto INT,
    quantidade INT NOT NULL,
	created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id_produto) REFERENCES Produtos(id_produto),
    FOREIGN KEY (id_cliente) REFERENCES Cliente(id_cliente)
);

CREATE TABLE IF NOT EXISTS Pagamento (
    id_pagamento INT PRIMARY KEY AUTO_INCREMENT,
    id_carrinho INT,
    preco_total DECIMAL(10, 2) NOT NULL,
    metodo_de_pagamento VARCHAR(50) NOT NULL,
	created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_carrinho) REFERENCES Carrinho(id_carrinho)
);