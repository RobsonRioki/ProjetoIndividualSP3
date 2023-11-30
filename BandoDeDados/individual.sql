drop database JapanFeed;
CREATE DATABASE JapanFeed;
USE JapanFeed;

CREATE TABLE usuario(
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(70),
senha varchar(70)
);

CREATE TABLE questionario(
idQuestionario int auto_increment,
resposta1 varchar(45),
resposta2 varchar(45),
resposta3 varchar(45),
fkUsuario int,
foreign key (fkUsuario) references usuario(idUsuario),
primary key (idQuestionario, fkUsuario)
);

CREATE TABLE avaliacao(
idAvaliacao int auto_increment,
AvaliacaoComida1 int,
AvaliacaoComida2 int,
AvaliacaoComida3 int,
AvaliacaoComida4 int,
AvaliacaoComida5 int,
AvaliacaoComida6 int,
fkUsuario int unique,
foreign key (fkUsuario) references usuario(idUsuario),
primary key (idAvaliacao, fkUsuario)
);
select idAvaliacao from avaliacao where fkUsuario = 6;
SELECT * FROM usuario;
SELECT * FROM questionario;
SELECT * FROM avaliacao;



