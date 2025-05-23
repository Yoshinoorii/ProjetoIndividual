var usuarioModel = require("../models/usuarioModel");
const bcrypt = require('bcrypt');

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        usuarioModel.buscarPorEmail(email, senha)
            .then(async function (resultado) {
                if (resultado.length == 1) {
                    const usuario = resultado[0];
                    const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
                    if (senhaCorreta) {
                        res.json(usuario);
                    } else {
                        res.status(403).send("Senha incorreta");
                    }
                } else {
                    res.status(403).send("Email inválido ou não cadastrado");
                }
            })
            .catch(function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

async function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {
        try {
            const hash = await bcrypt.hash(senha, 10);

            usuarioModel.cadastrar(nome, email, hash)
                .then((resultado) => {
                    res.json(resultado);
                })
                .catch((erro) => {
                    console.log(erro);

                    // Tratamento de erro para email duplicado e senha muito longa
                    if (erro.code === 'ER_DUP_ENTRY') {
                        res.status(400).send("Email já cadastrado!");
                    } else if (erro.code === 'ER_DATA_TOO_LONG') {
                        res.status(400).send("Senha criptografada muito longa para o banco de dados!");
                    } else {
                        res.status(500).json(erro.sqlMessage);
                    }
                });
        } catch (err) {
            console.error("Erro ao gerar hash da senha:", err);
            res.status(500).send("Erro ao criptografar a senha.");
        }
    }
}

module.exports = {
    autenticar,
    cadastrar
};
