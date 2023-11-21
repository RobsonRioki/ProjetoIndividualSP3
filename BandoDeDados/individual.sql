CREATE DATABASE JapanFeed;
USE JapanFeed;
drop database japanfeed;

CREATE TABLE usuario(
idUsuario int primary key auto_increment,
Nome varchar(45),
email varchar(70),
senha varchar(70)
);

