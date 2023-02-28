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
        Cid: db.Cid,
        Rid: db.Rid
    };
};

const fromRequest_create = (req) => {
    return {
        Cid: req.body.Cid,
        Uid: req.body.Uid,
        Pid: req.body.Pid,
        rating1: req.body.rating1,
        rating2: req.body.rating2,
        content: req.body.content,
        image1: req.body.image1,
        image2: req.body.image2,
        image3: req.body.image3,
        good: req.body.good
    };
};

const fromRequest_delete = (req) => {
    return {
        Rid: req.query.Rid
    };
};

module.exports = {fromDb_get, fromRequest_get, fromRequest_create, fromRequest_delete };
