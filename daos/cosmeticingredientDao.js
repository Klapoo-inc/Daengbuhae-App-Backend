const CosmeticIngredient = require("../models/cosmeticingredientModel");
const Create = async (req) => {
    const ingredients = req.ingredients
    console.log(ingredients)
    const cid =req.Cid
    const data = ingredients.map((iid)=>{
        return {Cid:cid, Iid:iid}
    })
    const result = CosmeticIngredient.sync({force: false}).then(() => {
        CosmeticIngredient.bulkCreate(data).then(() => {
            // console.log("Data1 imported successfully");
        });
    }).catch(error => {
        // console.log("Error creating table", error)
    });

    return result;
};
module.exports = { Create}