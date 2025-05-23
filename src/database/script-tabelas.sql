create database jdm;
use jdm;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL,
	email VARCHAR(50) UNIQUE NOT NULL,
	senha varchar(100) NOT NULL
);

show tables;

select * from usuario;






