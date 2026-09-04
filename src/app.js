const express = require('express');
const sequelize = require('./config/database');
require('dotenv').config();

const app = express();
app.use(express.json());

sequelize.authenticate()
    .then(() => console.log('Conectando ao database...'))
    .catch(err => console.log('ERROR: erro ao conectar!', err));

app.listen(3000, () => console.log('Servidor na porta 3000'));