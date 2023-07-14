const { Sequelize, sequelize } = require('../sequelize');

const Payment = sequelize.define('Payment', {
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
    tableName: "Payment",
    paranoid: true,
});

module.exports = Payment;
