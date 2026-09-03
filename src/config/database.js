const { Sequelize } = require('sequelize');
require('dotenv').config();

/*esse arquivo cria a conexão com o banco de dados usando os dados do .env, e deixa
essa conexão pronta para qualquer outro arquivo do projeto usar.*/
const sequelize = new Sequelize(
process.env.DB_NAME,
process.env.DB_USER,
process.env.DB_PASSWORD,
{
host: process.env.DB_HOST,
port: process.env.DB_PORT,
dialect: 'mysql',
}
);
module.exports = sequelize;