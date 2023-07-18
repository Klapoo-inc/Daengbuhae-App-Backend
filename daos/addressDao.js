const Address= require('../models/payments/addressModel');
const Create = async (req) => {
    const result = Address.create(req)
    return result;
};

const Search = async (req)=>{
    const page = req.page
    const limit = req.limit
    const offset = (page - 1) * limit;
    const data = await Address.findAndCountAll({
        where: {
            Uid: req.Uid,
        }
    });
    return { data: data.rows, total: data.count }
}

module.exports = { Create, Search };
