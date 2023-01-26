const { Sequelize, sequelize } = require('./sequelize');

const Ingredient = sequelize.define('Ingredient', {
    Iid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    title_en: {
        type: Sequelize.STRING(128),
        allowNull: false,
    },
    title_ko: {
        type: Sequelize.STRING(128),
        allowNull: false,
    },
    EwgGrade: {
        type: Sequelize.STRING(128),
        allowNull: false,
    },
    EwgData: {
        type: Sequelize.STRING(128),
        allowNull: false,
    },
    Rating: {
        type: Sequelize.STRING(128),
        allowNull: false,
    },
    Color: {
        type: Sequelize.STRING(128),
        allowNull: false,
    },
    NInhibition: {
        type: Sequelize.STRING(128),
        allowNull: false,
    },
    NLimit: {
        type: Sequelize.STRING(128),
        allowNull: false,
    },
    Purpose: {
        type: Sequelize.JSON,
        allowNull: true,
    },
    Allergic: {
        type: Sequelize.JSON,
        allowNull: true,
    },
    Functional: {
        type: Sequelize.JSON,
        allowNull: true,
    },
}, {
    tableName: "Ingredient",
    paranoid: true,
});

module.exports = Ingredient;
