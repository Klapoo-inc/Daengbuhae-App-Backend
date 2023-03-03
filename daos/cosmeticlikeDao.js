const CosmeticLike = require('../models/cosmeticlikeModel');

const Get = async (Cid, Uid, page, limit) => {
    if (Cid) {
        const data = await CosmeticLike.findOne({
            where: {
                Cid: Cid,
                Uid: Uid
            }
        });
        return {data: [data]};
    }
    const offset = (page - 1) * limit;
    const data = await CosmeticLike.findAndCountAll({
        where: {
            Uid: Uid
        },
        offset,
        limit
    })
    return { total: data.count, data: data.rows };
};

const Create = async (Cid, Uid) => {
    const result = await CosmeticLike.create({
        Cid: Cid,
        Uid: Uid
    });
    return result;
};

const Delete = async (Cid, Uid) => {
    const data = await CosmeticLike.findOne({
        where: {
            Cid: Cid,
            Uid: Uid
        }
    });
    if (!data) {
        return null;
    }
    await data.destroy();
    return data;
};

module.exports = { Get, Create, Delete };
