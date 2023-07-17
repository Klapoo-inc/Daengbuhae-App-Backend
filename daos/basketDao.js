const Basket = require('../models/payments/basketModel');

const Create = async (req) => {
    const result = req.products.map(async(value)=> {
        await Basket.create({
            PDid: value.PDid,
            Uid: req.Uid,
            quentity: value.quentity
        });
    })
    return result;
};

const Search = async (req)=>{
    const page = req.page
    const limit = req.limit
    const offset = (page - 1) * limit;
    const data = await Basket.findAndCountAll({
        where: {
            Uid: req.Uid,
        },
        offset,
        limit,
    });
    return { data: data.rows, total: data.count }
}

module.exports = { Create, Search };
