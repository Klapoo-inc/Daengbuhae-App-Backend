const searchT = require('../models/tracking/userTracking')
const Create = async (req) => {
    const result = await searchT.create(req);
    return result;
};

module.exports = {Create}