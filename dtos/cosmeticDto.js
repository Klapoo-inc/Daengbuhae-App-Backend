const fromRequest_search = (req) => {
    return {
        title: req.body.title,
        SCategory: req.body.SCategory,
        BCategory: req.body.BCategory,
        NInhibition: req.body.NInhibition,
        NLimit: req.body.NLimit,
        Allergic: req.body.Allergic,
        filter: req.body.filter,
        page: req.body.page,
        limit: req.body.limit,
    };
};

const fromDb_search = (db) => {
    return {
        Cid: db.Cid,
        title: db.title,
        brand: db.brand,
        src: db.src,
    };
};

const fromRequest_get = (req) => {
    return {
        Cid: req.body.Cid,
    };
};

const fromDb_get = (db) => {
    return {
        title: db.title,
        brand: db.brand,
        src: db.src,
        AvgRating: db.AvgRating,
        read: db.read,
    };
};

module.exports = { fromRequest_search, fromDb_search, fromRequest_get, fromDb_get };
