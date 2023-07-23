const { Sequelize, sequelize } = require('../sequelize');

const Delivery = sequelize.define('Delivery', {
    delivery_uid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    delivery_num: {
        type: Sequelize.STRING(255),
        allowNull: true,
    },
    Aid:{
        type: Sequelize.INTEGER,
        allowNull: false,
    }
}, {
    tableName: "Delivery",
    paranoid: true,
});

module.exports = Delivery;
