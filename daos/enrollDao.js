const Enroll = require('../models/enrollModel');

const Create = async (category, title, brand, image1 = null, image2 = null, image3 = null) => {
    const result = await Enroll.create({
        category: category,
        title: title,
        brand: brand,
        state: 0,
        image1: image1,
        image2: image2,
        image3: image3,
    });
    return result;
};

module.exports = { Create };
