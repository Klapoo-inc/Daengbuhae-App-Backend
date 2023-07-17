const { Sequelize, sequelize } = require('../sequelize');

const Basket = sequelize.define('Basket', {
    Bid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    Uid: {
        type: Sequelize.STRING(128),
        allowNull: false,
    },
    PDid: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    quentity: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
}, {
    tableName: "Basket",
    paranoid: true,
});

module.exports = Basket;
