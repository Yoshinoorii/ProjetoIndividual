var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");

//Recebendo os dados do html e direcionando para a função cadastrar de dashController.js

router.get("/qtdQuiz", function (req, res) {
    dashController.qtdQuiz(req, res);
});

router.get("/carroMaisTirado", function (req, res) {
    dashController.carroMaisTirado(req, res);
});

module.exports = router;