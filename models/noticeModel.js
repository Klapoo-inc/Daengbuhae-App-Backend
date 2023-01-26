const { Sequelize, sequelize } = require('./sequelize');

const Notice = sequelize.define('Notice', {
    Nid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: Sequelize.STRING(128),
        allowNull: false,
    },
    content: {
        type: Sequelize.STRING(128),
        allowNull: false,
    },
}, {
    tableName: "Notice",
    paranoid: true,
});

module.exports = Notice;
