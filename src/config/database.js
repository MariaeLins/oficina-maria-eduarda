const { Sequelize } = require('sequelize');
require('dotenv').config();

<<<<<<< HEAD
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

=======
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
>>>>>>> 8d56b2ebcfbe657d08e5daf0b7ecc010e42fbc19
module.exports = sequelize;