const { Sequelize, sequelize } = require('../sequelize');

const Payment = sequelize.define('Payment', {
    PMid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    Uid: {
        type: Sequelize.STRING(128),
        allowNull: false,
    },
    amount: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    imp_uid: {
        type: Sequelize.STRING(128),
        allowNull: false,
    },
    merchant_uid: {
        type: Sequelize.STRING(128),
        allowNull: false,
    },
    payMethod: {
        type: Sequelize.STRING(128),
        allowNull: false,
        defaultValue: 0
    },
}, {
    tableName: "Payment",
    paranoid: true,
});

module.exports = Payment;
