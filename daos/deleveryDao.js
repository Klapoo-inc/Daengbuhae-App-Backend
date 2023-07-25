const Delivery = require('../models/payments/deliveryModel');

const Create = async (req) => {

    const result = await Delivery.create(req);
    return result;
};



module.exports = { Create };
