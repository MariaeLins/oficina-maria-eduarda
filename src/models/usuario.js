const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const usuario = sequelize.define('usuario', {
    nome: {type: DataTypes.STRING, allowNull: false},

    email: {type: DataTypes.STRING, allowNull: false, unique: true},

    senha: {type: DataTypes.STRING, allowNull: false},

    num_de_tel: {type: DataTypes.STRING, allowNull: false},

    modelo_carro: {type: DataTypes.STRING, allowNull: false},

    placa_carro: {type: DataTypes.STRING, allowNull: false, 
    unique: true}
});

module.exports = usuario;