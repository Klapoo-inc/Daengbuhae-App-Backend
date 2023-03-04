const fromRequest_create = (req) => {
    return {
        Uid: req.body.Uid,
        Cid: req.body.Cid,
        Rid: req.body.Rid,
        content: req.body.content
    };
};

module.exports = {fromRequest_create};