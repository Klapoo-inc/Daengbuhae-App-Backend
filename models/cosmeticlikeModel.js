const { Sequelize, sequelize } = require('./sequelize');

const CosmeticLike = sequelize.define('CosmeticLike', {
    Cid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    uid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
}, {
    tableName: "CosmeticLike",
    paranoid: true,
});

module.exports = CosmeticLike;
