const fromRequest_get = (req) => {
    return {
        Cid: req.query.Cid,
        Uid: req.query.Uid
    };
};

const fromRequest_create = (req) => {
    return {
        Cid: req.body.Cid,
        Uid: req.body.Uid
    };
};

const fromRequest_delete = (req) => {
    return {
        Cid: req.query.Cid,
        Uid: req.query.Uid
    };
};

module.exports = { fromRequest_get, fromRequest_create, fromRequest_delete };
