var avaliacaoModel = require("../models/avaliacaoModel");

function cadastrar(req, res) {
  // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
  var avaliacao1 = req.body.avaliacao1Server;
  var avaliacao2 = req.body.avaliacao2Server;
  var avaliacao3 = req.body.avaliacao3Server;
  var avaliacao4 = req.body.avaliacao4Server;
  var avaliacao5 = req.body.avaliacao5Server;
  var avaliacao6 = req.body.avaliacao6Server;
  var fkUsuario = req.params.ID_USUARIO;

  // Faça as validações dos valores
  if (avaliacao1 == undefined) {
    res.status(400).send("avaliacão 1 está undefined!");
  } else if (avaliacao2 == undefined) {
    res.status(400).send("avaliação 2 está undefined!");
  } else if (avaliacao3 == undefined) {
    res.status(400).send("avaliação 3 está undefined!");
  } else if (avaliacao4 == undefined) {
    res.status(400).send("avaliação 4 está undefined!");
  } else if (avaliacao5 == undefined) {
    res.status(400).send("avaliação 5 está undefined!");
  } else if (avaliacao6 == undefined) {
    res.status(400).send("avaliacao 6 está undefined!");
  } else if (fkUsuario == undefined) {
    res.status(400).send("avaliacao 6 está undefined!");
  }

  {
    avaliacaoModel
      .cadastrar(
        avaliacao1,
        avaliacao2,
        avaliacao3,
        avaliacao4,
        avaliacao5,
        avaliacao6,
        fkUsuario
      )
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
