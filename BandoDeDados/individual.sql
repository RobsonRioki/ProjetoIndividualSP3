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
describe questionario;


SELECT * FROM avaliacao;

select (select COUNT(resposta1) from questionario where resposta1 = 'Lamen') as Lamen, 
		(select COUNT(resposta1) from questionario where resposta1= 'Okonomiyaki')as Okonomiyaki,
        (select COUNT(resposta1) from questionario where resposta1= 'Omuraisu')as Omuraisu,
        (select COUNT(resposta1) from questionario where resposta1= 'Takoyaki')as Takoyaki,
        (select COUNT(resposta1) from questionario where resposta1= 'Karaague')as Karaague,
        (select COUNT(resposta1) from questionario where resposta1= 'Sushi')as Sushi
	from questionario group by resposta1 limit 1;
    
select (select COUNT(resposta2) from questionario where resposta2 = 'Gosto') as Gosto, 
		(select COUNT(resposta2) from questionario where resposta2= 'Nunca experimentei')as 'Nunca experimentei',
        (select COUNT(resposta2) from questionario where resposta2= 'NãoGosto')as NãoGosto
	from questionario group by resposta1 limit 1;
    
    select (select COUNT(resposta3) from questionario where resposta3 = 'Comeria') as Comeria, 
		(select COUNT(resposta3) from questionario where resposta3= 'Experimentaria')as Experimentaria,
        (select COUNT(resposta3) from questionario where resposta3= 'NãoComeria')as NãoComeria
	from questionario group by resposta1 limit 1;
    
    
    



