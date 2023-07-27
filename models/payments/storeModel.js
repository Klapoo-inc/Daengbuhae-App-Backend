const { Sequelize, sequelize } = require('../sequelize');
const Product = require('./productModel')

const Store = sequelize.define('Store', {
    Storeid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING(255),
        allowNull: false,
        defaultValue: '상점'
    },
    token: {
        type: Sequelize.STRING(255),
        allowNull: true,
    },
    delivery_fee: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    free_delivery: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    refund_fee: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
}, {
    tableName: "Store",
    paranoid: true,
});
Store.hasMany(Product, { foreignKey: 'Storeid', targetKey: 'Storeid' });
Product.belongsTo(Store, { foreignKey: 'Storeid', sourceKey: 'Storeid' });
module.exports = Store;
