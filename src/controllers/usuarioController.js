const bcrypt = require('bcrypt');
const Usuario = require('../models/usuario');

async function cadastrar(req, res) {
    try {
        const { nome, email, senha, telefone, ctipo, cmarca, cplaca, cmodelo } = req.body;

        const senhaCriptografada = await bcrypt.hash(senha, 10);

        const usuario = await Usuario.create({nome, email, senha: senhaCriptografada, telefone, ctipo, cmarca, cmodelo, cplaca});

        res.status(201).json({
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email,
        });
    } catch (erro) {
        res.status(400).json({
            mensagem: 'Erro ao cadastrar usuário',
            erro: erro.message,
        });
    }
}

module.exports = { cadastrar };