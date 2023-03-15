const CosmeticReview = require('../models/cosmeticreviewModel');
const { Op } = require('sequelize');
const Pet = require('../models/petModel');
const Cosmetic = require('../models/cosmeticModel');
const CosmeticRatingDto = require("../dtos/cosmeticratingDto");
const CosmeticRatingDao = require("./cosmeticratingDao");

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
        const cosmetic = await Cosmetic.findAll({
            where: {
                [Op.or]: data.rows.map((value, index, array) => {
                    return { Cid: value.Cid };
                })
            },
        });
        return { total: data.count, data: data.rows, cosmetic: cosmetic };
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
const Update = async (Rid, req) => {
    const review = await CosmeticReview.findByPk(Rid);
    const requestrating = CosmeticRatingDto.fromCosmeticRequest_update({body:review.dataValues})
    const cosmeticrating = await CosmeticRatingDao.Update(requestrating,-1)
    const result = await review.update(req);
    const requestrating2 = CosmeticRatingDto.fromCosmeticRequest_update({body:result.dataValues})
    const cosmeticrating2 = await CosmeticRatingDao.Update(requestrating2,1)
    return {review:result, rating:cosmeticrating2};
};
module.exports = {Update, Get, Create, Delete };
