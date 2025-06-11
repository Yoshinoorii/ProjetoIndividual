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

function carroMenosTirado(req, res) {
    dashModel.carroMenosTirado()
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

function carroAtual(req, res) {
    const userId = req.query.userId;

    if (!userId) {
        return res.status(400).json({ error: "Usuário não informado" });
    }

    dashModel.carroAtual(userId)
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


function grafico(req, res) {
    dashModel.grafico()
        .then(resultado => res.status(200).json(resultado))
        .catch(erro => res.status(500).json(erro.sqlMessage));
}

module.exports = {
    qtdQuiz,
    carroMaisTirado,
    carroMenosTirado,
    carroAtual,
    grafico,
}