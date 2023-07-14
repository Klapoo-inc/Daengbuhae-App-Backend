const Product = require('../models/payments/productModel');

const Create = async (req) => {

    const result = await Product.create({
        PDid: req.PDid,
        title: req.title,
        src: req.src,
        Storeid: req.Storeid,
        price: req.price,
        saleprice: req.saleprice,
        state: req.state,
        quentity: req.quentity,
        Cid: req.Cid,
    });
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
