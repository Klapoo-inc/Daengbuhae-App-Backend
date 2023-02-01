const { Sequelize, sequelize } = require('./sequelize');

const CosmeticReview = sequelize.define('CosmeticReview', {
    Rid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    Cid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
    },
    Uid: {
        type: Sequelize.STRING(128),
        allowNull: false,
        foreignKey: true,
    },
    Pid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
    },
    rating1: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    rating2: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    image1: {
        type: Sequelize.STRING(255),
        allowNull: true,
    },
    image2: {
        type: Sequelize.STRING(255),
        allowNull: true,
    },
    image3: {
        type: Sequelize.STRING(255),
        allowNull: true,
    },
    good: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
}, {
    tableName: "CosmeticReview",
    paranoid: true,
});

module.exports = CosmeticReview;
