const { Sequelize, sequelize } = require('../sequelize');

const Basket = sequelize.define('Basket', {
    Pid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    read: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    src: {
        type: Sequelize.STRING(255),
        allowNull: true,
    },
}, {
    tableName: "Basket",
    paranoid: true,
});

module.exports = Basket;
