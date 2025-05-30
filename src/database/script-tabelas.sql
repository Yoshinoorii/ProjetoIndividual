create database jdm;
use jdm;

CREATE TABLE usuario (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50),
email VARCHAR(50),
senha VARCHAR(500)
);

CREATE TABLE carro (
id_carro INT PRIMARY KEY AUTO_INCREMENT,
nomecarro VARCHAR(50)
);

INSERT INTO carro (nomecarro) VALUES 
('Toyota Supra MKIV'),
('Nissan Silvia S14'),
('Nissan Skyline R33'),
('Mitsubishi Lancer IX'),
('Mazda RX7');

    
CREATE TABLE resultado_quiz (
  id_quiz INT PRIMARY KEY AUTO_INCREMENT,
  fkUsuario INT UNIQUE,
  fkCarro INT,
  CONSTRAINT fk_usuario FOREIGN KEY (fkUsuario) REFERENCES usuario(id),
  CONSTRAINT fk_nomecarro FOREIGN KEY (fkCarro) REFERENCES carro(id_carro),
  dataRegistro DATETIME DEFAULT CURRENT_TIMESTAMP);

SELECT id_carro FROM carro WHERE nomecarro = 'Nissan Silvia S14';

select * from carro;
select * from usuario;
select * from resultado_quiz;

