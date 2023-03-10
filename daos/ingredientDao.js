const Cosmetic = require('../models/cosmeticModel')
const Ingredient = require('../models/ingredientModel');
const CosmeticIngredient = require('../models/cosmeticingredientModel');
const { Op } = require('sequelize');

const get = async (Cid) => {
    const cosmetic = await Cosmetic.findByPk(Cid);
    const ingredients = await CosmeticIngredient.findAll({
        where: {
            Cid: Cid,
        },
        attributes: ['Iid']
    });
    const data = await Ingredient.findAll({
        where: {
            [Op.or]: ingredients.map((value, index, array) => {
                return { Iid: value.Iid };
            })
        },
    });
    if (data.length > 0) {
        for (const i of data) {
            if (i.Purpose && Object.keys(i.Purpose).length) {
                i.Purpose = Object.values(i.Purpose);
            }
            if (i.Functional && Object.keys(i.Functional).length) {
                i.Functional = Object.values(i.Functional);
            }
        }
    }
    return {
        CountRating: cosmetic.CountRating,
        CountColor: cosmetic.CountColor,
        PPH: cosmetic.PPH,
        CountFunctional: cosmetic.CountFunctional,
        NInhibition: cosmetic.NInhibition,
        NLimit: cosmetic.NLimit,
        Allergic: cosmetic.Allergic,
        data: data
    };
};
const search = async (title, page, limit) => {
    const offset = (page - 1) * limit;
    const query = {
        [Op.and]: [
            {
                [Op.or]: [
                    Ingredient.sequelize.where(Ingredient.sequelize.fn('CONCAT', Ingredient.sequelize.fn('REGEXP_REPLACE', Ingredient.sequelize.col('title_en'), ' ', ''), ' '), {
                        [Op.like]: Ingredient.sequelize.fn('CONCAT', '%', Ingredient.sequelize.fn('REGEXP_REPLACE', title, ' ', ''), '%')
                    }),
                    Ingredient.sequelize.where(Ingredient.sequelize.fn('CONCAT', Ingredient.sequelize.fn('REGEXP_REPLACE', Ingredient.sequelize.col('title_ko'), ' ', ''), ' '), {
                        [Op.like]: Ingredient.sequelize.fn('CONCAT', '%', Ingredient.sequelize.fn('REGEXP_REPLACE', title, ' ', ''), '%')
                    }),
                ]
            },
        ]
    };
    const data = await Ingredient.findAndCountAll({
        where: query,
        offset,
        limit
    });
    return { data: data.rows, total: data.count };
};
module.exports = { get, search };
