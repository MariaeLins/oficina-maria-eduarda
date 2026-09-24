const express = require('express');
const sequelize = require('./config/database');
const usuarioRoutes = require('./routes/usuarioRoutes');
const authRoutes = require('./routes/authRoutes');
<<<<<<< HEAD
const livroRoutes = require("./routes/livroRoutes");
const movimentacaoRoutes = require("./routes/movimentacaoRoutes");
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(usuarioRoutes);
app.use(authRoutes);
app.use(livroRoutes);
app.use(movimentacaoRoutes);

sequelize.authenticate()
    .then(() => console.log('Conectado ao database...'))
=======
require('dotenv').config();

/*esse arquivo liga o servidor, conecta com o banco e deixa tudo pronto para receber as
rotas nos próximos módulos.*/
const app = express();
app.use(express.json());

app.use(usuarioRoutes);
app.use(authRoutes);

sequelize.authenticate()
    .then(() => console.log('Conectado ao banco de dados'))
>>>>>>> 8d56b2ebcfbe657d08e5daf0b7ecc010e42fbc19
    .catch(err => console.error('Erro ao conectar:', err));

sequelize.sync();

<<<<<<< HEAD
app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
=======
app.listen(3000, () =>console.log('Servidor rodando na porta 3000'));
>>>>>>> 8d56b2ebcfbe657d08e5daf0b7ecc010e42fbc19
