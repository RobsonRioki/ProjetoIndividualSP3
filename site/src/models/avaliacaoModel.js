var database = require("../database/config");

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(
  avaliacao1,
  avaliacao2,
  avaliacao3,
  avaliacao4,
  avaliacao5,
  avaliacao6,
  fkUsuario
) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",
    avaliacao1,
    avaliacao2,
    avaliacao3,
    avaliacao4,
    avaliacao5,
    avaliacao6
  );

  // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
  //  e na ordem de inserção dos dados.
  var instrucao = `
        INSERT INTO avaliacao (AvaliacaoComida1, AvaliacaoComida2, AvaliacaoComida3, AvaliacaoComida4, AvaliacaoComida5, AvaliacaoComida6, fkUsuario) VALUES ('${avaliacao1}', '${avaliacao2}', '${avaliacao3}', '${avaliacao4}', '${avaliacao5}', '${avaliacao6}', '${fkUsuario}');
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

module.exports = {
  cadastrar,
};
