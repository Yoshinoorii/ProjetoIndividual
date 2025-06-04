var dashModel = require("../models/dashModel");

function qtdQuiz(req, res) {
    dashModel.qtdQuiz().then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    });
}

function carroMaisTirado(req, res) {
    dashModel.carroMaisTirado()
    .then(function(resultado){
        if (resultado.length > 0) {
            res.status(200).json(resultado[0]);
        } else {
            res.status(200).json({ nomecarro: "Nenhum resultado encontrado", total: 0 });
        }
    })
    .catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    qtdQuiz,
    carroMaisTirado
}