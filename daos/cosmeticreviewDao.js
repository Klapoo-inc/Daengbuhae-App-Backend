const CosmeticReview = require('../models/cosmeticreviewModel');

// const Get = async (Cid, Uid, page, limit) => {
//     if (Cid) {
//         const data = await CosmeticReview.findOne({
//             where: {
//                 Cid: Cid,
//                 Uid: Uid
//             }
//         });
//         return data;
//     }
//     const offset = (page - 1) * limit;
//     const data = await CosmeticReview.findAndCountAll({
//         where: {
//             Uid: Uid
//         },
//         offset,
//         limit
//     })
//     return { total: data.count, data: data.rows };
// };

const Create = async (req) => {
    const result = await CosmeticReview.create({
        ...req,
        good:0
    });
    return result;
};

const Delete = async (Rid) => {
    const data = await CosmeticReview.findOne({
        where: {
            Rid: Rid
        }
    });
    if (!data) {
        return null;
    }
    await data.destroy();
    return data;
};

module.exports = { Create, Delete };
