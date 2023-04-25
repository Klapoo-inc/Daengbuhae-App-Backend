const { Sequelize, sequelize } = require('../sequelize');

const CosmeticTracking = sequelize.define('CosmeticTracking', {
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
    Cid: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    state: {
        type: Sequelize.STRING(128),
        allowNull: false,
    }
}, {
    tableName: "CosmeticTracking",
    paranoid: true,
});

module.exports = CosmeticTracking;
