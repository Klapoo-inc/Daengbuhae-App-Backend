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
        allowNull: true,
    },
    EwgData: {
        type: Sequelize.STRING(128),
        allowNull: true,
    },
    Rating: {
        type: Sequelize.STRING(128),
        allowNull: false,
    },
    Color: {
        type: Sequelize.STRING(128),
        allowNull: true,
    },
    NInhibition: {
        type: Sequelize.STRING(4),
        allowNull: false,
    },
    NLimit: {
        type: Sequelize.STRING(4),
        allowNull: false,
    },
    Purpose: {
        type: Sequelize.JSON,
        allowNull: true,
    },
    Allergic: {
        type: Sequelize.STRING(4),
        allowNull: true,
    },
    Functional: {
        type: Sequelize.JSON,
        allowNull: true,
    },
    PPH: {
        type: Sequelize.JSON,
        allowNull: true,
    },
    ASPCA: {
        type: Sequelize.STRING(4),
        allowNull: true,
    },
}, {
    tableName: "Ingredient",
    paranoid: true,
});

module.exports = Ingredient;
