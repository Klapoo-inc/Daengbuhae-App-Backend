require('dotenv').config();
const Sequelize = require('sequelize');

const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;
const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'mysql',
    port: 3306,
});

module.exports = { Sequelize, sequelize };
