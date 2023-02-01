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
    return {
        CountRating: cosmetic.CountRating,
        CountFunctional: cosmetic.CountFunctional,
        NInhibition: cosmetic.NInhibition,
        NLimit: cosmetic.NLimit,
        Allergic: cosmetic.Allergic,
        data: data
    };
};

module.exports = { get };
