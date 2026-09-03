const bcrypt = require('bcrypt');
const Usuario = require('../models/Usuario');
async function cadastrar(req, res) {
try {
const { nome, email, senha, num_de_tel, placa_carro, modelo_carro} = req.body;
const senhaCriptografada = await bcrypt.hash(senha, 10);

const usuario = await Usuario.create({
nome,
email,
senha: senhaCriptografada,
num_de_tel,
placa_carro,
modelo_carro
});

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
module.exports = {cadastrar};