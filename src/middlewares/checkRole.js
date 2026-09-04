function permitir(...tiposPermitidos) {

    return (req, res, next) => {
        if (!tiposPermitidos.includes(req.usuario.id)) {
            return res.status(403).json({ mensagem: 'Sem permissão para essa ação' });
        }

        next();
    };
}

module.exports = permitir;