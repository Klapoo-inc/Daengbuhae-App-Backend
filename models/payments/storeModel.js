const { Sequelize, sequelize } = require('../sequelize');

const Store = sequelize.define('Store', {
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
    tableName: "Store",
    paranoid: true,
});

module.exports = Store;
