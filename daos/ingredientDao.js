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

module.exports = { get };
