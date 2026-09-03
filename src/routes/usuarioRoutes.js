const express = require('express');
const router = express.Router();
const { cadastrar } = require('../controllers/usuarioController');
router.post('/usuarios', cadastrar);

/*essa rota que vai fazer o mundo exterior conseguir
chamar a função cadastrar*/
module.exports = router;