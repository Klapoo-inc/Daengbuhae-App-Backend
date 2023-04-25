const fromRequest_create = (req) => {
    return {
        Uid: req.body.Uid? req.body.Uid: "undefined user",
        Cid: req.body.Cid? req.body.Cid: "undefined cosmetic",
        state: req.body.state? req.body.state: "undefined state"
    };
};

module.exports = {fromRequest_create}