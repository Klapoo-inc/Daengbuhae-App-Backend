const { Sequelize, sequelize } = require('../sequelize');

const Address = sequelize.define('Address', {
    Aid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    Uid: {
        type: Sequelize.STRING(128),
        allowNull: false,
    },
    name: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    address: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    addressdetail: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    postnum: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    phonenumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
}, {
    tableName: "Address",
    paranoid: true,
});

module.exports = Address;
