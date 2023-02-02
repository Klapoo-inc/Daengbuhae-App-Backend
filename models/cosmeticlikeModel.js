const { Sequelize, sequelize } = require('./sequelize');

const CosmeticLike = sequelize.define('CosmeticLike', {
    Cid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
    },
    Uid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
    },
}, {
    tableName: "CosmeticLike",
    paranoid: true
});

module.exports = CosmeticLike;
