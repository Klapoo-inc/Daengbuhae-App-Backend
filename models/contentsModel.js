const { Sequelize, sequelize } = require('./sequelize');

const Contents = sequelize.define('Contents', {
    CTid: {
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
    tableName: "Contents",
    paranoid: true,
});

module.exports = Contents;
