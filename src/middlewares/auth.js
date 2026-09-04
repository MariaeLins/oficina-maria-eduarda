const jwt = require('jsonwebtoken');

function aut(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ mensagem: 'Token não enviado' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const dados = jwt.verify(token, process.env.JWT_SECRET);
        req.usuario = dados;
        next();
    } catch (erro) {
        res.status(401).json({ mensagem: 'Token inválido ou expirado' });
    }
}

module.exports = aut;