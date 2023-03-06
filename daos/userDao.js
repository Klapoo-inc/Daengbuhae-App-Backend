const User = require('../models/userModel');

const Create = async (req) => {
    const result = await User.create({...req, maindog: 0, deleted:0});
    return result;
};
const Update = async (req, Uid) => {
    const user = await User.findByPk(Uid);
    const data = await user.update({ req});
    return data;
};
module.exports = {Create, Update}