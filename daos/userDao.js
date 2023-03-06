const User = require('../models/userModel');

const Create = async (req) => {
    const result = await User.create({...req, maindog: 0, deleted:0});
    return result;
};

module.exports = {Create}