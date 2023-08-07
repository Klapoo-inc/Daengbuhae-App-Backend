const Basket = require('../models/payments/basketModel');
const Cosmetic = require('../models/cosmeticModel');
const Product = require('../models/payments/productModel')
const Store = require('../models/payments/storeModel')
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
        include:[{
           model: Product,
            include: [{model:Store}]
        }],
        offset,
        limit,
    });
    return { data: data.rows, total: data.count }
}
const Delete = async (req)=>{
    const basket = await Basket.findByPk(req.Bid)
    const data = await basket.destroy()
    return data
}
const DeleteList = async (req)=>{
    const data =  await Promise.all(req.Bid.map(async (e)=>{
        const basket = await Basket.findByPk(e)
        const data = await basket.destroy()
        return data
    }))

    return data
}

module.exports = { Create, Search, Delete, DeleteList };
