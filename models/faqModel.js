const { Sequelize, sequelize } = require('./sequelize');

const FAQ = sequelize.define('FAQ', {
    Fid: {
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
    tableName: "FAQ",
    paranoid: true,
});

module.exports = FAQ;
