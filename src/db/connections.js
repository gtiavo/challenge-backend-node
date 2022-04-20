const { Sequelize } = require('sequelize');

//Configuracion de Sequelize necesaria para conectar a la db
// const db = new Sequelize('mundo-disney', 'root', '', {
//     host: 'localhost',
//     dialect: 'mysql',
//     // logging: false
// });

const dbName = 'bguegu81ajwbkpppw8dp';
const user = 'uzrpkf9flvp7rt0d';
const password = '1WLAfKVZQJRMpGghKRWb';
const host = 'bguegu81ajwbkpppw8dp-mysql.services.clever-cloud.com'

const db = new Sequelize( dbName, user, password, {
    host: host,
    dialect: 'mysql',
    // logging: false
});

module.exports = db;