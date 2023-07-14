const { Sequelize, sequelize } = require('../sequelize');

const Delivery = sequelize.define('delivery', {
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
    tableName: "Delivery",
    paranoid: true,
});

module.exports = Delivery;
