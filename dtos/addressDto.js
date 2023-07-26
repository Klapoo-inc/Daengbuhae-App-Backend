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
        Uid: req.body.Uid,
        name: req.body.name,
        address: req.body.address,
        addressdetail: req.body.addressdetail,
        postnum: req.body.postnum,
        phonenumber: req.body.phonenumber
    };
};



module.exports = { fromRequest_get, fromDb_get, fromRequest_create, fromRequest_search };
