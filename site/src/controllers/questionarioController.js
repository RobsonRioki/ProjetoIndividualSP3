var questionarioModel = require("../models/questionarioModel");

function cadastrar(req, res) {
  // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
  var resposta1 = req.body.resposta1Server;
  var resposta2 = req.body.resposta2Server;
  var resposta3 = req.body.resposta3Server;
  var fkUsuario = req.body.fkUsuarioServer;

  // Faça as validações dos valores
  if (resposta1 == undefined) {
    res.status(400).send("avaliacão 1 está undefined!");
  } else if (resposta2 == undefined) {
    res.status(400).send("avaliação 2 está undefined!");
  } else if (resposta3 == undefined) {
    res.status(400).send("avaliação 3 está undefined!");
  }

  {
    questionarioModel
      .cadastrar(resposta1, resposta2, resposta3, fkUsuario)
      .then((resultado) => {
        res.status(201).json(resultado);
      })
      .catch((erro) => {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}
module.exports = {
  cadastrar,
};
