const { Sequelize, sequelize } = require('./sequelize');

const Enroll = sequelize.define('Enroll', {
    Eid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    category: {
        type: Sequelize.STRING(128),
        allowNull: false,
    },
    title: {
        type: Sequelize.STRING(128),
        allowNull: false,
    },
    brand: {
        type: Sequelize.STRING(128),
        allowNull: false,
    },
    state: {
        type: Sequelize.TINYINT,
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
}, {
    tableName: "Enroll",
    paranoid: true,
});

module.exports = Enroll;
