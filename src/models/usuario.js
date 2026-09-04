const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const usuario = sequelize.define('usuario', {
    nome: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, allowNull: false, unique: true},
    senha: {type: DataTypes.STRING, allowNull: false},
    telefone: {type: DataTypes.INTEGER, allowNull: false},
    ctipo: {type: DataTypes.ENUM('automatico', 'manual'), allowNull: false},
    cmarca: {type: DataTypes.STRING, allowNull: false},
    cmodelo: {type: DataTypes.STRING, allowNull: false},
    cplaca: {type: DataTypes.STRING, allowNull: false, unique: true}
});

module.exports = usuario;