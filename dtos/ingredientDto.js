const fromRequest_get = (req) => {
    return {
        Cid: req.body.Cid,
    };
};

const fromDb_get = (db) => {
    return {
        title_en: db.title_en,
        title_ko: db.title_ko,
        EwgGrade: db.EwgGrade,
        EwgData: db.EwgData,
        Rating: db.Rating,
        Color: db.Color,
        NInhibition: db.NInhibition,
        NLimit: db.NLimit,
        Purpose: db.Purpose,
        Allergic: db.Allergic,
        Functional: db.Functional,
        PPH: db.PPH,
        ASPCA: db.ASPCA,
        Iid: db.Iid
    };
};
const fromDb_search = (db) => {
    return {
        Iid: db.Iid,
        title_en: db.title_en,
        title_ko: db.title_ko
    };
};
const fromRequest_search = (req) => {
    return {
        title: req.body.title,
    };
};

module.exports = { fromRequest_get, fromDb_get, fromDb_search, fromRequest_search };
