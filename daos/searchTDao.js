const searchT = require('../models/tracking/searchTracking')
const Create = async (req) => {
    const result = await searchT.create(req);
    return result;
};

module.exports = {Create}