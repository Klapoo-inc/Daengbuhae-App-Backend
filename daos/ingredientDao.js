const Ingredient = require('../models/ingredientModel');
const CosmeticIngredient = require('../models/cosmeticingredientModel');
const { Op } = require('sequelize');

const get = async (Cid) => {
    const ingredients = await CosmeticIngredient.findAll({
        where: {
            Cid: Cid,
        },
    });
    const data = await Ingredient.findAll({
        where: {
            [Op.or]: ingredients.map((value, index, array) =>{
                return { Iid: value.Iid };
            })
        },
    });
    return data;
};

module.exports = { get };
