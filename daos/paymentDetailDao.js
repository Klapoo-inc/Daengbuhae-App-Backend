const PaymentDetail = require('../models/payments/paymentDetailModel');

const Create = async (req, PMid, delivery_uid) => {

    const result = await PaymentDetail.create({
        ...req,
        PMid: PMid,
        delivery_uid:delivery_uid

    });
    return result;
};



module.exports = { Create };
