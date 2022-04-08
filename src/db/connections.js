const { Sequelize } = require('sequelize');

//Configuracion de Sequelize necesaria para conectar a la db
const db = new Sequelize('mundo-disney', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false
});

module.exports = db;