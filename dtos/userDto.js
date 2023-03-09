const fromRequest_create = (req) => {
    return {
        Uid: req.body.Uid,
        ads: req.body.ads,
        provider: req.body.provider,
        email: req.body.email,
        token: req.body.token,
    };
};

const fromRequest_update = (req) => {
    return {
        ads: req.body.ads,
        email: req.body.email
    }
}
const fromRequest_delete = (req) => {
    return {
        Uid: req.query.Uid
    };
};
const fromRequest_get = (req) => {
    return {
        Uid: req.query.Uid
    };
};

module.exports = {fromRequest_create, fromRequest_update, fromRequest_delete, fromRequest_get};