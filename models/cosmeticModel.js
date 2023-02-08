const { Sequelize, sequelize } = require('./sequelize');

const Cosmetic = sequelize.define('Cosmetic', {
    Cid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    title: {
        type: Sequelize.STRING(128),
        allowNull: false,
    },
    brand: {
        type: Sequelize.STRING(128),
        allowNull: false,
    },
    SCategory: {
        type: Sequelize.STRING(128),
        allowNull: false,
    },
    BCategory: {
        type: Sequelize.STRING(128),
        allowNull: false,
    },
    src: {
        type: Sequelize.STRING(255),
        allowNull: true,
    },
    AvgRating: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
    read: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    NInhibition: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    NLimit: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    Allergic: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    CountFunctional: {
        type: Sequelize.JSON,
        allowNull: false,
    },
    CountRating: {
        type: Sequelize.JSON,
        allowNull: false,
    },
    CoupangSrc: {
        type: Sequelize.STRING(255),
        allowNull: true,
    },
    CountColor: {
        type: Sequelize.JSON,
        allowNull: false,
    },
    PPH: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
}, {
  tableName: "Cosmetic",
    paranoid: true,
});

module.exports = Cosmetic;
