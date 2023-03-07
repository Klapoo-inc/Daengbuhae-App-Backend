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
        BCategory: db.BCategory,
        SCategory: db.SCategory,
        AvgRating: db.AvgRating,
        read: db.read,
        CoupangSrc: db.CoupangSrc,
    };
};
const fromRequest_create =(req) => {
    return {
        Cid: req.body.Cid,
        title: req.body.title,
        brand: req.body.brand,
        SCategory: req.body.SCategory,
        BCategory: req.body.BCategory,
        NInhibition: req.body.NInhibition,
        NLimit: req.body.NLimit,
        Allergic: req.body.Allergic,
        PPH: req.body.PPH,
        src: req.body.src,
        CoupnagSrc: req.body.CoupnagSrc,
        CountFunctional: req.body.CountFunctional,
        CountRating: req.body.CountRating,
        CountColor: req.body.CountColor
    }
}
const fromRequest_delete =(req) => {
    return{
        Cid: req.query.Cid
    }
}

module.exports = { fromRequest_search, fromDb_search, fromRequest_get, fromDb_get, fromRequest_create, fromRequest_delete };
