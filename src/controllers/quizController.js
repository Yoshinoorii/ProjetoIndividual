var usuarioModel = require("../models/quizModel");

function checkCarro(req, res) {
    var carro = req.body.quizServer;
    var id = req.body.idServer;
    
    if (id == undefined) {
        res.status(400).send("Seu id está undefined!");
    }
    else {
        usuarioModel.checkCarro(id) //MODEL CONFIRMA SE O USUARIO FEZ O QUIZ
            .then(
                function (resultado) {
                    res.json(resultado);
                    if (resultado.length > 0) {
                        console.log("update"); // USUARIO ENCONTRADO
                        usuarioModel.attCarro(carro, id)
                    } else {
                        console.log("insert"); // USUARIO NAO ENCONTRADO
                        usuarioModel.insertCarro(id, carro);
                    }
                }
            ).catch(
                function (erro) { // ERRO ENCONTRADO
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o select! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );

    }
}

module.exports = {
    checkCarro,
};