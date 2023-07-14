const { Sequelize, sequelize } = require('../sequelize');

const Address = sequelize.define('Address', {
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
    tableName: "Address",
    paranoid: true,
});

module.exports = Address;
