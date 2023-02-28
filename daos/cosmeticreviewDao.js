const CosmeticReview = require('../models/cosmeticreviewModel');
const { Op } = require('sequelize');
const Pet = require('../models/petModel');

const Get = async (Cid, Uid, page, limit) => {
    const offset = (page - 1) * limit;

    if (Cid && Uid) {
        const data = await CosmeticReview.findAndCountAll({
            where: {
                Cid: Cid,
                Uid: Uid
            },
            offset,
            limit
        });



    }else if (Cid) {
        const data = await CosmeticReview.findAndCountAll({
            where: {
                Cid: Cid
            },
            offset,
            limit
        });
        const pet = await Pet.findAll({
            where: {
                [Op.or]: data.rows.map((value, index, array) => {
                    return { Pid: value.Pid };
                })
            },
        });
        return { total: data.count, data: data.rows, pet: pet };
    }else if (Uid) {
        const data = await CosmeticReview.findAndCountAll({
            where: {
                Uid: Uid
            },
            offset,
            limit
        });
        return { total: data.count, data: data.rows };
    }



};

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

module.exports = {Get, Create, Delete };
