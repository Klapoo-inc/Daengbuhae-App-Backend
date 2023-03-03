const { Sequelize, sequelize } = require('./sequelize');

const UserSearch = sequelize.define('UserSearch', {
    Sid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    Uid: {
        type: Sequelize.STRING(255),
        allowNull: false,
        foreignKey: true,
    },
    search: {
        type: Sequelize.STRING(255),
        allowNull: true,
        foreignKey: true,
    },
}, {
    tableName: "UserSearch",
    paranoid: true
});

module.exports = UserSearch;
