const Livro = require('../models/Livro');
const{Op} = require('sequelize');

async function cadastrar(req, res) {
    try {
        const { titulo, autor, quantidade_estoque } = req.body;

        const livro = await Livro.create({
            titulo,
            autor,
            quantidade_estoque,
        });

        res.status(201).json(livro);
    } catch (erro) {
        res.status(400).json({
            mensagem: 'Erro ao cadastrar livro',
            erro: erro.message,
        });
    }
}

async function listar(req, res) {
    try {
        const  {pagina = 1, limite = 10, nome, data} = req.query;

        const filtro = {};

        if (nome) {
            filtro.titulo = { [Op.like]: `%${nome}%` };
        }//procura registros com o nome informado, mesmo que seja apenas uma parte do nome

        if (data) {
            filtro.createdAt = { [Op.gte]: new Date(data) };
        }//procura registros com data de criação maior ou igual a data informada
        //Op.gte = greater than or equal (maior ou igual).
        // new Date(data) transforma a string recebida em uma data.

        //"Busque os livros que atendem aos filtros informados e retorne apenas uma determinada quantidade deles, começando pela página solicitada."
        const livros = await Livro.findAll({
            where: filtro, 
            limit: Number(limite),
            offset: (Number(pagina) - 1) * Number(limite),
        });/*Livro.findAll(...) - Busca vários registros da tabela/modelo Livro. 
        where: filtro - Aplica os filtros que você montou anteriormente.
        limit: Number(limite) - Define quantos livros serão retornados no máximo.
        Number() - converte o valor para número.
        offset: (Number(pagina) - 1) * Number(limite) - Define quantos registros serão pulados antes de começar a retornar os resultados. ou seja, pulará os livros já vistos e mostrará os proximos nas páginas web seguintes*/
        
        
        res.json(livros);
    } catch (erro) {
        res.status(400).json({
        mensagem: "Erro ao listar livros",
        erro: erro.message,
        });
    }
}

async function deletar(req, res) {
try {
    const { id } = req.params;
    const livro = await Livro.findByPk(id);

    if (!livro) {
        return res.status(404).json({
        mensagem: "Livro não encontrado",
        });
    }

    await livro.destroy();
        res.status(200).json({
        mensagem: "Livro removido com sucesso",
        });

    } catch (erro) {
    res.status(400).json({
    mensagem: "Erro ao remover livro",
    erro: erro.message,
    });
    }
}

module.exports = {cadastrar, listar, deletar};