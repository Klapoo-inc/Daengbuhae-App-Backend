const fromRequest_get = (req) => {
    return {
        PDid: req.PDid
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
        state: req.body.state,
        Aid: req.body.Aid,
        Uid : req.body.Uid,
        amount : req.body.amount,
        imp_uid: req.body.imp_uid,
        merchant_uid: req.body.merchant_uid,
        payMethod: req.body.payMethod
    };
};

const fromRequest_update = (req) => {
    return {
        PDid: req.PDid,
        title: req.title,
        src: req.src,
        Storeid: req.Storeid,
        price: req.price,
        saleprice: req.saleprice,
        state: req.state,
        quentity: req.quentity,
        Cid: req.Cid,
    };
};
const fromRequest_delete = (req) => {
    return {
        PDid: req.PDid
    };
};

module.exports = { fromRequest_get, fromDb_get, fromRequest_create, fromRequest_delete, fromRequest_update,fromRequest_cosmetic_get };
