const fromRequest_get = (req) => {
    return {
        Uid: req.query.Uid,
        page: req.query.page,
        limit: req.query.limit,
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

const fromRequest_cosmetic_get =(req)=>{
    return {
        Cid: req.query.Cid,
    }
}

const fromRequest_create = (req) => {
    return {
        Uid: req.body.Uid,
        PDid: req.body.PDid,
        quentity: req.body.quentity
    };
};



module.exports = { fromRequest_get, fromDb_get, fromRequest_create,fromRequest_cosmetic_get, fromRequest_search };
