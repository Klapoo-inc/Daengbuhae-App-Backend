const { Sequelize, sequelize } = require('./sequelize');

const SearchList = sequelize.define('SearchList', {
    Sid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    Uid: {
        type: Sequelize.STRING(128),
        allowNull: false,
        foreignKey: true,
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
