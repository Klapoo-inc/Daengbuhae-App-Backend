const User = require('../models/userModel');
const Pet = require("../models/petModel");

const Create = async (req) => {
    const [user, created] = await User.findOrCreate({paranoid:false ,where: {Uid: req.Uid}, defaults: {...req, maindog: 0, deleted:0}});
    if(created){
        const result = user.update({...req, deletedAt:null})
        return result
    }
    return user;
};
const Update = async (req, Uid) => {
    const user = await User.findByPk(Uid);
    const data = await user.update({ ...req});
    return data;
};
const Delete = async (Uid) => {
    const data = await User.findByPk(Uid);
    if (!data) {
        return null;
    }
    const pets = await data.getPets();
    // pets.map(async (pet)=>{
    //     await pet.destroy()
    // })
    await data.destroy();
    return data;
};
const Get = async (Uid) => {
    const data = await User.findOne({
        where: {
            Uid: Uid,
        }
    });
    return data;
};
module.exports = {Create, Update, Delete, Get}