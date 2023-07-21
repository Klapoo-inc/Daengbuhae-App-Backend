const Payment = require('../models/payments/paymentModel');

const Create = async (req) => {

    const result = await Payment.create(req);
    return result;
};



module.exports = { Create };
