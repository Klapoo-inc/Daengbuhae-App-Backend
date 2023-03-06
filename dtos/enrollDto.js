const fromRequest_create = (req) => {
    return {
        category: req.body.category,
        title: req.body.title,
        brand: req.body.brand,
        image1: req.body.image1,
        image2: req.body.image2,
        image3: req.body.image3,
    };
};

module.exports = { fromRequest_create };
