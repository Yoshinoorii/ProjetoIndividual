var database = require("../database/config");

function cadastrar(nome, email, senhahash) {
    var instrucao = `
        INSERT INTO usuario (nome, email, senha) VALUES ('${nome}', '${email}', '${senhahash}');
    `;
    return database.executar(instrucao);
}

function buscarPorEmail(email) {
    var instrucao = `
        SELECT * FROM usuario WHERE email = '${email}';
    `;
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    buscarPorEmail
};