const { Sequelize, sequelize } = require('./sequelize');

const Enroll = sequelize.define('Enroll', {
    Eid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
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
}, {
    tableName: "Enroll",
    paranoid: true,
});

module.exports = Enroll;
