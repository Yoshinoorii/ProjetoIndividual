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

router.get("/carroMenosTirado", function (req, res) {
    dashController.carroMenosTirado(req, res);
});

router.get("/carroAtual", function (req, res) {
    dashController.carroAtual(req, res);
});

router.get("/grafico", function (req, res) {
    dashController.grafico(req, res);
});

module.exports = router;