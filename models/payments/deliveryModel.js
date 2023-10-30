const { Sequelize, sequelize } = require('../sequelize');
const Address = require('./addressModel')

const Delivery = sequelize.define('Delivery', {
    delivery_uid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    delivery_num: {
        type: Sequelize.STRING(255),
        allowNull: true,
    },
    Aid:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    Uid: {
        type: Sequelize.STRING(128),
        allowNull: false,
    },
    delivery_fee: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    state:{
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'ready'
    }
}, {
    tableName: "Delivery",
    paranoid: true,
});
Address.hasMany(Delivery, { foreignKey: 'Aid', targetKey: 'Aid' });
Delivery.belongsTo(Address, { foreignKey: 'Aid', sourceKey: 'Aid' });

module.exports = Delivery;
