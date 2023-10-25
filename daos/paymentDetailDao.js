const PaymentDetail = require('../models/payments/paymentDetailModel');
const Product = require("../models/payments/productModel");
const Payment = require("../models/payments/paymentModel");
const Delivery = require("../models/payments/deliveryModel");
const Store = require("../models/payments/storeModel")
const Address = require("../models/payments/addressModel")

const Create = async (req, PMid, delivery_uid) => {

    const result = await PaymentDetail.create({
        ...req,
        PMid: PMid,
        delivery_uid:delivery_uid

    });
    return result;
};

const SearchByUser = async (Uid) => {
    const data = await PaymentDetail.findAndCountAll({
        where: {
            Uid: Uid
        },
        include:[{
            model: Product,
        },{
            model: Delivery,
            include: [{
                model:Address
            }]
        },{
            model: Payment,
        }],

        order: [['createdAt', 'DESC']],
    });
    return { data: data.rows, total: data.count }
};
const Get = async (req) => {
    const data = await PaymentDetail.findByPk(req.PMDid,{
        include:[{
            model: Product,
            include: [{
                model:Store
            }]
        },{
            model: Delivery,
        },{
            model: Payment,
        }],
    });
    return data
};
const Update = async  (req)=>{
    const data = await PaymentDetail.findByPk(req.PMDid)
    const updateData = await data.update({state: req.state})
    return updateData
}

module.exports = { Create, SearchByUser, Get, Update };
