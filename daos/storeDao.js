const Store= require('../models/payments/storeModel');
const Create = async (req) => {
    const result = Store.create(req)
    return result;
};


module.exports = { Create};
