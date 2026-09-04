const express = require('express');
const router = express.router();
const {cadastrar} = require('../controllers/usuarioController');

router.post('/usuario', cadastrar);

module.exports = router;