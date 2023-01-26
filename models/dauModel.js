const { Sequelize, sequelize } = require('./sequelize');

const DAU = sequelize.define('DAU', {
    data: {
        type: Sequelize.DATE,
        allowNull: false,
        primaryKey: true,
    },
    DAU: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
}, {
    tableName: "DAU",
    paranoid: true,
});

module.exports = DAU;
