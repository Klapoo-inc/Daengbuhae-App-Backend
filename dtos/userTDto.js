const fromRequest_create = (req) => {
    return {
        Uid: req.body.Uid? req.body.Uid: "undefined user",
    };
};

module.exports = {fromRequest_create}