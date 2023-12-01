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

function dados(req, res) {
  setTimeout(() => {
    questionarioModel
      .dadosQ1()
      .then(function (resultadoAutenticar) {
        console.log(
          `\nResultados encontrados DA Q1: ${resultadoAutenticar.length}`
        );
        console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

        if (resultadoAutenticar.length == 1) {
          var Lamen = resultadoAutenticar[0].Lamen;
          var Okonomiyaki = resultadoAutenticar[0].Okonomiyaki;
          var Omuraisu = resultadoAutenticar[0].Omuraisu;
          var Takoyaki = resultadoAutenticar[0].Takoyaki;
          var Karaague = resultadoAutenticar[0].Karaague;
          var Sushi = resultadoAutenticar[0].Sushi;

          Q2(res, Lamen, Okonomiyaki, Omuraisu, Takoyaki, Karaague, Sushi);
        } else if (resultadoAutenticar.length == 0) {
          res.status(403).send("Email e/ou senha inválido(s)");
        } else {
          res.status(403).send("Mais de um usuário com o mesmo login e senha!");
        }
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o login! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }, "10");

  //Q2

  //Q3
}

function Q2(res, Lamen, Okonomiyaki, Omuraisu, Takoyaki, Karaague, Sushi) {
  questionarioModel
    .dadosQ2()
    .then(function (resultadoAutenticar) {
      console.log(
        `\nResultados encontrados DA Q2: ${resultadoAutenticar.length}`
      );
      console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

      if (resultadoAutenticar.length == 1) {
        var Gosto = resultadoAutenticar[0].Gosto;
        var NuncaExpe = resultadoAutenticar[0].NuncaExperimentei;
        var NGosto = resultadoAutenticar[0].NãoGosto;

        Q3(
          res,
          Lamen,
          Okonomiyaki,
          Omuraisu,
          Takoyaki,
          Karaague,
          Sushi,
          Gosto,
          NuncaExpe,
          NGosto
        );
      } else if (resultadoAutenticar.length == 0) {
        res.status(403).send("Email e/ou senha inválido(s)");
      } else {
        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "\nHouve um erro ao realizar o login! Erro: ",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

function Q3(
  res,
  Lamen,
  Okonomiyaki,
  Omuraisu,
  Takoyaki,
  Karaague,
  Sushi,
  Gosto,
  NuncaExpe,
  NGosto
) {
  questionarioModel
    .dadosQ3()
    .then(function (resultadoAutenticar) {
      console.log(
        `\nResultados encontrados DA Q3: ${resultadoAutenticar.length}`
      );
      console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

      if (resultadoAutenticar.length == 1) {
        res.json({
          LamenResp: Lamen,
          OkonomiyakiResp: Okonomiyaki,
          OmuraisuResp: Omuraisu,
          TakoyakiResp: Takoyaki,
          KaraagueResp: Karaague,
          SushiResp: Sushi,
          GostoResp: Gosto,
          NuncaExpeResp: NuncaExpe,
          NGostoResp: NGosto,
          ComeriaResp: resultadoAutenticar[0].Comeria,
          ExperimentariaResp: resultadoAutenticar[0].Experimentaria,
          NãoComeriaResp: resultadoAutenticar[0].NãoComeria,
        });
      } else if (resultadoAutenticar.length == 0) {
        res.status(403).send("Email e/ou senha inválido(s)");
      } else {
        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "\nHouve um erro ao realizar o login! Erro: ",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
  cadastrar,
  dados,
};
