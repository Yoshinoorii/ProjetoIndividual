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

function carroMenosTirado() {
    var instrucaoSql = `
        SELECT carro.nomecarro, COUNT(*) AS quantidade
        FROM resultado_quiz
        JOIN carro ON resultado_quiz.fkCarro = carro.id_carro
        GROUP BY fkCarro
        ORDER BY quantidade ASC
        LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function carroAtual() {
    var instrucaoSql = `
        SELECT fkUsuario, carro.nomecarro AS Carro,
        dataRegistro FROM resultado_quiz
        JOIN carro ON resultado_quiz.fkcarro = carro.id_carro
        ORDER BY dataRegistro
        DESC LIMIT 1;;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function grafico() {
    const instrucaoSql = `
        SELECT carro.nomecarro, COUNT(*) AS quantidade
        FROM resultado_quiz
        JOIN carro ON resultado_quiz.fkCarro = carro.id_carro
        GROUP BY fkCarro;
    `;
    console.log("Executando SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    qtdQuiz,
    carroMaisTirado,
    carroMenosTirado,
    carroAtual,
    grafico,
}