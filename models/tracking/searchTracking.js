const { Sequelize, sequelize } = require('../sequelize');

const SearchTracking = sequelize.define('SearchTracking', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    Uid: {
        type: Sequelize.STRING(128),
        allowNull: false,
    },
    query:{
        type: Sequelize.JSON,
        allowNull: false,
    }
}, {
    tableName: "SearchTracking",
    paranoid: true,
});

module.exports = SearchTracking;
