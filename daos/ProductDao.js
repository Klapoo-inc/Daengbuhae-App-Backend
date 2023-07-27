const Product = require('../models/payments/productModel');

const Create = async (req) => {

    const result = await Product.create(req);
    return result;
};

const GetCosmetic = async (req)=>{
    const result = await Product.findAll({
        where: {
            Cid: req.Cid,
        }
    });
    return result
}

module.exports = { Create, GetCosmetic };
