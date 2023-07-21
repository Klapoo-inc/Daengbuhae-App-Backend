const { Sequelize, sequelize } = require('../sequelize');

const Payment = sequelize.define('Payment', {
    PMid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    state: {
        type: Sequelize.STRING(45),
        allowNull: true,
    },
    Aid: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
    }
}, {
    tableName: "Payment",
    paranoid: true,
});

module.exports = Payment;
