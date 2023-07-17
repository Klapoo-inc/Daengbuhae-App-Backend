const { Sequelize, sequelize } = require('./models/sequelize');
const Product = require("./models/payments/productModel");
const Cosmetic = require("./models/cosmeticModel")

Cosmetic.hasMany(Product, { foreignKey: 'Cid', sourceKey: 'Cid' });
Product.belongsTo(Cosmetic, { foreignKey: 'Cid', targetKey: 'Cid' });
(async () => {
    try {
        await sequelize.sync({ force: false });
        console.log('Database and tables synced!');
    } catch (error) {
        console.error('Error syncing database:', error);
    }
})();

