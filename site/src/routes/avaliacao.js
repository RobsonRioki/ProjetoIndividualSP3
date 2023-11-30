var express = require("express");
var router = express.Router();

var avaliacaoController = require("../controllers/avaliacaoController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar/", function (req, res) {
  avaliacaoController.cadastrar(req, res);
});

router.post("/autenticar", function (req, res) {
  avaliacaoController.autenticar(req, res);
});

module.exports = router;
