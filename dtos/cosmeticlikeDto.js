const fromRequest_get = (req) => {
    return {
        Cid: req.query.Cid,
        Uid: req.query.Uid,
        page: Number(req.query.page),
        limit: Number(req.query.limit)
    };
};

const fromDb_get = (db) => {
    return {
        Uid: db.Uid,
        Cid: db.Cid,
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

module.exports = { fromRequest_get, fromDb_get, fromRequest_create, fromRequest_delete };
