const { Sequelize, sequelize } = require('../sequelize');
const Basket = require('./basketModel')
const Product = sequelize.define('Product', {
    PDid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    src: {
        type: Sequelize.STRING(255),
        allowNull: true,
    },
    Storeid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    saleprice: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    state: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    quentity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    Cid: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    refund: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },

}, {
    tableName: "Product",
    paranoid: true,
});

Product.hasMany(Basket, { foreignKey: 'PDid', targetKey: 'PDid' });
Basket.belongsTo(Product, { foreignKey: 'PDid', sourceKey: 'PDid' });
module.exports = Product;
