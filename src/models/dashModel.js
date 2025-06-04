var database = require("../database/config");

function qtdQuiz() {
    var instrucaoSql = `
        SELECT COUNT(*) AS totalParticipantes FROM resultado_quiz;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function carroMaisTirado() {
    var instrucaoSql = `
        SELECT carro.nomecarro, COUNT(*) AS quantidade
        FROM resultado_quiz
        JOIN carro ON resultado_quiz.fkCarro = carro.id_carro
        GROUP BY fkCarro
        ORDER BY quantidade DESC
        LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    qtdQuiz,
    carroMaisTirado
}