const { Sequelize, sequelize } = require('./sequelize');

const SearchList = sequelize.define('SearchList', {
    Uid: {
        type: Sequelize.STRING(128),
        allowNull: false,
        primaryKey: true,
        foreignKey: true,
    },
    Sid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    search: {
        type: Sequelize.STRING(128),
        allowNull: false,
    },
}, {
    tableName: "SearchList",
    paranoid: true,
});

module.exports = SearchList;
