var database = require("../database/config");

function dadosCarro() {

    var instrucaoSql =
        `select p.carro, COUNT(p.carro) as qtd FROM carro p
JOIN resultado_quiz r ON p.id_carro = r.fkcarro GROUP BY p.carro;
    `

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    dadosCarro
}