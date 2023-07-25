const { Sequelize, sequelize } = require('../sequelize');

const Product = require('./productModel')
const Delivery = require('./deliveryModel')
const Payment = require('./paymentModel')

const PaymentDetail = sequelize.define('PaymentDetail', {
    PMDid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    state: {
        type: Sequelize.STRING(45),
        allowNull: true,
    },
    PDid:{
        type: Sequelize.INTEGER,
        allowNull: true
    },
    quentity:{
        type: Sequelize.INTEGER,
        allowNull: true
    },
    delivery_uid:{
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    PMid:{
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    Uid:{
        type: Sequelize.STRING(128),
        allowNull: false,
    },
    date:{
        type: Sequelize.DATEONLY,
        allowNull: false,
    }
}, {
    tableName: "PaymentDetail",
    paranoid: true,
});

module.exports = PaymentDetail;


Product.hasMany(PaymentDetail, { foreignKey: 'PDid', targetKey: 'PDid' });
PaymentDetail.belongsTo(Product, { foreignKey: 'PDid', sourceKey: 'PDid' });

Delivery.hasMany(PaymentDetail, { foreignKey: 'delivery_uid', targetKey: 'delivery_uid' });
PaymentDetail.belongsTo(Delivery, { foreignKey: 'delivery_uid', sourceKey: 'delivery_uid' });

Payment.hasMany(PaymentDetail, { foreignKey: 'PMid', targetKey: 'PMid' });
PaymentDetail.belongsTo(Payment, { foreignKey: 'PMid', sourceKey: 'PMid' });