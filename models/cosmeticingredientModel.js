const { Sequelize, sequelize } = require('./sequelize');

const CosmeticIngredient = sequelize.define('CosmeticIngredient', {
    Cid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
    },
    Iid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
    },
}, {
    tableName: "CosmeticIngredient",
    paranoid: true,
});

module.exports = CosmeticIngredient;
