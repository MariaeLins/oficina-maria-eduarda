const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const {cadastrar} = require('../controllers/usuarioController');

router.post('/usuarios', cadastrar);

=======
const { cadastrar } = require('../controllers/usuarioController');
router.post('/usuarios', cadastrar);

/*essa rota que vai fazer o mundo exterior conseguir
chamar a função cadastrar*/
>>>>>>> 8d56b2ebcfbe657d08e5daf0b7ecc010e42fbc19
module.exports = router;