var database = require("../database/config");

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(resposta1, resposta2, resposta3, fkUsuario) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",
    resposta1,
    resposta2,
    resposta3
  );

  // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
  //  e na ordem de inserção dos dados.
  var instrucao = `
        INSERT INTO questionario (resposta1, resposta2, resposta3,fkUsuario) VALUES ('${resposta1}', '${resposta2}', '${resposta3}', '${fkUsuario}');
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function dadosQ1() {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): "
  );

  var instrucao = `
  select (select COUNT(resposta1) from questionario where resposta1 = 'Lamen') as Lamen, 
		(select COUNT(resposta1) from questionario where resposta1= 'Okonomiyaki')as Okonomiyaki,
        (select COUNT(resposta1) from questionario where resposta1= 'Omuraisu')as Omuraisu,
        (select COUNT(resposta1) from questionario where resposta1= 'Takoyaki')as Takoyaki,
        (select COUNT(resposta1) from questionario where resposta1= 'Karaague')as Karaague,
        (select COUNT(resposta1) from questionario where resposta1= 'Sushi')as Sushi
        from questionario group by resposta1 limit 1;
        `;

  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function dadosQ2() {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): "
  );

  var instrucao2 = `
        
  select (select COUNT(resposta2) from questionario where resposta2 = 'Gosto') as Gosto, 
  (select COUNT(resposta2) from questionario where resposta2= 'Nunca experimentei')as NuncaExperimentei,
    (select COUNT(resposta2) from questionario where resposta2= 'NãoGosto')as NãoGosto
    from questionario group by resposta1 limit 1;`;

  console.log("Executando a instrução2 SQL: \n" + instrucao2);

  return database.executar(instrucao2);
}
function dadosQ3() {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): "
  );

  var instrucao3 = `
          
          select (select COUNT(resposta3) from questionario where resposta3 = 'Comeria') as Comeria, 
          (select COUNT(resposta3) from questionario where resposta3= 'Experimentaria')as Experimentaria,
          (select COUNT(resposta3) from questionario where resposta3= 'NãoComeria')as NãoComeria
          from questionario group by resposta1 limit 1;`;

  console.log("Executando a instrução3 SQL: \n" + instrucao3);

  return database.executar(instrucao3);
}

module.exports = {
  cadastrar,
  dadosQ1,
  dadosQ2,
  dadosQ3,
};
