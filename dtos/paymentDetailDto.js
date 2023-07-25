const fromRequest_get_by_user = (req) => {
    return {
        Uid: req.query.Uid
    };
};
const fromRequest_get = (req) => {
    return {
        PMDid: req.query.PMDid
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
    const dt = new Date()
    return {
        PDid: req.body.PDid?req.body.PDid: req.PDid,
        PMid: req.body.PMid,
        delivery_uid: req.body.delivery_uid,
        Uid: req.body.Uid,
        state: 'ready',
        quentity: req.body.quentity?req.body.quentity:req.quentity,
        date: dt,
        price: req.body.price?req.body.price:req.price
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

module.exports = { fromRequest_get_by_user,fromRequest_get, fromDb_get, fromRequest_create, fromRequest_delete, fromRequest_update,fromRequest_cosmetic_get };
