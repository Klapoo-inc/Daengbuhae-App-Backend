const fromRequest_create = (req) => {
    return {
        title: req.body.title,
        brand: req.body.brand,
        image1: req.body.image1,
        image2: req.body.image2,
        image3: req.body.image3,
    };
};

module.exports = { fromRequest_create };
