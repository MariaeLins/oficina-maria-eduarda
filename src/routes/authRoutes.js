const express = require('express');
const router = express.Router();
const { login } = require('../controllers/authController');
<<<<<<< HEAD

router.post('/login', login);

=======
router.post('/login', login);

/*quando alguém fizer uma requisição POST para o endereço /login, execute a função login*/
>>>>>>> 8d56b2ebcfbe657d08e5daf0b7ecc010e42fbc19
module.exports = router;