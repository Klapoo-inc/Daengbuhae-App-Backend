const fromRequest_get = (req) => {
    return {
        Cid: req.query.Cid,
    };
};
const fromRequest_update = (req) => {
    return {
        Cid: req.body.Cid,
        rating: req.body.rating
    };
};
const fromCosmeticRequest_update = (req) => {
    return {
        Cid: req.body.Cid,
        rating: req.body.rating1
    };
};

module.exports = { fromRequest_get, fromCosmeticRequest_update, fromRequest_update}