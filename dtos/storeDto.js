const fromRequest_get = (req) => {
    return {
        Aid: req.query.Aid
    };
};

const fromRequest_search = (req) => {
    return {
        Uid: req.body.Uid,
        page: req.body.page? req.body.page:1,
        limit: req.body.limit? req.body.limit:10,
    };
};
const fromDb_get = (db) => {
    return {
        PDid: db.PDid
    };
};

const fromRequest_create = (req) => {
    return {
        name: req.body.name,
        token: req.body.token,
        delivery_fee: req.body.delivery_fee,
        free_delivery: req.body.free_delivery,
        refund_fee: req.body.refund_fee
    };
};



module.exports = { fromRequest_get, fromDb_get, fromRequest_create, fromRequest_search };
