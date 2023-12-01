var express = require("express");
var router = express.Router();

var questionarioController = require("../controllers/questionarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/resgistrar", function (req, res) {
  questionarioController.cadastrar(req, res);
});

router.post("/dados", function (req, res) {
  questionarioController.dados(req, res);
});

module.exports = router;
