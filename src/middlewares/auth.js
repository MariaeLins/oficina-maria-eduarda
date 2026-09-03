const jwt = require('jsonwebtoken');
function autenticar(req, res, next) {
const authHeader = req.headers.authorization;

/*esse middleware intercepta a requisição antes dela chegar no controller, confere se o
token é válido, e só deixa passar quem estiver autenticado.*/
if (!authHeader) {
return res.status(401).json({ mensagem: 'Token não enviado' });
}
const token = authHeader.split(' ')[1];

try {
const dados = jwt.verify(token, process.env.JWT_SECRET);
req.usuario = dados;
next();
} catch (erro) {
return res.status(401).json({ mensagem: 'Token inválido ou expirado' });
}
}

module.exports = autenticar;